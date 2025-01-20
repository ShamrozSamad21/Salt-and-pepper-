function storeFormData() {

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const mobile = document.getElementById('mobile').value;
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const country = document.getElementById('country').value;
    const brands = document.getElementById('brands').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('mobile', mobile);
    localStorage.setItem('city', city);
    localStorage.setItem('province', province);
    localStorage.setItem('country', country);
    localStorage.setItem('brands', brands);

    window.location.href = "showfranchise.html";
}

function displayFormData() {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const phone = localStorage.getItem('phone');
    const mobile = localStorage.getItem('mobile');
    const city = localStorage.getItem('city');
    const province = localStorage.getItem('province');
    const country = localStorage.getItem('country');
    const brands = localStorage.getItem('brands');
    document.getElementById('displayName').textContent = name || 'N/A';
    document.getElementById('displayEmail').textContent = email || 'N/A';
    document.getElementById('displayPhone').textContent = phone || 'N/A';
    document.getElementById('displayMobile').textContent = mobile || 'N/A';
    document.getElementById('displayCity').textContent = city || 'N/A';
    document.getElementById('displayProvince').textContent = province || 'N/A';
    document.getElementById('displayCountry').textContent = country || 'N/A';
    document.getElementById('displayBrands').textContent = brands || 'N/A';
}

