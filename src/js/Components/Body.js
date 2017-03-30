import React, { Component } from 'react';
import NewParticipant from './NewParticipant';
import ParticipantTable from './ParticipantTable';

class Body extends Component {

    constructor() {
        super();
        this.state = {
            participants : [],
            sorted : [0, 0, 0]
        }
  }

    componentDidMount() {
        this.generateUsers();
    }

    generateUsers() {
        const words = ["Angelo", "Simla", "Wendell", "alienating", "analyticity", "angels", "athletism", "chinooks", "departure", "disabusing", "dunzo", "evangelized", "exhausted", "exterminator", "fleete", "foozled", "gleanings", "granula", "ground", "hardihood", "industries", "keel-boat", "keychains", "lauds", "lovable", "misprized", "miswritten", "motherless", "out-thrust", "plaudite", "purple-fish", "recoverer", "redbush", "responsible", "rhythmicity", "rucksack", "spacially", "statuesquely", "stormbound", "tartine", "thoughted", "throw-weight", "tricolour", "unroofing", "unruined", "verdicts", "vitalized", "vocational", "waught", "whaddie",
            "Angus", "Byronian", "Climategate", "Connell", "Gorbachevian", "Kutchi", "Manchus", "Sailesh", "Singapore", "Varro", "andantino", "ankle", "backheeling", "bejewels", "bribers", "bullfighting", "bushless", "cardigan", "cardiogram", "coloring", "counterview", "desponds", "docible", "drying-house", "esophagus", "flurazepam", "hawse-pipes", "hocus-pocus", "keel-shaped", "lectors", "mandibulae", "miscopying", "mispricings", "monopolize", "nebuliser", "optional", "peachtree", "peignoir", "photo", "salted", "saskatoon", "shikra", "skidmark", "spilth", "stellar", "sunshiny", "tentively", "tightwads", "watchkeeper", "œsophagus",
            "Aichi", "Estonian", "Kuznets", "Treasury", "addable", "aminol", "antlerless", "arrestation", "astable", "bibliophiles", "cake-walk", "chape", "dishonesties", "disturbed", "divey", "earthrise", "eastwardly", "exonerations", "fibrillated", "flatworm", "folklorist", "forbidding", "foretastes", "foxtail", "fruit-eating", "halted", "juvie", "manele", "obtrusive", "orange-skin", "parishioners", "plantlets", "pontooning", "prosiest", "quiring", "reinventing", "repin", "revival", "shemozzle", "shuffleboard", "spermicide", "sprat", "squamates", "suburbs", "thors", "treading", "trodden", "woundingly", "wreke", "éclat",
            "Aneityum", "Antoinette", "Arunta", "Bangladeshi", "Commision's", "Hausfrau", "aimless", "archeo", "aversions", "banausic", "biophoton", "buckaroo", "busybodies", "caseum", "cleck", "cyberassault", "dragonish", "empery", "fremitus", "gallstone", "genderqueer", "hand-wavy", "incarnadines", "intralobular", "ischaemia", "kick-ass", "linseed-cake", "lithe", "macrons", "metaled", "mislikes", "mohawks", "octoploid", "office-book", "palliatively", "paroles", "perial", "pieman", "pricetags", "reefer", "repet", "rufous", "swineherds", "swivelly", "tronc", "uncurved", "untradeable", "waipiro", "weaponed", "yessiree",
            "Crimethink", "Frizell", "Leander", "Matsuyama", "Padang", "Pelham", "Rumania", "Tripoli", "Zanesville", "annexion", "antiquates", "brainfood", "budgeted", "carnets", "depot-wagon", "draggle", "enshrines", "fictile", "flatchested", "flowing", "forebears", "intercepted", "linea", "lintie", "market", "mesenchymal", "misleadingly", "morbidities", "negroni", "nondiscovery", "obviate", "oligarchies", "pale-colored", "pardoning", "patella", "podophyllous", "premised", "reerect", "repour", "ropers", "sabino", "seventy-one", "splenocyte", "stouthrief", "swapmeet", "sword-proof", "thready", "uproot", "urgings", "visually",
            "Anderson", "Baumgartner", "Hawick", "Kinga", "Nogai", "Oglala", "Rohnert Park", "Yucca", "accessorial", "arraignments", "bicentric", "blackish", "brunet", "chees", "classic", "copple", "cuckooed", "cybergirl", "desiderates", "disembarking", "earning", "edgeways", "faith-cure", "handy-billy", "hardeners", "honeys", "labware", "laneway", "lexically", "maulers", "nonmusicians", "offspinners", "overland", "painfulness", "perseverated", "principale", "rapport", "retromer", "skeezicks", "slobber", "stornello", "toddy", "towline", "traces", "tricorns", "tweaker", "two‐thirds", "ulemas", "unknots", "winegrape"]
        const ends = ["fi", "co.uk", "com", "de", "se", "gg", "kz", "ru", "org"];
        console.log(words.length)
        var participants = [];
        function capitalize(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }
        function lowerC(string) {
            return string.charAt(0).toLowerCase() + string.slice(1);
        }
        for (var i = 0; i < 20; i++) {
            participants.push({name:capitalize(words[Math.floor(Math.random() * 299)]) + " " + capitalize(words[Math.floor(Math.random() * 299)]),
                email:lowerC(words[Math.floor(Math.random() * 299)])+"@"+words[Math.floor(Math.random() * 299)]+"."+ends[Math.floor(Math.random() * ends.length)], number:Math.floor(Math.random() * 100000000 + 1000000) +"", edit:false})
        }
        this.setState({participants: participants});

    }


    addNewParticipant(participant) {
        var participants = this.state.participants;
        participants.push(participant)
        this.setState({participants});
        this.sort()
    }

    sort() {
        for (var i = 0; i < 3; i++) {
            if (this.state.sorted[i] !== 0) {
                this.state.sorted[i] === 1 ? this.sortParticipants(i, 1) : this.sortParticipants(i, -1);
            }
        }
    }

    removeParticipant(index) {
        var participants = this.state.participants;
        participants.splice(index, 1);
        this.setState({participants: participants});
    }

    saveParticipant(index, participant) {
        var participants = this.state.participants;
        participants[index] = participant;
        participants[index].edit = false;
        this.setState({participants: participants});
        this.sort();
    }

    updateParticipant(index) {
        var participants = this.state.participants;
        participants[index].edit = !participants[index].edit;
        this.setState({participants: participants});
    }

    sortParticipants(attribute, reverse) {
        var participants = this.state.participants;
        var att;
        if (attribute === 0) participants.sort(function(a,b) {return (a.name > b.name) ? 1 * reverse : ((b.name > a.name) ? -1 * reverse : 0);});
        if (attribute === 1) participants.sort(function(a,b) {return (a.email > b.email) ? 1 * reverse : ((b.email > a.email) ? -1 * reverse : 0);});
        if (attribute === 2) participants.sort(function(a,b) {return (a.number > b.number) ? 1 * reverse : ((b.number > a.number) ? -1 * reverse : 0);});
        this.state.sorted[attribute] = reverse === -1 ? 2 : 1;
        this.setState({participants : participants});
    }

    toggleSort(attribute) {
        if (this.state.sorted[attribute] == 0) {
            this.state.sorted = [0,0,0];
            this.sortParticipants(attribute, 1);
        } else {
            const reverse = this.state.sorted[attribute] === 1 ? -1 : 1;
            this.state.sorted = [0,0,0];
            this.sortParticipants(attribute, reverse);
        }
    }

    render() {
        const style = {
            backgroundColor: '#f1f1f1',
            paddingTop: '25px',
            paddingLeft: '32px',
            paddingBottom: '32px'
        };
        return (
            <div style={style}>
                <h3 style={{color:'grey', paddingBottom:'20px', fontWeight:'normal'}}>List of participants</h3>
                <NewParticipant addnew={this.addNewParticipant.bind(this)}/>
                <ParticipantTable updateParticipant={this.updateParticipant.bind(this)}
                                  saveParticipant={this.saveParticipant.bind(this)}
                                  participants={this.state.participants}
                                  removeParticipant={this.removeParticipant.bind(this)}
                                  toggleSort={this.toggleSort.bind(this)}
                                  sorted={this.state.sorted}/>
            </div>
        );
    }
}

export default Body;
