import React from "react";
import useCopyToClipboard from '../hooks/useCopyToClipboard'
import CopyIcon from "assets/copy.svg";
import CheckIcon from "assets/check.svg";

const ToastMessage = () => {
  const [value, copy] = useCopyToClipboard()
  return <div>
    <p className="text-sm block">Oh une erreur est survenue !</p>
    <p className="text-sm block mb-2">Copiez mon adresse pour m'envoyer un email.</p>

    <div className="flex items-center">
      <p
        className={`text-sm font-bold block mr-2 ${value ? "" : "cursor-pointer"}`}
        onClick={() => copy('angelinevozza@gmail.com')}
      >
        angelinevozza@gmail.com
      </p>
      {
        value ?
          <CheckIcon />
          :
        <CopyIcon
          className={`${value ? "" : "cursor-pointer"}`}
          onClick={() => copy('angelinevozza@gmail.com')}
        />
      }
    </div>
  </div>
;
}

export default ToastMessage;
