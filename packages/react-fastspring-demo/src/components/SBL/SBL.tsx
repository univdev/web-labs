import { useEffect } from 'react';

import _ from 'lodash';

const importSBLScript = _.once(() => {
  const script = document.createElement('script');

  script.src = 'https://sbl.onfastspring.com/sbl/0.9.5/fastspring-builder.min.js';
  script.type = 'text/javascript';

  script.setAttribute('id', 'fsc-api');
  script.setAttribute('data-storefront', process.env.REACT_APP_FAST_SPRING_STOREFRONT as string);
  script.setAttribute('data-continuous', 'true');
  script.setAttribute('data-data-callback', 'onDataCallback');
  script.setAttribute('data-popup-webhook-received', 'onReceiveWebhook');
  script.setAttribute('data-popup-closed', 'onFastSpringClosedPopup');
  script.setAttribute('async', 'true');

  document.body.append(script);
});

export function SBL() {
  useEffect(() => {
    importSBLScript();

    return () => {

    };
  }, []);

  return (<div id="SBL" />);
}

export default SBL;
