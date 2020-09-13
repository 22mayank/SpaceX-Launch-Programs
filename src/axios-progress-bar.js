import NProgress from "nprogress";

// const calculatePercentage = (loaded, total) => (Math.floor(loaded * 1.0) / total);

let requestsCounter = 0;
export function loadProgressBar(axios, config) {
  const setupStartProgress = () => {
    axios.interceptors.request.use((config) => {
      requestsCounter++;
      NProgress.start();
      return config;
    });
  };

  const setupStopProgress = () => {
    const responseFunc = (response) => {
      if (--requestsCounter === 0) {
        NProgress.done();
      }
      return response;
    };

    const errorFunc = (error) => {
      if (--requestsCounter === 0) {
        NProgress.done();
      }

      return Promise.reject(error);
    };
    axios.interceptors.response.use(responseFunc, errorFunc);
  };

  NProgress.configure(config);
  setupStartProgress();
  setupStopProgress();
}

export function stopProgress() {
  NProgress.done();
}

export function startProgress() {
  NProgress.start();
}
