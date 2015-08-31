$(document).ready(function(){
    $('.parallax').parallax();
    $(".button-collapse").sideNav({
        closeOnClick: true
    });
    $('.scrollspy').scrollSpy();
});



(function() {
    var app = angular.module('about', ['ui.materialize']);

    app.controller('ExperienceController', function(){
        this.jobs = jobs;
    });

    var jobs = [
        {
            title: 'visAR (IPPD 2014)',
            role: 'Team Co-Leader / Electrical Engineer',
            start: 'August 2014',
            end: 'May 2015',
            body: [
                'IPPD is a two-semester capstone engineering design course where students work in multidisciplinary ' +
                'teams to complete a project for a corporate sponsor. Our team\'s goal was to build a wearable ' +
                'augmented reality device to improve situational awareness.',

                'The system\'s features included: real-time processing of two high-resolution cameras, ' +
                'overlay of computer generated imagery (menu system, waypoints, on-screen map, etc.), ' +
                'wireless transmission of GPS locations between units (backpack systems and portable beacons).',

                'My responsibilities included: designing the hardware (schematic, PCB layout, assembly), firmware ' +
                '(STM32 ARM microcontroller), and software (writing Python code to integrate with backpack ' +
                'system\'s computer) for the GPS beacons; developing components for and testing the FPGA firmware for ' +
                'the real-time video processing; working with the software team to resolve issues relating to Linux ' +
                'kernel bugs and hardware integration; managing schedule and priorities for a team of 7 students to ' +
                'meet deadlines relating to the IPPD program. '
            ],
            link: {
                text: 'Learn more',
                url: 'https://github.com/visARproject/visar/'
            }
        },
        {
            title: 'Harris Corporation',
            role: 'Electrical Engineering Intern',
            start: 'May 2014',
            end: 'December 2014',
            body: [
                'During the Summer of 2014, I worked in the Aerospace Electronics department of the ' +
                'Government Communications Systems Division (GCSD) at the Harris Corporation. My responsibilities were ' +
                'mainly focused on designing firmware for FPGAs using VHDL for satellite payloads. ' +
                'I also worked with a team of interns to research applications of Secure Cognitive Radio.',

                'I learned a lot about the engineering design process, which was further expanded during my work on ' +
                'the IPPD project described above. At one point, I was the individual primarily responsible for the ' +
                'functionality of the firmware for the satellite payload hardware I was working on. I was also invited ' +
                'to travel to our customer\'s facility with another electrical engineer and the program\'s chief ' +
                'system engineer to perform integration with the customer\'s systems.'
            ]
        },
        {
            title: 'UF Electrical & Computer Engineering',
            role: 'Teaching Assistant',
            start: 'May 2012',
            body: [
                'I became a teaching assistant for a senior-level microprocessors course in the semester after ' +
                'taking it, and became head TA in the semester following.',

                'Courses I have been involved with: EEL4744/EEL3744 - Microprocessor Applications (6 semesters), ' +
                'EEL3701 - Digital Logic and Computer Systems (2 semesters), ' +
                'EGN1935 - ECE Adventures (2 semesters).',

                'My responsibilities include: creating exam questions, lab quizzes, and lab exercises; ' +
                'troubleshooting student problems; evaluating and testing new hardware to be used in the courses.'
            ],
            link: {
                text: 'EEL3744 website',
                url: 'http://www.mil.ufl.edu/3744/'
            }
        },
        {
            title: 'Machine Intelligence Lab',
            body: [
                'The Machine Intelligence Lab, run by Drs. Eric M. Schwartz and A. Antonio Arroyo, is home to ' +
                'the SubjuGator AUV and PropaGator ASV. These projects are entirely student-designed and have won ' +
                'numerous world championships. The experience gained while working on these projects is highly ' +
                'valued by our sponsors such as the Harris Corporation, Lockheed Martin, and Northrop Grumman ' +
                '(among many others).',

                'Other projects include: the CongreGators Swarm vehicles, the IEEE Hardware Competition robot, and IPPD.',

                'Projects I have worked on: IEEE2014 robot (described on the \"play\" tab), IPPD 2014 (described above), ' +
                'SubjuGator 8 (circuit board design, hardware integration), and PropaGator 2 (wireless connectivity research).'
            ]
        }
    ];

    app.controller('ProjectsController', function(){
        this.projects = projects;
    });

    var projects = [
        {
            title: 'COP4600 Shell',
            body: [
                'The final project for my Operating Systems class was to create a ksh-like shell for Unix. ',

                'Features included: built-in commands (cd, alias, etc), I/O redirection (piping, to/from files, ' +
                'stderr > stdout), aliases and environment variables, and more.',

                'During our late night development sessions, my partner and I sometimes forgot that we were using the ' +
                'shell to launch our text editor/compiler/etc. How\'s that for eating your own dog food?'
            ],
            link: {
                text: 'See the code',
                url: 'https://github.com/khaledhassan/shell/'
            }
        },
        {
            title: 'IEEE 2014',
            body: [
                'The IEEE Hardware Competition at SoutheastCon typically involved a small microcontroller based ' +
                'robot to complete tasks using simple sensors (line sensors, color sensors, etc), and teams would ' +
                'spend about 2-3 months working on their entry. Our team decided to use a Linux based computer ' +
                '(Odroid U2), a LIDAR from a Neato XV-11 vacuum cleaner, and a Logitech webcam to navigate the course.',

                'The challenge was to move to predefined locations on the course and fire Nerf darts through a \"hoop\". ' +
                'Rather than drive along the path marked on the course, we wanted to drive straight to each spot. ' +
                'Our computer vision algorithms would determine the three shooting locations before we moved from the ' +
                'starting zone, and our \"gun\" would remain pointed at the target as we proceeded from spot to spot. ' +
                'Mechanum wheels allowed us to strafe and rotate '
            ],
            link: {
                text: 'See the code',
                url: 'https://github.com/ufieeehw/IEEE2014/'
            }
        },

    ];

    app.controller('TaglineController', function(){
        this.taglines = taglines;

        this.getRandomTagline = function(){
            return taglines[Math.floor(Math.random() * taglines.length)];
        }
    });

    taglines = [
        'insert witty tagline here',
        'now with more vitamin C!',
        'presented in High Definition where available',
        'lather, rinse, repeat',
        '/* No Comment */'
    ]

})();