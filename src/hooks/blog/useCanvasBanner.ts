/**
 * 动态计算内容高度，根据锚点dom最下坐标到屏幕最下坐标，根据传入dom的高度、padding、margin等值进行动态计算
 * 最终获取合适的内容高度
 *
 * @param flag 用于开启计算的响应式标识
 * @param anchorRef 锚点组件 Ref<ElRef | ComponentRef>
 * @param subtractHeightRefs 待减去高度的组件列表 Ref<ElRef | ComponentRef>
 * @param substractSpaceRefs 待减去空闲空间(margins/paddings)的组件列表 Ref<ElRef | ComponentRef>
 * @param offsetHeightRef 计算偏移的响应式高度，计算高度时将直接减去此值
 * @param upwardSpace 向上递归减去空闲空间的 层级 或 直到指定class为止 数值为2代表向上递归两次|数值为ant-layout表示向上递归直到碰见.ant-layout为止
 * @returns 响应式高度
 */

export function useCanvasBanner(canvasRef) {
  const canvasEl = unref(canvasRef);

  //需要重新设置canvas宽度，因为dom加载完毕后有可能没有滚动条
  canvasEl.width = window.document.body.clientWidth;

  const ctx = canvasEl.getContext('2d');
  ctx.strokeStyle = new Color(150).style;

  let dotCount = 20; //圆点数量
  let dotRadius = 70; //产生连线的范围
  let dotDistance = 70; //产生连线的最小距离
  const screenWidth = screen.width;
  if (screenWidth >= 768 && screenWidth < 992) {
    dotCount = 130;
    dotRadius = 100;
    dotDistance = 60;
  } else if (screenWidth >= 992 && screenWidth < 1200) {
    dotCount = 140;
    dotRadius = 140;
    dotDistance = 70;
  } else if (screenWidth >= 1200 && screenWidth < 1700) {
    dotCount = 140;
    dotRadius = 150;
    dotDistance = 80;
  } else if (screenWidth >= 1700) {
    dotCount = 200;
    dotRadius = 150;
    dotDistance = 80;
  }

  //默认鼠标位置 canvas 中间
  const mousePosition = {
    x: (50 * canvasEl.width) / 100,
    y: (50 * canvasEl.height) / 100,
  };

  //小圆点
  const dots = {
    count: dotCount,
    distance: dotDistance,
    d_radius: dotRadius,
    array: [],
  };

  function colorValue(min) {
    return Math.floor(Math.random() * 255 + min);
  }

  function createColorStyle(r, g, b) {
    return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
  }

  function mixComponents(comp1, weight1, comp2, weight2) {
    return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
  }

  function averageColorStyles(dot1, dot2) {
    const color1 = dot1.color,
      color2 = dot2.color;

    const r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
      g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
      b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
    return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
  }

  function Color(min) {
    min = min || 0;
    this.r = colorValue(min);
    this.g = colorValue(min);
    this.b = colorValue(min);
    this.style = createColorStyle(this.r, this.g, this.b);
  }

  function Dot() {
    this.x = Math.random() * canvasEl.width;
    this.y = Math.random() * canvasEl.height;

    this.vx = -0.5 + Math.random();
    this.vy = -0.5 + Math.random();

    this.radius = Math.random() * 2;

    this.color = new Color();
  }

  Dot.prototype = {
    draw: function () {
      ctx.beginPath();
      ctx.fillStyle = '#fff';
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fill();
    },
  };

  function createDots() {
    for (let i = 0; i < dots.count; i++) {
      dots.array.push(new Dot());
    }
  }

  function moveDots() {
    for (let i = 0; i < dots.count; i++) {
      const dot = dots.array[i];

      if (dot.y < 0 || dot.y > canvasEl.height) {
        dot.vx = dot.vx;
        dot.vy = -dot.vy;
      } else if (dot.x < 0 || dot.x > canvasEl.width) {
        dot.vx = -dot.vx;
        dot.vy = dot.vy;
      }
      dot.x += dot.vx;
      dot.y += dot.vy;
    }
  }

  function connectDots1() {
    const pointx = mousePosition.x;
    for (let i = 0; i < dots.count; i++) {
      for (let j = 0; j < dots.count; j++) {
        const i_dot = dots.array[i];
        const j_dot = dots.array[j];

        if (
          i_dot.x - j_dot.x < dots.distance &&
          i_dot.y - j_dot.y < dots.distance &&
          i_dot.x - j_dot.x > -dots.distance &&
          i_dot.y - j_dot.y > -dots.distance
        ) {
          if (
            i_dot.x - pointx < dots.d_radius &&
            i_dot.y - mousePosition.y < dots.d_radius &&
            i_dot.x - pointx > -dots.d_radius &&
            i_dot.y - mousePosition.y > -dots.d_radius
          ) {
            ctx.beginPath();
            ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
            ctx.moveTo(i_dot.x, i_dot.y);
            ctx.lineTo(j_dot.x, j_dot.y);
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    }
  }

  function drawDots() {
    for (let i = 0; i < dots.count; i++) {
      const dot = dots.array[i];
      dot.draw();
    }
  }

  function animateDots() {
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
    moveDots();
    connectDots1();
    drawDots();

    requestAnimationFrame(animateDots);
  }

  //鼠标在canvas上移动
  canvasEl.on('mousemove', function (e) {
    mousePosition.x = e.pageX;
    mousePosition.y = e.pageY;
  });

  //鼠标移出canvas
  canvasEl.on('mouseleave', function (e) {
    mousePosition.x = canvasEl.width / 2;
    mousePosition.y = canvasEl.height / 2;
  });

  createDots();

  requestAnimationFrame(animateDots);
}
