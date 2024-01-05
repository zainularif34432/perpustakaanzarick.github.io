onload = function() {

    //declaring variabel
    let id = document.getElementById("app")
    let loading = document.createElement("div")

    //fill the content
    loading.textContent = "loading"
    loading.style.fontSize = "30px"
    id.appendChild(loading)

    //dalam waktu berapa lama dilakukan pengubahan DOM
    let loaded = this.setInterval(() => {
        loading.textContent = loading.textContent + "."
    },1000)// 10000ms = 10detik

    this.setTimeout(() => {
        this.clearInterval(loaded)
        loading.textContent = "Selamat Datang"
    }, 20000)
}
function Redirect() {
    window.location = "home.html"
}
setTimeout('Redirect()', 25000)