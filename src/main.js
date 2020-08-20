function formattedPhone(phone) {
  return `${phone.substr(0, 2)} (${phone.substr(2, 3)}) ${phone.substr(5, 3)}-${phone.substr(8, 2)}-${phone.substr(10, 2)}`;
}

console.log(formattedPhone('+71234567890')); // +7 (123) 456-78-90