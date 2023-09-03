const getUrl = " https://api.github.com/users/"
const input = document.querySelector(".get-form__form input")
const form = document.querySelector(".get-form__form")
const form_body = document.querySelector(".get-form")
const content = document.querySelector(".content");
const profile_avatar = document.querySelector(".header__item-profile")
const errormessage = document.querySelector(".notfound")
const tabs_list = document.querySelector(".tabs__list")
const tabsContent = document.querySelector(".tabs__content")

let ValContent = false;

const contentView = () => {
    if (ValContent) {
        form_body.style.display = "none";
        content.style.display = "block";
    }
}

let tabsArray = [
    {
        innerH: `
                <svg
                width="17"
                height="15"
                viewBox="0 0 17 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path
                    d="M0.527893 1.65168C0.527893 1.45276 0.606911 1.262 0.747563 1.12135C0.888215 0.980694 1.07898 0.901677 1.27789 0.901677H5.53089C6.75789 0.901677 7.84789 1.49168 8.53089 2.40268C8.88001 1.93595 9.33331 1.5572 9.85467 1.29661C10.376 1.03602 10.951 0.900781 11.5339 0.901677H15.7789C15.9778 0.901677 16.1686 0.980694 16.3092 1.12135C16.4499 1.262 16.5289 1.45276 16.5289 1.65168V12.1517C16.5289 12.3506 16.4499 12.5414 16.3092 12.682C16.1686 12.8227 15.9778 12.9017 15.7789 12.9017H11.2719C10.9764 12.9017 10.6838 12.9599 10.4109 13.0729C10.1379 13.186 9.88983 13.3517 9.68089 13.5607L9.05889 14.1817C8.91827 14.3221 8.72764 14.401 8.52889 14.401C8.33014 14.401 8.13952 14.3221 7.99889 14.1817L7.37689 13.5607C7.16796 13.3517 6.91992 13.186 6.64693 13.0729C6.37395 12.9599 6.08137 12.9017 5.78589 12.9017H1.27789C1.07898 12.9017 0.888215 12.8227 0.747563 12.682C0.606911 12.5414 0.527893 12.3506 0.527893 12.1517V1.65168ZM7.77889 11.9757L7.78289 6.90268L7.78089 4.64968C7.78036 4.05329 7.54308 3.4815 7.12118 3.05998C6.69928 2.63846 6.12728 2.40168 5.53089 2.40168H2.02789V11.4017H5.78489C6.49032 11.4017 7.18145 11.6006 7.77889 11.9757ZM9.28289 4.65168L9.27889 11.9737C9.87602 11.5998 10.5664 11.4015 11.2709 11.4017H15.0279V2.40168H11.5329C10.9362 2.40168 10.3639 2.63873 9.9419 3.06069C9.51995 3.48264 9.28289 4.05494 9.28289 4.65168Z"
                    fill="#7D8590"
                />
                </svg>
        `,
        name: "Overview",
        id: 1
    },
    {
        innerH: `
                <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.797884 3.40167C0.797884 2.73863 1.06128 2.10275 1.53012 1.63391C1.99896 1.16506 2.63484 0.901672 3.29788 0.901672L12.0479 0.901672C12.2468 0.901672 12.4376 0.98069 12.5782 1.12134C12.7189 1.26199 12.7979 1.45276 12.7979 1.65167V14.1517C12.7979 14.3506 12.7189 14.5413 12.5782 14.682C12.4376 14.8227 12.2468 14.9017 12.0479 14.9017H9.54788C9.34897 14.9017 9.15821 14.8227 9.01755 14.682C8.8769 14.5413 8.79788 14.3506 8.79788 14.1517C8.79788 13.9528 8.8769 13.762 9.01755 13.6213C9.15821 13.4807 9.34897 13.4017 9.54788 13.4017H11.2979V11.4017H3.29788C3.10097 11.4017 2.90844 11.4599 2.74445 11.5689C2.58046 11.6779 2.4523 11.8329 2.37604 12.0144C2.29979 12.196 2.27884 12.396 2.31581 12.5894C2.35279 12.7829 2.44604 12.961 2.58388 13.1017C2.65283 13.1721 2.70723 13.2553 2.74399 13.3468C2.78075 13.4382 2.79915 13.5359 2.79812 13.6345C2.7971 13.733 2.77669 13.8303 2.73804 13.921C2.69939 14.0116 2.64327 14.0937 2.57288 14.1627C2.5025 14.2316 2.41922 14.286 2.3278 14.3228C2.23639 14.3595 2.13863 14.3779 2.04011 14.3769C1.94158 14.3759 1.84423 14.3555 1.75359 14.3168C1.66296 14.2782 1.58083 14.2221 1.51188 14.1517C1.0536 13.6845 0.797176 13.0561 0.797884 12.4017V3.40167ZM11.2979 2.40167H3.29788C3.03267 2.40167 2.77831 2.50703 2.59078 2.69457C2.40324 2.8821 2.29788 3.13646 2.29788 3.40167V10.1097C2.61323 9.97187 2.95375 9.90104 3.29788 9.90167H11.2979V2.40167ZM3.79788 13.1517C3.79788 13.0854 3.82422 13.0218 3.87111 12.9749C3.91799 12.928 3.98158 12.9017 4.04788 12.9017H7.54788C7.61419 12.9017 7.67778 12.928 7.72466 12.9749C7.77154 13.0218 7.79788 13.0854 7.79788 13.1517V16.4017C7.79788 16.4481 7.78495 16.4936 7.76055 16.5331C7.73614 16.5726 7.70121 16.6045 7.65969 16.6253C7.61816 16.646 7.57167 16.6548 7.52543 16.6507C7.47919 16.6465 7.43503 16.6295 7.39788 16.6017L5.94788 15.5147C5.90468 15.4821 5.85202 15.4644 5.79788 15.4644C5.74375 15.4644 5.69109 15.4821 5.64788 15.5147L4.19788 16.6017C4.16074 16.6295 4.11658 16.6465 4.07033 16.6507C4.02409 16.6548 3.97761 16.646 3.93608 16.6253C3.89455 16.6045 3.85963 16.5726 3.83522 16.5331C3.81081 16.4936 3.79788 16.4481 3.79788 16.4017V13.1517Z" fill="#7D8590"/>
                </svg>
        `,
        name: "Repositories",
        id: 2
    },
    {
        innerH: `
                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.62586 0.293687L13.8759 3.33869C14.4159 3.65269 14.7479 4.22869 14.7479 4.85269V10.9507C14.7479 11.2573 14.6674 11.5586 14.5143 11.8243C14.3613 12.09 14.1411 12.3108 13.8759 12.4647L8.62586 15.5097C8.35912 15.6644 8.05623 15.7459 7.74786 15.7459C7.4395 15.7459 7.13661 15.6644 6.86986 15.5097L1.61986 12.4647C1.35462 12.3108 1.13445 12.09 0.981406 11.8243C0.828366 11.5586 0.74783 11.2573 0.747864 10.9507V4.85269C0.747864 4.22869 1.07986 3.65169 1.61986 3.33869L6.86986 0.293687C7.13661 0.138976 7.4395 0.0574951 7.74786 0.0574951C8.05623 0.0574951 8.35912 0.138976 8.62586 0.293687ZM7.62286 1.59169L2.99286 4.27669L7.74786 7.03469L12.5029 4.27669L7.87286 1.59169C7.83493 1.56955 7.79179 1.55788 7.74786 1.55788C7.70394 1.55788 7.6608 1.56955 7.62286 1.59169ZM2.24786 5.57869V10.9507C2.24786 11.0407 2.29486 11.1217 2.37286 11.1667L6.99786 13.8497V8.33369L2.24786 5.57869ZM8.49786 13.8497L13.1229 11.1667C13.1608 11.1448 13.1923 11.1133 13.2142 11.0754C13.2362 11.0375 13.2478 10.9945 13.2479 10.9507V5.57869L8.49786 8.33369V13.8497Z" fill="#7D8590"/>
            </svg>
        `,
        name: "Followers",
        id: 3
    }
]

let tabsId = tabsArray[0].id;

const tabsRender = () => {
    tabs_list.innerHTML = tabsArray?.map(item => `
        <li class="tabs__item ${item.id === tabsId ? "tabs__active-tab" : ""}">
            ${item.innerH}
            <p onclick="tabSwitch(${item.id})">${item.name}</p>
        </li>
    `).join("")

    if (tabsId !== 1) {
        document.querySelector(".tabs__content-title").style.display = "none";
    } else {
        document.querySelector(".tabs__content-title").style.display = "inline";
    }
}

const tabsContentRender = (data, df) => {
    const unicalData = data.slice(0, 6);
    const tabsCArray = [{
        id: 1,
        content: unicalData?.map(item => `
            <div class="tabs__content-block">
                <div class="tabs__content-content">
                    <a target="_blank" href="${item?.html_url}">${item?.name}</a>
                    <p>${item?.language ? item?.language : "No Language"}</p>
                </div>
                <div class="tabs__content-public">
                    <p>Public</p>
                </div>
            </div>
        `).join("")
    },
    {
        id: 2,
        content: data?.map(item => `
            <div class="tabs__content-list">
                <a href=${item.html_url}>${item.name}</a>
                <p>Обновлено в ${new Date(item.updated_at).toLocaleString('default', { month: 'short' })} ${new Date(item.updated_at).getDate()}</p>
            </div>
        `).join("")
    }, {
        id: 3,
        content: df?.map(item => `
            <div class="tabs__content-list">
                <div>
                    <img src=${item.avatar_url} alt=${item.login}>
                </div>
                <a href=${item.html_url}>${item.login}</a>
            </div>
        `).join("")
    }
    ]

    tabsContent.innerHTML = tabsCArray.map(item => `
    ${item.id === tabsId ? item.content : ""}
    `).join("")
}

tabsRender()
const getData = async (user, id) => {
    try {
        const res = await fetch(getUrl + user + id);

        const data = await res.json();
        const res2 = await fetch(getUrl + user + "/followers");
        const data2 = await res2.json();

        if (data[0]?.owner?.avatar_url) {
            profile_avatar.innerHTML = `
                <img src="${data[0]?.owner?.avatar_url}" alt="profile" />
            `

            document.querySelector(".followers__img").innerHTML = `
            <img src="${data[0]?.owner?.avatar_url}" alt="profile" />
            `

            document.querySelector(".followers__title").innerHTML = `
                ${data[0]?.owner?.login}
            `

            ValContent = true
            errormessage.style.display = "none";

            tabsContentRender(data, data2)
        } else {
            errormessage.style.display = "block";
            errormessage.innerHTML = `404 Not Found`;
        }


        console.log(data)
        contentView()
    } catch (error) {
        console.log("Errorrrrr " + error);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    getData(input.value, "/repos")
    contentView()
})

const tabSwitch = (id) => {
    tabsId = id;

    tabsRender()
    getData(input.value, "/repos")
}


