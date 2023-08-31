export {};

declare global {
  interface Window {
    // FastSpring SDK
    fastspring?: any;

    // FastSpring Session 객체 변수
    fscSession?: any;

    // webhook 수신 callback 정의
    onReceiveWebHook?: (data: any) => any;

    // 팝업 닫힘 callback
    onFastSpringClosedPopup?: (data: any) => any;

    // data callback
    onDataCallback?: () => any;
  }
}
