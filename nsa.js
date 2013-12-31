$(function() {

    var choice = function(arr) {
	
	return arr[Math.floor(Math.random() * arr.length)];
    };

    words = {

	codenames_adjective: [
	    "loud",
	    "red",
	    "blue",
	    "green",
	    "yellow",
	    "irate",
	    "angry",
	    "peeved",
	    "happy",
	    "slimy",
	    "sleepy",
	    "junior",
	    "slicker",
	    "united",
	    "somber",
	    "bizarre",
	    "odd",
	    "weird",
	    "wrong",
	    "latent",
	    "chilly",
	    "strange",
	    "loud",
	    "silent",
	    "hopping",
	    "orange",
	    "violet",
	    "violent"
	    
	],
	codenames_noun: [
	    "whisper",
	    "felony",
	    "moon",
	    "sucker",
	    "penguin",
	    "waffle",
	    "maestro",
	    "night",
	    "trinity",
	    "deity",
	    "monkey",
	    "ark",
	    "squirrel",
	    "iron",
	    "bounce",
	    "farm",
	    "chef",
	    "trough",
	    "net",
	    "trawl",
	    "glee",
	    "water",
	    "spork",
	    "plow",
	    "feed",
	    "souffle",
	    "route",
	    "bagel",
	    "montana",
	    "analyst",
	    "auto",
	    "watch",
	    "photo",
	    "yard",
	    "source",
	    "monkey",
	    "seagull",
	    "toll",
	    "spawn",
	    "gopher",
	    "chipmunk",
	    "set",
	    "calendar",
	    "artist",
	    "chaser",
	    "scan",
	    "tote",
	    "beam",
	    "entourage",
	    "genesis",
	    "walk",
	    "spatula",
	    "rage",
	    "fire",
	    "master"      
	],
	codenames_suffix: [ 
	    " 4000",
	    "-II",
	    " 2.0",
	    " rev4",
	    "-HX",
	    " v9",
	],

	device_adjective: [
	    "pico-class",
	    "macro-class",
	    "micro-class",
	    "900MHz",
	    "reusable",
	    "gigahertz",
	    "nano-scale",
	    "field-updatable",
	    "covert",
	    "data-line",
	    "targeted",
	    "modulated",
	    "plug-in",
	    "miniaturized",
	    "digital",
	    "radio",
	    "zero-force",
	    "silent",
	],
	
	device_technology: [
	    "cell-tower",
	    "USB",
	    "WiFi",
	    "wireless",
	    "wired",
	    "GSM",
	    "CDMA",
	    "cellular",
	    "Ethernet",
	    "802.1x",
	    "PKI",
	    "BIOS",
	    "router",
	    "firmware",
	    "microcode",
	    "hardware",
	],

	program_noun: [
	    "program",
	    "device",
	    "intercept",
	    "instrument",
	    "implant",
	    "tool",
	    "system",
	    "architecture",
	    "technique"
	],

	component: [
	    "antenna",
	    "radiator",
	    "chip",
	    "converter",
	    "plug",
	    "controller",
	    "device",
	    "CPU",
	    "memory",
	    "reader",
	    "cabling"
	],

	unit_prefix: [
	    "m",
	    "u",
	    "K",
	    "M",
	    "G",
	    "n",
	    ""
	],

	unit: [
	    "dB",
	    "A",
	    "V",
	    "W",
	    "B"
	],

	distance_unit_plural: [
	    "meters",
	    "feet",
	    "kilometers",
	    "miles"
	],

	program_verb: [
	    "intercept",
	    "entrap",
	    "analyze",
	    "store",
	    "collect",
	    "decipher",
	    "decrypt",
	    "gather",
	    "correlate",
	    "expose",
	    "exfiltrate",
	    "eliminate the privacy of",
	],
	
	program_verb2: [
	    "interception",
	    "evaluation",
	    "storage",
	    "collation",
	    "decryption",
	    "analysis",
	    "exposure",
	    "exfiltration",
	    "interdiction",
	],

	action_verb: [
	    "connect",
	    "intercept",
	    "decode",
	    "subvert",
	    "exploit",
	],

	organization: [
	    "the FBI",
	    "the CIA",
	    "the DEA",
	    "DSS",
	    "the ATF",
	    "the DIA",
	    "the Secret Service",
	    "the SEC",
	    "GCHQ",
	    "MI5",
	    "MI6",
	    "Five Eyes",
	    "Google",
	    "Facebook",
	    "Yahoo",
	    "Verizon",
	    "HP",
	    "Cisco"
	],

	intelligence_adjective: [
	    "commercial",
	    "classified",
	    "foreign",
	    "secret",
	    "hidden",
	    "encrypted",
	    "ciphered",
	    "concealed",
	    "user-defined",
	],

	allowed_verb_past: [
	    "allowed",
	    "enabled",
	    "facilitated",
	    "permitted",
	    "provided"
	],

	intelligence_adjective2: [
	    "transaction",
	    "conversation",
	    "location",
	    "messaging",
	    "transmission",
	    "audio",
	    "network",
	    "software",
	    "file"
	],

	intention_verb_past: [
	    "designed",
	    "intended",
	    "created",
	    "built"
	],

	intelligence_noun: [
	    "intelligence",
	    "intel",
	    "information",
	    "data",
	],

	intelligence_verb: [
	    "send",
	    "transmit",
	    "exfiltrate",
	    "upload",
	],

	partnership_noun: [
	    "partnership",
	    "collaboration",
	    "alliance",
	    "joint operation",
	],
	

	superlative: [
	    "robust",
	    "omnipresent",
	    "unsurpassed",
	    "revolutionary",
	    "previously-impossible",
	    "omniscient",
	    "total",
	    "excellent",
	    "successful",
	    "COTS",
	],

	superlative_suffixes: [
	    "without the user noticing",
	    "with total freedom",
	    "in a fully automated manner",
	    "with only a single touch",
	    "wirelessly",
	    "at boot time",
	    "transparently",
	],

	container: [
	    "server room",
	    "car",
	    "briefcase",
	    "pocket",
	    "cargo container"
	],
	   

	target: [
	    "user",
	    "citizen",
	    "American",
	    "foreigner",
	    "target",
	    "agent",
	    "journalist"
	],

	gathering_adjective: [
	    "careful",
	    "cautious",
	    "brazen",
	    "narrow",
	    "targeted",
	    "systemic"
	],
	
	intercept_stuff: [
	    "chats",
	    "emails",
	    "phone calls",
	    "pornography",
	    "downloads",
	    "SMSes",
	    "text messages",
	    "transactions",
	    "network traffic",
	    "keystrokes",
	],

	
    };

    images = [
	"file0001202722707.jpg",
	"file0001513930592.jpg",
	"file0001541901942.jpg",
	"file0001867014505.jpg",
	"file000223820063.jpg",
	"file000769971511.jpg",
	"file00088279620.jpg",
	"file4561296767054.jpg",
	"file6751283459715.jpg",
	"file7481283464565.jpg",
	"file9451265744712.jpg",
	"file3561242315774.jpg",
	"file331242314889.jpg",
	"file0001031885094.jpg"
    ];

    templates = {
	topsummary_sentence1: [
	    "{{codename}} is a {{word 'device_adjective'}} {{word 'device_technology'}} {{word 'program_noun'}} {{word 'intention_verb_past'}} to {{word 'program_verb'}} {{word 'intelligence_adjective'}} {{word 'intelligence_adjective2'}} {{word 'intelligence_noun'}} using the {{new_codename}} {{ word 'program_noun'}}.",
	    "{{codename}} is a {{word 'device_adjective'}} {{word 'device_technology'}} {{word 'program_noun'}} {{word 'intention_verb_past'}} to {{word 'program_verb'}} {{word 'intelligence_adjective'}} {{word 'target'}} {{word 'intelligence_noun'}}.",
	],
	topsummary_sentence2: [
	    "Our {{word 'partnership_noun'}} with {{word 'organization'}} under the {{new_codename}} {{word 'program_noun'}} has made it possible to {{word 'program_verb'}} this {{word 'intelligence_noun'}}.",
	    "For the first time, we have the ability to {{word 'program_verb'}} {{word 'target'}}s' {{word 'intercept_stuff'}} {{word 'superlative_suffixes'}}.",
	    "Using it, the analyst can {{word 'program_verb'}} {{word 'target'}}s' {{word 'intercept_stuff'}} {{word 'superlative_suffixes'}}.", 
	    "It is capable of both {{word 'device_technology'}} and {{word 'device_technology'}} {{word 'program_verb2'}}.",
	],
	midparagraph: [
	    "This {{word 'program_noun'}} is capable of {{word 'superlative'}} {{word 'program_verb2'}} of {{word 'target'}} {{word 'intelligence_noun'}}.",
	    "The {{codename}} {{word 'program_noun'}} first {{word 'action_verb'}}s the {{word 'target'}}'s {{word 'intercept_stuff'}}, then using a {{word 'device_adjective'}} {{word 'device_technology'}} {{word 'program_noun'}}, {{word 'intelligence_verb'}}s the {{word 'intelligence_noun'}} to {{word 'organization'}}.",
	    "Through {{codename}}'s {{word 'superlative'}} {{word 'program_verb2'}} capability, we can {{word 'program_verb'}} {{word 'intercept_stuff'}} {{word 'superlative_suffixes'}}.",
	    "The {{codename}} {{word 'program_noun'}} supports {{word 'device_technology'}} as well as {{word 'device_adjective'}} {{word 'device_technology'}} {{word 'program_verb2'}}.",
	    "Through {{word 'gathering_adjective'}} {{word 'program_verb2'}}, {{codename}} is capable of {{word 'superlative'}} {{word 'intelligence_noun'}} {{word 'program_verb2'}}.",
	    "The {{codename}} {{word 'program_noun'}} uses a {{number}}{{word 'unit_prefix'}}{{word 'unit'}} {{word 'component'}} to {{word 'intelligence_verb'}} {{word 'target'}} {{word 'intercept_stuff'}}.",
	    "Our {{word 'gathering_adjective'}} use of {{word 'superlative'}} {{word 'device_technology'}} technology has {{word 'allowed_verb_past'}} {{word 'superlative'}} {{word 'program_verb2'}} of {{word 'intelligence_adjective'}} {{word 'intelligence_noun'}} from up to {{number}} {{word 'distance_unit_plural'}} away.",
	    "The {{codename}} {{word 'program_noun'}} uses only {{number}}{{word 'unit_prefix'}}{{word 'unit'}} to achieve {{word 'superlative'}} {{word 'intelligence_adjective2'}} {{word 'program_verb2'}}.",
	    "The {{number}}{{word 'unit_prefix'}}{{word 'unit'}} {{word 'component'}} was provided by the {{word 'organization'}} {{word 'partnership_noun'}}.",
	    "The {{word 'program_noun'}}'s {{word 'intelligence_noun'}} cannot be {{word 'action_verb'}}ed by external {{word 'target'}}s.",
	    "The {{word 'program_noun'}} {{word 'intelligence_verb'}}s {{word 'intelligence_noun'}} {{word 'superlative_suffixes'}}.",
	],
	capabilities: [
	    "{{number}}{{word 'unit_prefix'}}{{word 'unit'}} {{word 'component'}}",
	    "{{word 'device_adjective'}} {{word 'device_technology'}} {{word 'component'}}",
	    "{{new_codename}} integration",
	    "Linked with {{word 'organization'}}'s {{new_codename}} {{word 'program_noun'}}",
	    "Supports {{word 'organization'}} {{word 'program_noun'}}s",
	    "Requires only {{number}}{{word 'unit_prefix'}}{{word 'unit'}}",
	    "Installable {{word 'superlative_suffixes'}}",
	    "Invisible to {{word 'target'}}s",
	    "Small enough to fit in a {{word 'container'}}",
	    "Internal {{word 'component'}}",
	    "External {{word 'component'}}",
	    "Completely {{word 'superlative'}}",
	    "Can {{word 'intelligence_verb'}} {{word 'intelligence_noun'}} {{word 'superlative_suffixes'}}",
	    "Allows {{word 'intelligence_adjective'}} {{word 'program_verb2'}}"
	    ]
    }

    unit_costs  = 
	["${{number}}",
	 "N/A",
	 "${{number}}K",
	 "${{number}}M",
	 "${{number}} (planned)",
	 "Varies from platform to platform",
	 ];

    statuses = [
	"Still in development.",
	"This {{word 'program_noun'}} has reached the end of its of service life.",
	"Unit is operational.",
	"Ready for deployment"
    ];

    Handlebars.registerHelper('censorship', function() {
    var censor = "█";
	var c = "<span class='censored'>";
	for (i = 0; i < (Math.floor(Math.random() * 6) + 5); i++) {
	    c += censor;
	};
	return new Handlebars.SafeString(c + "</span>");
    });
	

    var generate_codename = function() {
	var name = "";
	if (Math.random() < .6) {
	    name += choice(words['codenames_adjective']); 
	} else {
	    name += choice(words['codenames_noun']);
	};
	name += choice(words['codenames_noun']);
	if (Math.random() < .2) {
	    name += choice(words['codenames_suffix']);
	}
	return name;
    }

    var generate_graph = function() {
	var g = new Graph();
	elements = {};
	for (i = 0; i < (Math.floor(Math.random() * 6) + 2); i++) {
	    elements[choice(words['program_noun'])] = 0;
	};
	for (elt in elements) {
	    g.addEdge(elt, choice(elements), {label: choice(words['intelligence_adjective2'])})
	};
	var layouter = new Graph.Layout.Spring(g);
	layouter.layout();
	var renderer = new Graph.Renderer.Raphael('diagram', g, 300, 200);
	renderer.draw();
    }

    codename = generate_codename().toUpperCase();

    Handlebars.registerHelper('word', function(thing) {
	console.log(thing);
	console.log(words[thing]);
	return choice(words[thing]);
    });

    Handlebars.registerHelper('number', function() {
	return (Math.random() * 100).toFixed(Math.floor(Math.random() * 4));
    });


    Handlebars.registerHelper('new_codename', function() { return generate_codename().toUpperCase(); });


    var generate_capabilities = function() {
	var caps = "<b>Capabilities:</b><ul>";
	for (i = 0; i <= Math.floor(Math.random() * 5) + 1; i++) {
	    caps += "<li>" + choice(templates['capabilities']) + "</li>\n";
	}
	caps += "</ul>";
	return caps;
    }

    var caps_generated = false;

    var generate_paragraph = function() {
	if (!caps_generated && Math.random() < .3) {
	    caps_generated = true;
	    return generate_capabilities();
	}
	var par = "";
	for (i = 0; i <= Math.floor(Math.random() * 4) + 1; i++) {
	    
		
	    par += choice(templates['midparagraph']) + " ";
	}
	return par;
    };


    hb_ctx = {
	codename: codename
    };



    

    // generate_graph();


    $("#name").text(codename);

    $('#topsummary').text(Handlebars.compile(choice(templates['topsummary_sentence1']) + " " + choice(templates['topsummary_sentence2']))(hb_ctx));
    
    $('#midparagraph1').html(Handlebars.compile(generate_paragraph())(hb_ctx));
    $('#midparagraph2').html(Handlebars.compile(generate_paragraph())(hb_ctx));
    $('#midparagraph3').html(Handlebars.compile(generate_paragraph())(hb_ctx));
    $('#midparagraph4').html(Handlebars.compile(generate_paragraph())(hb_ctx));
    $('#diagram').html("<img src='images/"+choice(images)+"' width=300 height=200/>");
    $('#status').html(Handlebars.compile("<b>Status:</b> " + choice(statuses)))
    $('#poc').html(Handlebars.compile("<b>POC:</b> {{censorship}}, S32222, {{censorship}}, {{censorship}}@nsa.ic.gov")(hb_ctx));
});
