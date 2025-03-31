fetch("https://dummyjson.com/users/13")
    .then((Response) => Response.json())
    .then((result) => {
        console.log(result);

        const conta = document.querySelector('.container');  
        const conti = document.querySelector('.conti')

        const profileid = document.getElementById("profileid");
        profileid.innerHTML = `<img id="profileimg" src="${result.image}" alt="">`;




        const img = document.createElement('img');  
        img.id = 'profileimgg';
        img.src = result.image;
        img.alt = 'Profile Image';

        const adress = document.createElement('div');
        adress.className = 'div'
        adress.innerHTML = `<h4 class="adresstitle">adress:   </h4> <p class="adress"> ${result.address.country}, ${result.address.city}</p>`;

        const age = document.createElement('div');
        age.className = 'div';
        age.innerHTML = `<h4 class="adresstitle">age:  </h4> <p class="adress"> ${result.age}</p>`;

        const bank = document.createElement('div');
        bank.className = 'div';
        bank.innerHTML = `<h4 class="adresstitle">BANK, cardnumber:  </h4> <p class="adress"> ${result.bank.cardNumber}</p>`

        const birthDate = document.createElement('div');
        birthDate.className = 'div';
        birthDate.innerHTML = `<h4 class="adresstitle">birthDate:  </h4> <p class="adress"> ${result.birthDate}</p>`

        const company = document.createElement('div');
        company.className = 'div';
        company.innerHTML = `<h4 class="adresstitle">company:  </h4> <p class="adress"> ${result.company.address.address}</p>`
        
        const ein = document.createElement('div');
        ein.className = 'div';
        ein.innerHTML = `<h4 class="adresstitle">ein:  </h4> <p class="adress"> ${result.ein}</p>`;

        const email = document.createElement('div');
        email.className = 'div';
        email.innerHTML = `<h4 class="adresstitle">email:  </h4> <p class="adress"> ${result.email}</p>`;

        const eye = document.createElement('div');
        eye.className = 'div';
        eye.innerHTML = `<h4 class="adresstitle">eye color:  </h4> <p class="adress"> ${result.eyeColor}</p>`;

        const firstname = document.createElement('div');
        firstname.className = 'div';
        firstname.innerHTML = `<h2 class="adresstitle">${result.firstName}</h2>`;

        const lastname = document.createElement('div');
        lastname.className = 'div';
        lastname.innerHTML = `<h2 class="adresstitle"> ${result.lastName}</h2>`;

        const gender = document.createElement('div');
        gender.className = 'div';
        gender.innerHTML = `<h4 class="adresstitle">gender:  </h4> <p class="adress"> ${result.gender}</p>`;

        const hair = document.createElement('div');
        hair.className = 'div';
        hair.innerHTML = `<h4 class="adresstitle">hair:  </h4> <p class="adress"> ${result.hair.color} ${result.hair.type}</p>`;

        const height = document.createElement('div');
        height.className = 'div';
        height.innerHTML = `<h4 class="adresstitle">height:  </h4> <p class="adress"> ${result.height}</p>`;

        const password = document.createElement('div');
        password.className = 'div';
        password.innerHTML = `<h4 class="adresstitle">password:  </h4> <p class="adress"> ${result.password}</p>`;

        const phone = document.createElement('div');
        phone.className = 'div';
        phone.innerHTML = `<h4 class="adresstitle">phone:  </h4> <p class="adress"> ${result.phone}</p>`;

        const role = document.createElement('div');
        role.className = 'div';
        role.innerHTML = `<h4 class="adresstitle">role:  </h4> <p class="adress"> ${result.role}</p>`;

        const university = document.createElement('div');
        university.className = 'div';
        university.innerHTML = `<h4 class="adresstitle">university:  </h4> <p class="adress"> ${result.university}</p>`;

        const weight = document.createElement('div');
        weight.className = 'div';
        weight.innerHTML = `<h4 class="adresstitle">weight:  </h4> <p class="adress"> ${result.weight}</p>`;




        conti.append(img, firstname, lastname)
        conta.append(adress, age, bank, birthDate, company, ein, email, eye,  gender, hair, height, password, phone, role, university, weight)
        
        
    })
