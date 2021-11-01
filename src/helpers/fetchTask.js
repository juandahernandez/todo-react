const getTasks = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data.slice(0, 20);
  } catch (error) {
    console.log(error);
  }
};

export default getTasks;
