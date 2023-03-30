

async function getUserData() {
  await sleep(2000);
  return {
    uid: '123',
    phone: '+1234567890',
    name: 'John Doe',
    age: 42,
  };
}

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
  

export { getUserData }