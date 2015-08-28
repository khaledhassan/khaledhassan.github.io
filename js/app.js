$(document).ready(function(){
    $('.parallax').parallax();
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
            body: 'Lorem ipsum'
        },
        {
            title: 'Harris Corporation',
            role: 'Electrical Engineering Intern',
            start: 'May 2014',
            end: 'December 2014',
            body: 'Lorem ipsum'
        },
        {
            title: 'UF Electrical & Computer Engineering',
            role: 'Teaching Assistant',
            start: 'May 2012',
            body: 'Lorem ipsum'
        },
        {
            title: 'Machine Intelligence Lab',
            body: 'Lorem ipsum'
        }
    ];


})();