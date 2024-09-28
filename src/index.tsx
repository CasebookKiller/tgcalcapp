import { DispatchWithoutAction, FC, useState } from 'react';
import ReactDOM from 'react-dom/client';
import {
  useThemeParams,
  WebAppProvider,
} from '@vkruglikov/react-telegram-web-app';
import { ConfigProvider, theme } from 'antd';
import 'antd/dist/reset.css';

import './index.css';
import logo from './logo.svg';

import MainButton from './components/MainButton';
import BackButton from './components/BackButton';
import ShowPopup from './components/ShowPopup';
import HapticFeedback from './components/HapticFeedback';
import ScanQrPopup from './components/ScanQrPopup';
import Expand from './components/Expand';
import useBetaVersion from './useBetaVersion';
import Calculator from './components/Calculator';

const TGApp: FC<{
  onChangeTransition: DispatchWithoutAction;
}> = ({ onChangeTransition }) => {
  const [colorScheme, themeParams] = useThemeParams();
  const [isBetaVersion, handleRequestBeta] = useBetaVersion(false);
  const [activeBtn, setActiveBtn] = useState(true);

  return (
    <div>
      <ConfigProvider
        theme={
          themeParams.text_color
            ? {
                algorithm:
                  colorScheme === 'dark'
                    ? theme.darkAlgorithm
                    : theme.defaultAlgorithm,
                token: {
                  colorText: themeParams.text_color,
                  colorPrimary: themeParams.button_color,
                  colorBgBase: themeParams.bg_color,
                },
              }
            : undefined
        }
      >
        <header className="App-header">
          <img
            onClick={handleRequestBeta}
            src={logo}
            className="App-logo"
            alt="logo"
          />
        </header>
        <div className="contentWrapper">
          {isBetaVersion && (
            <div className="betaVersion">
              <h3>ВНИМАНИЕ: БЕТА ВЕРСИЯ</h3>
              <button onClick={() => setActiveBtn(state => !state)}>
                изменить кнопку
              </button>
              <button onClick={onChangeTransition}>изменить </button>
            </div>
          )}
          <Expand />
          {!activeBtn ? (
            <MainButton
              initialValues={{
                show: isBetaVersion,
                text: 'ВТОРАЯ КНОПКА',
                progress: true,
              }}
              key="1"
            />
          ) : (
            <MainButton
              key="2"
              initialValues={{
                show: isBetaVersion,
              }}
            />
          )}
          <Calculator />
          <BackButton />
          <ShowPopup />
          <HapticFeedback />
          <ScanQrPopup />
        </div>
      </ConfigProvider>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const App = () => {
  const [smoothButtonsTransition, setSmoothButtonsTransition] = useState(true);

  return (
    <WebAppProvider options={{ smoothButtonsTransition }}>
      <TGApp
        onChangeTransition={() => setSmoothButtonsTransition(state => !state)}
      />
    </WebAppProvider>
  );
};

root.render(<App />);