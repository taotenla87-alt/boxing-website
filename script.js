// ==========================
// HIỂN THỊ POPUP
// ==========================

function showMember(image, name, weight, age, record) {

    document.getElementById("popup").style.display = "flex";

    document.getElementById("popup-img").src = image;

    document.getElementById("popup-name").innerHTML = name;

    document.getElementById("popup-weight").innerHTML = "🥊 Hạng cân: " + weight;

    document.getElementById("popup-age").innerHTML = "🎂 Tuổi: " + age;

    document.getElementById("popup-record").innerHTML = "🏆 Thành tích: " + record;

}

// ==========================
// ĐÓNG POPUP
// ==========================

function closePopup() {

    document.getElementById("popup").style.display = "none";

}

// ==========================
// CLICK RA NGOÀI ĐỂ ĐÓNG
// ==========================

window.onclick = function (event) {

    let popup = document.getElementById("popup");

    if (event.target == popup) {

        popup.style.display = "none";

    }

}

// ==========================
// NHẤN ESC ĐỂ ĐÓNG
// ==========================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closePopup();

    }

});

// ==========================
// KIỂM TRA FILE JS ĐÃ CHẠY
// ==========================

console.log("✅ IKFC Website Loaded Successfully");