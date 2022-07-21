let fetchData = async () => {
    try {
        let data = await window.fetch("https://api.github.com/users")
        let fetchda = await data.json()
        console.log(fetchda);
    } catch (error) {
        console.log(error);
    }
}
fetchData()