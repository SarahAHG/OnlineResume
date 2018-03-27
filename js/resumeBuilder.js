/* Text */
var data = "%data%";
/* Formatting  */
var bio = {
    "name": "Sarah Alowidah",
    "role": "Digital Media Manger",
    "contacts": {
        "mobile": "966-533-600-143",
        "email": "SarahAlowidah@gmail.com",
        "github": "SarahAHG",
        "twitter": "@SarahAlowidah",
        "blog": "sarahalowidah.blogspot.com",
        "location": "Al Jubail, Saudi Arabia",
    },
    "welcomeMessage": "Hi, I'm Sarah and I enjoy what I do. ",
    "skills": ["Programming (Java, JavaScript, C++, Python, C# and HTML).",
        "Handling different platforms of systems.", "Conflict management and negotiation.",
        "Arabic and English language.", "Communication and Teamwork.", "Web Content Designing."
    ],
    "biopic": "img/Sarah.jpg"
};
/*Header, Bio */
bio.display = function() {
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(formattedWelcomeMsg);
    var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
    $("#header").append(formattedBioPic);
    /*Skills*/

    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(s) {
        var formattedSkill = HTMLskills.replace(data, s);
        $("#skills:last").append(formattedSkill);
    });

    /*Top Contacts*/
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    var formattedBlog = HTMLblog.replace(data, bio.contacts.blog);
    $("#topContacts").append(formattedBlog);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#topContacts").append(formattedLocation);
    /*Fotter Contact*/
    formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    $("#footerContacts").append(formattedMobile);
    formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    $("#footerContacts").append(formattedEmail);
    formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    $("#footerContacts").append(formattedGithub);
    formattedTwitter = HTMLtwitter.replace(data, bio.contacts.twitter);
    $("#footerContacts").append(formattedTwitter);
    formattedBlog = HTMLblog.replace(data, bio.contacts.blog);
    $("#footerContacts").append(formattedBlog);
    formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#footerContacts").append(formattedLocation);

};
bio.display();
/* Work */
var work = {
    "jobs": [{
            "employer": "Training at Jubail University College",
            "title": "Admin Assistant",
            "dates": "2016, Jan - May",
            "location": "Al Jubail, Saudi Arabia",
            "description": "Analyzing, and reviewing documents, " +
                "annual report, student’s grades.",
            "url": "http://www.ucj.edu.sa/en/Pages/default.aspx"
        },
        {
            "employer": "Maz Tailor",
            "title": "Digital Media Manger",
            "dates": "2015 - Present",
            "location": "Dammam, Saudi Arabia",
            "description": "Creating, editing, designing media content.",
            "url": "https://www.instagram.com/maztailor/"
        },
        {
            "employer": "Krar Real Estate and Contracting",
            "title": "Digital Media Manager",
            "dates": "2017, Jan - Present",
            "location": "Al Jubail, Saudi Arabia",
            "description": "Creating, editing, designing media content.",
            "url": "https://www.facebook.com/KrarRealEstate/"
        }
    ]
};

work.display = function() {
    work.jobs.forEach(function(s) {
        $("#workExperience").append(HTMLworkStart);
        // work data
        var formattedworkEmployer = HTMLworkEmployer.replace(data, s.employer).replace("#", s.url);
        var formattedWorkTitle = HTMLworkTitle.replace(data, s.title);
        var formattedWorkEmployerTitle = formattedworkEmployer + formattedWorkTitle;
        $(".work-entry:last").append(formattedWorkEmployerTitle);
        var formattedWorkDates = HTMLworkDates.replace(data, s.dates);
        $(".work-entry:last").append(formattedWorkDates);
        var formattedWorkLocation = HTMLworkLocation.replace(data, s.location);
        $(".work-entry:last").append(formattedWorkLocation);
        var formattedWorkDescription = HTMLworkDescription.replace(data, s.description);
        $(".work-entry:last").append(formattedWorkDescription);
    });
};
work.display();

/* Projects */
var projects = {
    "projects": [{
            "title": "Designed infographic for Wa'ai award",
            "dates": "2017",
            "description": "Designed and collected data for an infographic that" +
                "competed to win (W3i award) ,hosted by the Saudi ministry of health.",
            "images": "img/maz-CR.png",
            "url": "https://sarahalghmdi.wixsite.com/mywork"
        },
        {
            "title": "Quote of the week project",
            "dates": "2016 - 2017",
            "description": "Started a personal project (quote of the week), where" +
                "I have designed it and shared it on social media",
            "images": "img/quotes.png",
            "url": "https://sarahalghmdi.wixsite.com/mywork"
        }
    ]
};

projects.display = function() {
    projects.projects.forEach(function(p) {
        $("#projects").append(HTMLprojectStart);
        //Project Data
        var formattedProjectTitle = HTMLprojectTitle.replace(data, p.title).replace("#", p.url);
        $(".project-entry:last").append(formattedProjectTitle);
        var formattedProjectDates = HTMLprojectDates.replace(data, p.dates);
        $(".project-entry:last").append(formattedProjectDates);
        var formattedProjectDescription = HTMLprojectDescription.replace(data, p.description);
        $(".project-entry:last").append(formattedProjectDescription);
        var formattedProjectImage = HTMLprojectImage.replace(data, p.images);
        $(".project-entry:last , .img-responsive").append(formattedProjectImage);

    });
};
projects.display();

/*Education & Online classes*/
var education = {
    "schools": [{
        "name": " Jubail University College",
        "degree": "B.Sc.",
        "dates": "2011 - 2016",
        "location": "Al Jubail, Saudi Arabia",
        "majors": ["Management Information System (MIS)"],
        "url": "http://www.ucj.edu.sa/en/Pages/default.aspx"
    }],
    "onlineCourses": [{
            "title": "Transmedia Storytelling: Narrative worlds," +
                "emerging technologies, and global audiences",
            "school": "University of New South Wales",
            "dates": "Nov , 2017",
            "url": "https://goo.gl/VCpov1"
        },
        {
            "title": "Professional Digital Marketing",
            "school": "Saudi Electronic University",
            "dates": "Aug , 2017",
            "url": "https://goo.gl/iF6diJ"
        }
    ]
};

education.display = function() {
    education.schools.forEach(function(e) {
        $("#education").append(HTMLschoolStart);
        // education data 
        var formattedSchoolName = HTMLschoolName.replace(data, e.name).replace("#", e.url);
        var formattedSchoolDegree = HTMLschoolDegree.replace(data, e.degree);
        var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree;
        $(".education-entry:last").append(formattedSchoolNameDegree);
        var formattedSchoolDates = HTMLschoolDates.replace(data, e.dates);
        $(".education-entry:last").append(formattedSchoolDates);
        var formattedSchoolLocation = HTMLschoolLocation.replace(data, e.location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolMajor = HTMLschoolMajor.replace(data, e.majors[0]);
        $(".education-entry:last").append(formattedSchoolMajor);
    });

    $("#education").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(o) {
        //$("#education").append(HTMLschoolStart);
        var formattedOnlineTitle = HTMLonlineTitle.replace(data, o.title).replace("#", o.url);
        var formattedOnlineSchool = HTMLonlineSchool.replace(data, o.school);
        var formattedOnlineSchoolTittle = formattedOnlineTitle + formattedOnlineSchool;
        $(".online-entry:last").append(formattedOnlineSchoolTittle);
        var formattedOnlineDates = HTMLonlineDates.replace(data, o.dates);
        $(".online-entry:last").append(formattedOnlineDates);
        // To keep format of the page 
        var formattedOnlineURL = HTMLonlineURL.replace(data, "");
        $(".online-entry:last").append(formattedOnlineURL);
    });
};
education.display();

/*Map*/
$("#mapDiv").append(googleMap);