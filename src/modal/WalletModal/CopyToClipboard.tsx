import React, { useState } from 'react';
import { Button, Popup } from 'semantic-ui-react';



interface Props {
  toCopy: string;
}


const CopyToClipboard: React.FC<Props> = ({ toCopy, children, ...props }) => {
  const [isTooltipDisplayed, setIsTooltipDisplayed] = useState(false);

  const copyToClipboardWithCommand = (content: string) => {
    const el = document.createElement('textarea');
    el.value = content;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  function displayTooltip() {
    setIsTooltipDisplayed(true);
    setTimeout(() => {
      setIsTooltipDisplayed(false);
    }, 1000);
  }

  return (
    <Button
      small
      bold
      onClick={() => {
        if (navigator.clipboard && navigator.permissions) {
          navigator.clipboard.writeText(toCopy).then(() => displayTooltip());
        } else if (document.queryCommandSupported('copy')) {
          copyToClipboardWithCommand(toCopy);
          displayTooltip();
        }
      }}
      {...props}
    >
      {children}
      <Popup isTooltipDisplayed={isTooltipDisplayed}>Copied</Popup>
    </Button>
  );
};

export default CopyToClipboard;
