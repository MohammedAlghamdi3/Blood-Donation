var express = require('express');
var router = express.Router();

var bloodchart = require('../models/dashboard');

router.get('/', bloodchart.getRiyadh,
    bloodchart.getMakkah,
    bloodchart.getDammam,
    bloodchart.getMedina,
    bloodchart.getFA,
    bloodchart.getFAB,
    bloodchart.getFB,
    bloodchart.getFO,
    bloodchart.getMA,
    bloodchart.getMAB,
    bloodchart.getMB,
    bloodchart.getMO,
    bloodchart.getDAPR,
    bloodchart.getDAUG,
    bloodchart.getDDEC,
    bloodchart.getDFE,
    bloodchart.getDJAN,
    bloodchart.getDJULY,
    bloodchart.getDJUN,
    bloodchart.getDMAR,
    bloodchart.getDMAY,
    bloodchart.getDNOV,
    bloodchart.getDOCT,
    bloodchart.getDSEP,
    bloodchart.getnumber,
    renderIndex);

function renderIndex(req, res) {
    var mustacheVariables = {
        bloodRio: res.locals.bloodrio,
        bloodMak: res.locals.Makkah,
        bloodDam: res.locals.Dammam,
        bloodMed: res.locals.Medina,
        bloodFAs: res.locals.bloodTFA,
        bloodFABs: res.locals.bloodTFAB,
        bloodFBs: res.locals.bloodFB,
        bloodFOs: res.locals.bloodFO,
        bloodMAs: res.locals.bloodMA,
        bloodMABs: res.locals.bloodMAB,
        bloodMBs: res.locals.bloodMB,
        bloodMOs: res.locals.bloodMO,
        bloodDJAN:res.locals.bloodDJAN,
        bloodDFE: res.locals.bloodDFE,
        bloodDMAR: res.locals.bloodDMAR,
        bloodDAPR: res.locals.bloodDAPR,
        bloodDMAY: res.locals.bloodDMAY,
        bloodDJUN: res.locals.bloodDJUN,
        bloodDJULY:res.locals.bloodDJULY,
        bloodDAUG:res.locals.bloodDAUG,
        bloodDSEP:res.locals.bloodDSEP,
        bloodDOCT:res.locals.bloodDOCT,
        bloodDNOV:res.locals.bloodDNOV,
        bloodNum:res.locals.bloodnum,
        bloodDDEC: res.locals.bloodDDEC
    }
    console.log(mustacheVariables)
    res.render('./dashboard/dashboard', mustacheVariables);
}



module.exports = router;