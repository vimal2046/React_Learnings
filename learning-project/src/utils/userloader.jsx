export const userLoader = async () => {
    const res =await fetch("https://jsonplaceholder.typicode.com/users")
    return res.json();
}