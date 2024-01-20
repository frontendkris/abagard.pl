import React from "react";

interface ArrowButton {
  href: string;
  title: string;
  bgColor: 'black';
}

interface Validator {
  isValid(ArrowButton: ArrowButton): boolean;
}

class HrefValidator implements Validator {
  constructor() {}

  isValid({href}: ArrowButton): boolean {
    if (href.slice(-1) != '/') {
      const hrefError = new Error("Atrybut Href musi kończyć się znakiem '/'");
      console.error(hrefError);
      return false;
    }
    return href != null && href.length > 0;
  }
}

export default function ArrowButton(params: ArrowButton) {
  const validators = [new HrefValidator()];
  const isValid = validators.every(validator => validator.isValid(params));
  
  if (!isValid) {
    return;
  }

  return(
    <a href={params.href}>
      <button type="button" className={`
        ${params.bgColor == 'black' && 'bg-black text-white'}
        text-base lg:text-lg font-bold focus:ring-4 focus:outline-none px-6 lg:px-12 py-4 gap-2 lg:gap-6 text-center inline-flex w-full md:w-auto
      `}>
          {params.title}
          <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1 lg:mt-1 lg:-mr-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </button>
    </a>
  )
}