import { ElLoading } from 'element-plus';
import type { LoadingOptions } from 'element-plus';
import { debounce } from 'lodash-es';

export default class Loading {
  private loadingRequestCount: number;
  private loadingInstance: ReturnType<typeof ElLoading.service> | null;
  private readonly options: LoadingOptions;

  constructor(options: LoadingOptions) {
    this.loadingRequestCount = 0;
    this.loadingInstance = null;
    this.options = options || {};
  }

  show() {
    if (this.loadingRequestCount === 0 && !this.loadingInstance) {
      this.loadingInstance = ElLoading.service(this.options);
    }
    this.loadingRequestCount++;
  }

  hide() {
    if (this.loadingRequestCount <= 0) return;

    this.loadingRequestCount--;
    Math.max(this.loadingRequestCount, 0);

    if (this.loadingRequestCount === 0) {
      // 防抖 防止连续请求loading闪烁
      debounce(() => {
        this.loadingInstance?.close();
        this.loadingInstance = null;
      }, 300)();
    }
  }
}
