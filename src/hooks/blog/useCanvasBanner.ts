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
import type { Ref } from 'vue';
interface ColorInstance {
  r: number;
  g: number;
  b: number;
  style: string;
}

interface DotInstance {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: ColorInstance;
  ctx: CanvasRenderingContext2D;
  draw: () => void;
}

interface DotOptions {
  ctx: CanvasRenderingContext2D;
  canvasEl: HTMLCanvasElement;
}

interface Dots {
  count: number;
  distance: number;
  d_radius: number;
  array: Array<DotInstance>;
}

export function useCanvasBanner(canvasRef: Ref<HTMLCanvasElement>) {
  function colorValue(min: number) {
    return Math.floor(Math.random() * 255 + min);
  }

  function createColorStyle(r: number, g: number, b: number) {
    return 'rgba(' + r + ',' + g + ',' + b + ', 0.8)';
  }

  function mixComponents(comp1: number, weight1: number, comp2: number, weight2: number) {
    return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
  }

  function averageColorStyles(dot1: DotInstance, dot2: DotInstance) {
    const color1 = dot1.color,
      color2 = dot2.color;

    const r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
      g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
      b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
    return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
  }

  class Color {
    r: number;
    g: number;
    b: number;
    style: string;
    constructor(min?: number) {
      const minVal: number = min || 0;
      this.r = colorValue(minVal);
      this.g = colorValue(minVal);
      this.b = colorValue(minVal);
      this.style = createColorStyle(this.r, this.g, this.b);
    }
  }

  class Dot {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: ColorInstance;
    ctx: CanvasRenderingContext2D;

    constructor(options: DotOptions) {
      const { ctx, canvasEl } = options;
      this.ctx = ctx;
      this.x = Math.random() * canvasEl.width;
      this.y = Math.random() * canvasEl.height;

      this.vx = -0.5 + Math.random();
      this.vy = -0.5 + Math.random();

      this.radius = Math.random() * 2;

      this.color = new Color();
    }

    draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = '#fff';
      this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      this.ctx.fill();
    }
  }

  // 创建canvas banner
  const createCanvasBanner = () => {
    const canvasEl = unref(canvasRef);

    // 设置canvas宽高
    canvasEl.width = window.document.body.clientWidth - 10; //减去滚动条的宽度
    if (screen.width >= 992) {
      canvasEl.height = (window.innerHeight * 1) / 3;
    } else {
      canvasEl.height = (window.innerHeight * 2) / 7;
    }

    //需要重新设置canvas宽度，因为dom加载完毕后有可能没有滚动条
    canvasEl.width = window.document.body.clientWidth;

    const ctx = canvasEl!.getContext('2d') as unknown as CanvasRenderingContext2D;
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

    // : DotOptions
    const option = {
      ctx,
      canvasEl,
    };

    // 小圆点
    const dots: Dots = {
      count: dotCount,
      distance: dotDistance,
      d_radius: dotRadius,
      array: [],
    };

    function createDots(option: DotOptions, count: number) {
      const arr: Array<DotInstance> = [];
      for (let i = 0; i < count; i++) {
        const newDot: DotInstance = new Dot(option);
        arr.push(newDot);
      }
      return arr;
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
    canvasEl.addEventListener('mousemove', function (e) {
      mousePosition.x = e.pageX;
      mousePosition.y = e.pageY;
    });

    //鼠标移出canvas
    canvasEl.addEventListener('mouseleave', function () {
      mousePosition.x = canvasEl.width / 2;
      mousePosition.y = canvasEl.height / 2;
    });

    // createDots();
    dots.array = createDots(option, dots.count);
    requestAnimationFrame(animateDots);
  };

  //窗口大小改变时改变canvas宽度
  function resizeCanvas() {
    const canvasEl = unref(canvasRef);
    canvasEl.width = window.document.body.clientWidth;
    canvasEl.height = (window.innerHeight * 1) / 3;
  }

  onMounted(() => {
    //监听窗口大小改变
    window.addEventListener('resize', resizeCanvas, false);
  });

  return { createCanvasBanner };
}
