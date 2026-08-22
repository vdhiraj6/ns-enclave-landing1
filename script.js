function sendWhatsApp(e){
  e.preventDefault();
  const name=document.getElementById('name').value.trim();
  const phone=document.getElementById('phone').value.trim();
  const req=document.getElementById('requirement').value;
  const visit=document.getElementById('visit').value;
  const msg=`Hi, I am ${name}. I am interested in NS Enclave, Rabupura. My mobile number is ${phone}. Requirement: ${req}. Preferred site visit: ${visit}. Please share available plot details and next steps.`;
  window.open('https://wa.me/919599605177?text='+encodeURIComponent(msg),'_blank');
}
