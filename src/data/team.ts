export interface TeamMember {
  name: string;
  role: string;
  roleHi: string;
  bio: string;
  bioHi: string;
  focus: string;
  focusHi: string;
  affiliation: string;
  affiliationHi: string;
  email?: string;
  phone?: string;
  education?: string;
  educationHi?: string;
}

export const mentors: TeamMember[] = [
  {
    name: "Romi Banerjee",
    role: "Assistant Professor, CSE",
    roleHi: "सहायक प्रोफेसर, CSE",
    bio: "Romi Banerjee is a faculty mentor whose work spans embodied cognitive architectures, artificial general intelligence, computing with words, and natural language understanding. Her mentorship strengthens the project's computational and technical direction.",
    bioHi:
      "रोमी बनर्जी परियोजना की एक फैकल्टी मेंटर हैं जिनका कार्य एम्बॉडीड कॉग्निटिव आर्किटेक्चर्स, आर्टिफिशियल जनरल इंटेलिजेंस, कंप्यूटिंग विद वर्ड्स और नेचुरल लैंग्वेज अंडरस्टैंडिंग जैसे क्षेत्रों में फैला है। उनका मार्गदर्शन इस परियोजना की तकनीकी और संगणकीय दिशा को मजबूत करता है।",
    focus:
      "Embodied Cognitive Architectures, Artificial General Intelligence, Computing with Words, and Natural Language Understanding",
    focusHi:
      "एम्बॉडीड कॉग्निटिव आर्किटेक्चर्स, आर्टिफिशियल जनरल इंटेलिजेंस, कंप्यूटिंग विद वर्ड्स और नेचुरल लैंग्वेज अंडरस्टैंडिंग",
    affiliation: "IIT Jodhpur",
    affiliationHi: "आईआईटी जोधपुर",
    email: "romibanerjee@iitj.ac.in",
    phone: "0291 280 1269",
    education: "Ph.D.: Calcutta University, Indian Statistical Institute",
    educationHi:
      "पीएच.डी.: कलकत्ता विश्वविद्यालय, इंडियन स्टैटिस्टिकल इंस्टीट्यूट",
  },
  {
    name: "Tonisha Guin",
    role: "Assistant Professor, SoLA",
    roleHi: "सहायक प्रोफेसर, SoLA",
    bio: "Tonisha Guin is a faculty mentor whose academic work engages with global south knowledge systems, decoloniality, identity studies, space studies, and new media issues. Her guidance supports the project's cultural framing and critical humanities perspective.",
    bioHi:
      "टोनिशा गुइन परियोजना की एक फैकल्टी मेंटर हैं जिनका शैक्षणिक कार्य ग्लोबल साउथ के ज्ञान तंत्र, डिकोलोनियलिटी, पहचान अध्ययन, स्पेस स्टडीज़ और न्यू मीडिया मुद्दों से जुड़ा है। उनका मार्गदर्शन इस परियोजना को सांस्कृतिक दृष्टि और समालोचनात्मक मानवीकी परिप्रेक्ष्य प्रदान करता है।",
    focus:
      "Knowledge systems in Global South, Decoloniality, Identity Studies, Space Studies, and New Media Issues",
    focusHi:
      "ग्लोबल साउथ के ज्ञान तंत्र, डिकोलोनियलिटी, पहचान अध्ययन, स्पेस स्टडीज़ और न्यू मीडिया मुद्दे",
    affiliation: "IIT Jodhpur",
    affiliationHi: "आईआईटी जोधपुर",
    email: "tonisha@iitj.ac.in",
    phone: "0291 280 1407",
    education: "The English and Foreign Languages University, Hyderabad",
    educationHi: "द इंग्लिश एंड फॉरेन लैंग्वेजेस यूनिवर्सिटी, हैदराबाद",
  },
];

export const contributors: TeamMember[] = [
  {
    name: "Krish Kyada",
    role: "Student Contributor",
    roleHi: "छात्र योगदानकर्ता",
    bio: "A student contributor from IIT Jodhpur who worked as part of the project team behind Rangilo Rajasthan.",
    bioHi:
      "आईआईटी जोधपुर के छात्र योगदानकर्ताओं में से एक, जिन्होंने रंगीला राजस्थान परियोजना टीम के हिस्से के रूप में काम किया।",
    focus: "Project development and collaboration",
    focusHi: "परियोजना विकास और सहयोग",
    affiliation: "IIT Jodhpur",
    affiliationHi: "आईआईटी जोधपुर",
  },
  {
    name: "Maahi Ratanpara",
    role: "Student Contributor",
    roleHi: "छात्र योगदानकर्ता",
    bio: "A student contributor from IIT Jodhpur who contributed to the project as part of the core team.",
    bioHi:
      "आईआईटी जोधपुर की छात्र योगदानकर्ता, जिन्होंने कोर टीम के हिस्से के रूप में इस परियोजना में योगदान दिया।",
    focus: "Project development and collaboration",
    focusHi: "परियोजना विकास और सहयोग",
    affiliation: "IIT Jodhpur",
    affiliationHi: "आईआईटी जोधपुर",
  },
  {
    name: "Kavya Bhanvadia",
    role: "Student Contributor",
    roleHi: "छात्र योगदानकर्ता",
    bio: "A student contributor from IIT Jodhpur involved in shaping and supporting the project experience.",
    bioHi:
      "आईआईटी जोधपुर की छात्र योगदानकर्ता, जिन्होंने परियोजना के अनुभव को आकार देने और समर्थन देने में भाग लिया।",
    focus: "Project development and collaboration",
    focusHi: "परियोजना विकास और सहयोग",
    affiliation: "IIT Jodhpur",
    affiliationHi: "आईआईटी जोधपुर",
  },
  {
    name: "Anika Sharma",
    role: "Student Contributor",
    roleHi: "छात्र योगदानकर्ता",
    bio: "A student contributor from IIT Jodhpur who worked with the team on the project.",
    bioHi:
      "आईआईटी जोधपुर की छात्र योगदानकर्ता, जिन्होंने इस परियोजना में टीम के साथ मिलकर कार्य किया।",
    focus: "Project development and collaboration",
    focusHi: "परियोजना विकास और सहयोग",
    affiliation: "IIT Jodhpur",
    affiliationHi: "आईआईटी जोधपुर",
  },
  {
    name: "Yash Gor",
    role: "Student Contributor",
    roleHi: "छात्र योगदानकर्ता",
    bio: "A student contributor from IIT Jodhpur who participated in the creation of Rangilo Rajasthan.",
    bioHi:
      "आईआईटी जोधपुर के छात्र योगदानकर्ता, जिन्होंने रंगीला राजस्थान के निर्माण में भाग लिया।",
    focus: "Project development and collaboration",
    focusHi: "परियोजना विकास और सहयोग",
    affiliation: "IIT Jodhpur",
    affiliationHi: "आईआईटी जोधपुर",
  },
];
