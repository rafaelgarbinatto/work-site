"use client";
import { useEffect, useRef } from 'react';
import Script from 'next/script';

// Declarar tipos globais para as funções do Zoho
declare global {
  interface Window {
    validateEmail6990194000000597077: () => boolean;
    checkMandatory6990194000000597077: () => boolean;
    tooltipShow6990194000000597077: (el: HTMLElement) => void;
  }
}

export default function ZohoForm() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  
  useEffect(() => {
    // Adicionar atributo ftype ao campo de email após renderização
    if (emailInputRef.current) {
      emailInputRef.current.setAttribute('ftype', 'email');
    }
    // Adicionar as funções de validação ao escopo global
    window.validateEmail6990194000000597077 = function() {
      const form = (document.forms as any)['WebToLeads6990194000000597077'];
      const emailFld = form.querySelectorAll('[ftype=email]');
      for (let i = 0; i < emailFld.length; i++) {
        const emailVal = (emailFld[i] as HTMLInputElement).value;
        if (emailVal.replace(/^\s+|\s+$/g, '').length !== 0) {
          const atpos = emailVal.indexOf('@');
          const dotpos = emailVal.lastIndexOf('.');
          if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
            alert('Insira um endereço de e-mail válido.');
            (emailFld[i] as HTMLInputElement).focus();
            return false;
          }
        }
      }
      return true;
    };

    window.checkMandatory6990194000000597077 = function() {
      const mndFileds = ['Last Name', 'Email', 'Phone'];
      const fldLangVal = ['Nome completo', 'E-mail', 'Telefone'];
      
      for (let i = 0; i < mndFileds.length; i++) {
        const fieldObj = (document.forms as any)['WebToLeads6990194000000597077'][mndFileds[i]];
        if (fieldObj) {
          if (fieldObj.value.replace(/^\s+|\s+$/g, '').length === 0) {
            if (fieldObj.type === 'file') {
              alert('Selecione um arquivo para fazer o upload.');
              fieldObj.focus();
              return false;
            }
            alert(fldLangVal[i] + ' não pode ficar em branco.');
            fieldObj.focus();
            return false;
          } else if (fieldObj.nodeName === 'SELECT') {
            if (fieldObj.options[fieldObj.selectedIndex].value === '-None-') {
              alert(fldLangVal[i] + ' não pode ficar em branco.');
              fieldObj.focus();
              return false;
            }
          } else if (fieldObj.type === 'checkbox') {
            if (fieldObj.checked === false) {
              alert('Please accept ' + fldLangVal[i]);
              fieldObj.focus();
              return false;
            }
          }
        }
      }
      
      if (!window.validateEmail6990194000000597077()) {
        return false;
      }
      
      // Handle smarturl parameter - apenas no browser
      if (typeof window !== 'undefined') {
        const urlparams = new URLSearchParams(window.location.search);
        if (urlparams.has('service') && urlparams.get('service') === 'smarturl') {
          const webform = document.getElementById('webform6990194000000597077');
          const service = urlparams.get('service');
          const smarturlfield = document.createElement('input');
          smarturlfield.setAttribute('type', 'hidden');
          smarturlfield.setAttribute('value', service!);
          smarturlfield.setAttribute('name', 'service');
          webform?.appendChild(smarturlfield);
        }
      }
      
      // Desabilitar o botão após validação bem-sucedida
      setTimeout(() => {
        const submitBtn = document.querySelector('.crmWebToEntityForm .formsubmit') as HTMLButtonElement;
        if (submitBtn) {
          submitBtn.disabled = true;
        }
      }, 100);
      
      return true;
    };

    window.tooltipShow6990194000000597077 = function(el: HTMLElement) {
      const tooltip = el.nextElementSibling as HTMLElement;
      const tooltipDisplay = tooltip.style.display;
      if (tooltipDisplay === 'none') {
        const allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
        for (let i = 0; i < allTooltip.length; i++) {
          (allTooltip[i] as HTMLElement).style.display = 'none';
        }
        tooltip.style.display = 'block';
      } else {
        tooltip.style.display = 'none';
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Definir charset conforme o Zoho espera
    (document as any).charset = 'UTF-8';
    
    const isValid = window.checkMandatory6990194000000597077();
    if (isValid) {
      const form = e.target as HTMLFormElement;
      form.submit();
    }
  };

  return (
    <>
      <div id='crmWebToEntityForm' className='crmWebToEntityForm card-gradient-border p-8'>
        <form 
          id='webform6990194000000597077' 
          action='https://crm.zoho.com/crm/WebToLeadForm' 
          name='WebToLeads6990194000000597077' 
          method='POST' 
          onSubmit={handleSubmit}
          acceptCharset='UTF-8' 
          className="space-y-6"
        >
          <input type='text' style={{ display: 'none' }} name='xnQsjsdp' value='fc9162c97e0cbf55218af48065a06efec0910546c1de962bb0d714fed68c0069' readOnly />
          <input type='hidden' name='zc_gad' id='zc_gad' value='' readOnly />
          <input type='text' style={{ display: 'none' }} name='xmIwtLD' value='08569622350955256c410a448b17433cf67e8fd0a5754da17ae726e30a9b60c3ab55786b3779b11de94c146fd4416133' readOnly />
          <input type='text' style={{ display: 'none' }} name='actionType' value='TGVhZHM=' readOnly />
          <input type='text' style={{ display: 'none' }} name='returnURL' value='https://work.poa.br' readOnly />
          {/* Campo honeypot anti-spam */}
          <input type='text' style={{ display: 'none' }} name='aG9uZXlwb3Q' value='' readOnly />
          
          <div>
            <input 
              type='text' 
              id='Last_Name' 
              name='Last Name' 
              placeholder="Nome completo" 
              className="input-modern w-full" 
              required 
              maxLength={80}
            />
          </div>
          
          <div>
            <input 
              ref={emailInputRef}
              type='text' 
              autoComplete='false' 
              id='Email' 
              name='Email' 
              placeholder="E-mail" 
              className="input-modern w-full" 
              required 
              maxLength={100}
            />
          </div>
          
          <div>
            <input 
              type='text' 
              id='Phone' 
              name='Phone' 
              placeholder="Telefone" 
              className="input-modern w-full" 
              required 
              maxLength={30}
            />
          </div>
          
          <div>
            <textarea 
              id='Description' 
              name='Description' 
              placeholder="Como podemos ajudar?" 
              rows={4} 
              className="input-modern w-full resize-none"
            />
          </div>
          
          <button type='submit' id='formsubmit' className='btn-primary w-full'>
            Enviar Mensagem
          </button>
        </form>
      </div>
      
      <Script 
        id='wf_anal' 
        src='https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=bbf707beb7f4cf093bd470489cffaf8fff9702c9356af50de365bddc9a895f46f09d85d74ab59cbaba5e8303067004e9gid1ba28a71c586e72d2056583e094da64225d48f4114208a0e2a7df5c3ecd60139gid9697b0da18bd28b8aff04c69e9a858a9d7e1be66c381a99371975f0cd3d7c8a8gid94edef98a7339014156fd263c4f4fd40174773462b9821aab78938520182a660&tw=edc407c5e025d2b594180faa5b9d2e45a5a9b4ced467d292cbf498a6a0b1d3d2'
        strategy="afterInteractive"
      />
    </>
  );
}
