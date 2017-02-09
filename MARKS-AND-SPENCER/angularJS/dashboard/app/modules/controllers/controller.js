
'use strict';
var App = angular.module('clientApp', ['ngResource', 'App.filters']);
App.controller('ClientCtrl', ['$scope', function ($scope) {
    $scope.selectedDepartment = [];
    $scope.camURL='../dashboard/gam.html';
    $scope.companyList = [{
        id: 1,
        name: 'Shopping'
    }, {
        id: 2,
        name: 'International'
    }, {
        id: 3,
        name: 'MCP'
    }, {
        id: 4,
        name: 'BOSS'
    }, {
        id: 5,
        name: 'DevOps'
    }, {
        id: 6,
        name: 'BDD'
    }, {
        id: 7,
        name: 'EPAM'
    }, {
        id: 0,
        name: ''
    }];

    $scope.clients = [{
        name: 'Adam',
        sname:'Barrell',
        bid:'',
        title: 'Front-end Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Adam.Barrell@marksandspencer.com',
            camURL:'../dashboard/git/gam/index.html',
        }
    }, {
        name: 'Adam',
        sname:'Wright',
        bid:'',
        title: 'Tech Lead',
        department: {
            id: 3,
            name: 'MCP',
            email:'Adam.Wright@marksandspencer.com',
            camURL:'../dashboard/git/gam/index.html',
        }
    }, {
        name: 'Abdul',
        sname:'Rahim Bhatti',
        bid:'',
        title: 'Tech Lead',
        department: {
            id: 2,
            name: 'International',
            email:'Abdul.Rahim-bhatti@marksandspencer.com'
        }
    },{
        name: 'Blaze',
        sname:'Tustanowski',
        bid:'',
        title: 'Front-end Engineer',
        department: {
            id: 2,
            name: 'International',
            email:'Blaze.Tustanowski@marksandspencer.com'
        }
    }, {
        name: 'Alby',
        sname:'Anishkumar',
        bid:'',
        title: 'Back-end Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Alby.Anishkumar@marksandspencer.com'
        }
    }, {
        name: 'Anthony',
        sname:'Weber',
        bid:'',
        title: 'Front-end Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Anthony.Weber@marksandspencer.com'
        }
    }, {
        name: 'Ataussaboor Tahir',
        sname:'Mateen',
        bid:'',
        title: 'Front-end Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Ataussaboor.Mateen@marksandspencer.com'
        }
    }, {
        name: 'Alexksandr',
        sname:'Mazurenko',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 5,
            name: 'DevOps',
            email:'Alexksandr.Mazurenko@marksandspencer.com'
        }
    }, {
        name: 'Alexander',
        sname:'Adu-Sarkodie',
        bid:'B8634148',
        title: 'Software Development Lead',
        department: {
            id: 1,
            name: 'Shopping',
            email: 'Alex.Adu-Sarkodie@marksandspencer.com',
            camURL2:'../dashboard/git/alex/activity/by_date.html',
            camDetails:'../dashboard/git/alex/author_details/commits_by_date.html'
        }
    }, {
        name: 'Alex',
        sname:'Bowen',
        bid:'',
        title: 'Tech Lead',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Alex.Bowen@marksandspencer.com'
        }
    }, {
        name: 'Andrei',
        sname:'Cloaca',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Andrei.Cloaca@marksandspencer.com'
        }
    }, {
        name: 'Ansu',
        sname:'John',
        bid:'',
        title: 'Back-end Engineer',
        department: {
            id: 0,
            name: '',
            email:'Ansu.John@marksandspencer.com'
        }
    }, {
        name: 'Anthony',
        sname:'Weber',
        bid:'',
        title: 'Front-end Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Anthony.Weber@marksandspencer.com'
        }
    }, {
        name: 'Anusha',
        sname:'Mareddy',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:'Anusha.Mareddy@marksandspencer.com'
        }
    }, {
        name: 'Bob',
        sname:'McSorley',
        bid:'',
        title: 'Back-end Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Robert.McSorley@marksandspencer.com'
        }
    }, {
        name: 'Chikku Ann',
        sname:'Thomas',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 0,
            name: '',
            email:''
        }
    }, {
        name: 'Chris',
        sname:'Sole',
        bid:'',
        title: 'Web Engineering Manager',
        department: {
            id: 5,
            name: 'DevOps',
            email:'Chris.Sole@marksandspencer.com'
        }
    }, {
        name: 'Christina',
        sname:'Daskalaki',
        bid:'',
        title: 'Tech Lead',
        department: {
            id: 6,
            name: 'BDD',
            email:'Christina.Daskalaki@marksandspencer.com'
        }
    }, {
        name: 'Daniel',
        sname:'Pavitt',
        bid:'',
        title: 'Front-end Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Daniel.Pavitt@marksandspencer.com'
        }
    }, {
        name: 'Deepankurtyagi',
        sname:'',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:''
        }
    }, {
        name: 'Denis',
        sname:'Sedyakin',
        bid:'',
        title: 'Platform Engineer',
        department: {
            id: 7,
            name: '',
            email:'Denis_Sedyakin@epam.com'
        }
    }, {
        name: 'Dmitry',
        sname:'Buhtiyarov',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 0,
            name: '',
            email:'Dmitry.Buhtiyarov@marksandspencer.com'
        }
    }, {
        name: 'Ekta',
        sname:'Sevlani',
        bid:'',
        title: 'Automation Test Engineer',
        department: {
            id: 6,
            name: 'BDD',
            email:'Ekta.Sevlani@marksandspencer.com'
        }
    }, {
        name: 'Elizabeth',
        sname:'Colgate',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 0,
            name: '',
            email:''
        }
    }, {
        name: 'Fiodar',
        sname:'Kupchyk',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:''
        }
    }, {
        name: 'Frank',
        sname:'Long',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:''
        }
    }, {
        name: 'Gabriel Novoa',
        sname:'Bonet',
        bid:'',
        title: 'Tech Lead',
        department: {
            id: 4,
            name: 'BOSS',
            email:'Gabriel.N.Bonet@marksandspencer.com'
        }
    }, {
        name: 'Gerwyn',
        sname:'Jenkins',
        bid:'',
        title: '',
        department: {
            id: 6,
            name: '',
            email:'Gerwyn.Jenkins@marksandspencer.com'
        }
    }, {
        name: 'Graeme',
        sname:'Norman',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Graeme.Norman@marksandspencer.com'
        }
    }, {
        name: 'Jay',
        sname:'Gehlot',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:''
        }
    }, {
        name: 'John',
        sname:'Allen',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'John.Allen@marksandspencer.com'
        }
    }, {
        name: 'Keith',
        sname:'Chingandu',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Keith.Chingandu@marksandspencer.com'
        }
    }, {
        name: 'Kesavan',
        sname:'Mani',
        bid:'',
        title: 'WCS Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Kesavan.Mani@marksandspencer.com'
        }
    }, {
        name: 'Kostas',
        sname:'Makri',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:''
        }
    }, {
        name: 'Krisztian',
        sname:'Sandor',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 2,
            name: 'International',
            email:'Krisztian.Sandor@marksandspencer.com'
        }
    }, {
        name: 'Kymme',
        sname:'Blackwell',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Kymme.Blackwell@marksandspencer.com'
        }
    }, {
        name: 'Luca',
        sname:'Trinca',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Luca.Trinca@,marksandspencer.com'
        }
    }, {
        name: 'Luke',
        sname:'Jordan',
        bid:'',
        title: 'WCS Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Luke.Jordan@marksandspencer.com'
        }
    }, {
        name: 'Marc',
        sname:'Jones',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 0,
            name: '',
            email:''
        }
    }, {
        name: 'Margo',
        sname:'Urey',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 0,
            name: '',
            email:'Margo.Urey@marksandspencer.com'
        }
    }, {
        name: 'Marian',
        sname:'Boucek',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 0,
            name: '',
            email:'Marian.Boucek@marksandspencer.com'
        }
    }, {
        name: 'Mihail',
        sname:'Bulash',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:'Mihail_Bulash@epam.com'
        }
    }, {
        name: 'Mohammad',
        sname:'Shalchi',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Mohammad.Shalchi@marksandspencer.com'
        }
    }, {
        name: 'mslabspip',
        sname:'',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:''
        }
    }, {
        name: 'Nagaraju',
        sname:'Vadranam',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 0,
            name: '',
            email:'Nagaraju.Vadranam@marksandspencer.com'
        }
    }, {
        name: 'Neelu',
        sname:'Sharma',
        bid:'',
        title: 'Software Development Lead',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Neelu.Sharma@marksandspencer.com'
        }
    }, {
        name: 'Neha',
        sname:'Nanda',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 0,
            name: '',
            email:'Neha.Nanda@marksandspencer.com'
        }
    }, {
        name: 'Obiana',
        sname:'Duru',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:'obi.Duru@marksandspencer.com'
        }
    }, {
        name: 'Ramu',
        sname:'Cheni',
        bid:'',
        title: 'WCS Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Ramu.Cheni@marksandspencer.com'
        }
    }, {
        name: 'Rhian',
        sname:'Wright',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Rhian.Wright@marksandspencer.com'
        }
    }, {
        name: 'Richard',
        sname:'Chernenko',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 1,
            name: 'Shopping',
            email:''
        }
    }, {
        name: 'Sachin',
        sname:'Shetty',
        bid:'',
        title: 'Tech Lead',
        department: {
            id: 2,
            name: 'International',
            email:'Sachin.Shetty@marksandspencer.com'
        }
    }, {
        name: 'Samuel Perez',
        sname:'Rodriguez',
        bid:'',
        title: '',
        department: {
            id: 1,
            name: 'Shopping',
            email:'Samuel.Rodriguez.Perez@marksandspencer.com'
        }
    }, {
        name: 'Sathya',
        sname:'Nandakumar',
        bid:'',
        title: 'Head of Development',
        department: {
            id: 0,
            name: '',
            email:'Sathya.Nandakumar@marksandspencer.com'
        }
    }, {
        name: 'Sean',
        sname:'Oneil',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:''
        }
    }, {
        name: 'Simon',
        sname:'White',
        bid:'',
        title: '',
        department: {
            id: 5,
            name: 'DevOps',
            email:'Simon.A.White@marksandspencer.com'
        }
    }, {
        name: 'Siarhei',
        sname:'Makarau',
        bid:'',
        title: 'Platform Engineer',
        department: {
            id: 7,
            name: 'EPAM',
            email:'Siarhei.Makarau@epam.com'
        }
    }, {
        name: 'Sofiya',
        sname:'Vasileva',
        bid:'',
        title: 'Front-end Engineer',
        department: {
            id: 2,
            name: 'International',
            email:'Sofiya.Vasileva@marksandspencer.com'
        }
    }, {
        name: 'Solomon',
        sname:'Philip',
        bid:'',
        title: '',
        department: {
            id: 1,
            name: '',
            email:''
        }
    }, {
        name: 'Tom',
        sname:'Lea',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:'Tom.Lea@marksandspencer.com'
        }
    }, {
        name: 'Tony',
        sname:'D',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:''
        }
    }, {
        name: 'Velunathan',
        sname:'Loganathan',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:''
        }
    }, {
        name: 'Venki',
        sname:'Peru',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:''
        }
    }, {
        name: 'Veronica Garcia',
        sname:'Latore',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:'Veronica.GarciaLatorre@marksandspencer.com'
        }
    }, {
        name: 'Vikram',
        sname:'Kamath',
        bid:'',
        title: 'Software Development Lead',
        department: {
            id: 1,
            name: '',
            email:'Vikram.Kamath@marksandspencer.com'
        }
    }, {
        name: 'Vinod',
        sname:'T',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:''
        }
    }, {
        name: 'Yahor',
        sname:'Chupin',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:''
        }
    }, {
        name: 'Yo',
        sname:'',
        bid:'',
        title: '',
        department: {
            id: 0,
            name: '',
            email:''
        }
    }, {
        name: 'Zak',
        sname:'Bowyer',
        bid:'',
        title: 'Software Engineer',
        department: {
            id: 2,
            name: 'International',
            email:'Zak.Bowyer@marksandspencer.com'
        }
    }];

    $scope.setSelectedClient = function () {
        var id = this.department.id;
        if (_.contains($scope.selectedDepartment, id)) {
            $scope.selectedDepartment = _.without($scope.selectedDepartment, id);
        } else {
            $scope.selectedDepartment.push(id);
        }
        return false;
    };

    $scope.isChecked = function (id) {
        if (_.contains($scope.selectedDepartment, id)) {
            return 'icon-ok pull-right';
        }
        return false;
    };

    $scope.checkAll = function () {
        $scope.selectedDepartment = _.pluck($scope.companyList, 'id');
    };
}]);

