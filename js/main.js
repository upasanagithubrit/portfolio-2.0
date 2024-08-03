let DocumentTitle = document.getElementById('docTitle'); 

window.addEventListener('blur' , ()=>{
    DocumentTitle.innerHTML = "Come Soon 😭";
})
window.addEventListener('focus' , ()=>{
    DocumentTitle.innerHTML = '@WebDev';
})




function follow_on_linkedln(){
    window.open("https://www.linkedin.com/in/upasana-chaudhary-10b21b1b8/","_blank")
}
function open_projects(project_id){
    if(project_id == "Razorpay-clone"){
        window.open("https://razor-pay-clone-tan.vercel.app/","_blank")
    }
    else if(project_id =="blog-web"){
        window.open("https://react-blog-website-kappa.vercel.app/","_blank")
    }
    // else if(project_id == "calc"){
    //     window.open("https://github.com/1234vishalsharma/Oasis-Infobyte/tree/main/My_calculator","_blank")
    // }
    else if(project_id == "e_comm"){
        window.open("https://shokse-e-caet-website-by-redux.vercel.app/","_blank")
    }
    else if(project_id=="temp_cnvrt"){
        window.open("https://upasanagithubrit.github.io/upasana.github.io-tempconvertor/","_blank")
    }
    else if(project_id == "qr-code"){
        window.open("https://image-frontend-4j1w.vercel.app/","_blank")
    }
    else if(project_id == "todo"){
        window.open("https://to-do-list-beta-green.vercel.app/","_blank")
    }
    else if(project_id == "bubble-game"){
        window.open("https://upasanagithubrit.github.io/upasana.github.io-bubblegame/","_blank")
     }
    // else if(project_id == 'videoTranscoder'){
    //     window.open("https://transcoder.vercel.app/" , "_blank");
    // }else if(project_id == "RealEstate"){
    //     window.open("https://1234vishalsharma.github.io/coming-soon/" , "_blank");
    // }
    else{
        window.open('https://github.com/upasanagithubrit' , "_blank");
    }
}

function open_platforms(platform_id){
    // if(platform_id == "leet_code"){
    //     window.open("https://leetcode.com/HostVishal/","_blank");
    // }
     if(platform_id == "gfg"){
        window.open("https://www.geeksforgeeks.org/user/upasnachoudhary216/","_blank");
    }
    else if(platform_id == "hrank"){
        window.open("https://www.naukri.com/code360/profile/upasanachau","_blank");
    }else if(platform_id == 'github'){
        window.open("https://github.com/upasanagithubrit","_blank");
    }
}

function download_resume(){
    // to be implemented
    alert("Press Ok to download resume");
        try{
            window.location.href = "Resume/Resume.pdf";
         }catch(e){}
}

function showMenu(){
    let menu = document.querySelector(".menu_header");
    menu.classList.toggle("show_menu");
}

// document.addEventListener('contextmenu', event => event.preventDefault());