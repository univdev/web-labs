import { useEffect } from 'react';
import { Button } from './components/Button/Button';
import SBL from './components/SBL/SBL';

export default function App() {
  const onReceiveWebhook = (data: any) => {
    console.log('webhook', data);
  };

  useEffect(() => {
    window.onReceiveWebHook = onReceiveWebhook;
    // window.onFastSpringClosedPopup = onReceiveWebHook;

    return () => {
      delete window.onReceiveWebHook;
      // delete window.onFastSpringClosedPopup;
    };
  }, [onReceiveWebhook]);

  const shippingOneTimePlan = () => {
    if (window.fastspring) {
      window.fastspring.builder.reset();
      window.fastspring.builder.tag({
        userId: 'hello world',
      });
      window.fastspring.builder.add('one-time-plan');
      window.fastspring.builder.checkout();
    }
  };

  const shippingYearlyPlan = () => {
    if (window.fastspring) {
      window.fastspring.builder.reset();
      window.fastspring.builder.tag({
        userId: 'hello world',
      });
      window.fastspring.builder.add('yearly-plan');
      window.fastspring.builder.checkout();
    }
  };

  return (
    <div className="App">
      <SBL />

      <Button
        onClick={shippingOneTimePlan}
      >
        Add One Time Plan
      </Button>

      <Button
        onClick={shippingYearlyPlan}
      >
        Add Subscribe Plan
      </Button>
    </div>
  );
}
