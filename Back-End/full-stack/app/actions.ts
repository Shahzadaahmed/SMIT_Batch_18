"use server";

const fetchAllNewUsers = async () => {
    let apiUrl = "https://dummyjson.com/users";
    let res = await fetch(apiUrl);
    let actualData = await res.json();
    // console.log('Users:', actualData);
    return actualData;
};

export { fetchAllNewUsers };