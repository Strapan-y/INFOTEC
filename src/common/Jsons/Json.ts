export const spanishMonths: SpanishMonths = {
    "January": "Enero",
    "February": "Febrero",
    "March": "Marzo",
    "April": "Abril",
    "May": "Mayo",
    "June": "Junio",
    "July": "Julio",
    "August": "Agosto",
    "September": "Septiembre",
    "October": "Octubre",
    "November": "Noviembre",
    "December": "Diciembre"
}

export const spanishShortMonths: SpanishMonths = {
    "Jan": "Ene",
    "Feb": "Feb",
    "Mar": "Mar",
    "Apr": "Abr",
    "May": "May",
    "Jun": "Jun",
    "Jul": "Jul",
    "Aug": "Ago",
    "Sep": "Sep",
    "Oct": "Oct",
    "Nov": "Nov",
    "Dec": "Dic"
}

interface SpanishMonths {
    [key: string]: string;
}

export const nationalities = [
    'AFG', 'ALB', 'DZA', 'AND', 'AGO', 'ATG', 'ARG', 'ARM', 'AUS', 'AUT', 'AZE',
    'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BTN', 'BOL', 'BIH',
    'BWA', 'BRA', 'BRN', 'BGR', 'BFA', 'BDI', 'CPV', 'KHM', 'CMR', 'CAN', 'CAF',
    'TCD', 'CHL', 'CHN', 'COL', 'COM', 'COG', 'COD', 'CRI', 'HRV', 'CUB', 'CYP',
    'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI', 'EST',
    'SWZ', 'ETH', 'FJI', 'FIN', 'FRA', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA', 'GRC',
    'GRD', 'GTM', 'GIN', 'GNB', 'GUY', 'HTI', 'HND', 'HUN', 'ISL', 'IND', 'IDN',
    'IRN', 'IRQ', 'IRL', 'ISR', 'ITA', 'JAM', 'JPN', 'JOR', 'KAZ', 'KEN', 'KIR',
    'PRK', 'KOR', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO', 'LBR', 'LBY', 'LIE',
    'LTU', 'LUX', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT', 'MHL', 'MRT', 'MUS',
    'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MAR', 'MOZ', 'MMR', 'NAM', 'NRU',
    'NPL', 'NLD', 'NZL', 'NIC', 'NER', 'NGA', 'MKD', 'NOR', 'OMN', 'PAK', 'PLW',
    'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'POL', 'PRT', 'QAT', 'ROU', 'RUS', 'RWA',
    'KNA', 'LCA', 'VCT', 'WSM', 'SMR', 'STP', 'SAU', 'SEN', 'SRB', 'SYC', 'SLE',
    'SGP', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SSD', 'ESP', 'LKA', 'SDN', 'SUR',
    'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA', 'TLS', 'TGO', 'TON', 'TTO',
    'TUN', 'TUR', 'TKM', 'TUV', 'UGA', 'UKR', 'ARE', 'GBR', 'USA', 'URY', 'UZB',
    'VUT', 'VAT', 'VEN', 'VNM', 'YEM', 'ZMB', 'ZWE'
];

export const stratums = [
    '1', '2', '3', '4', '5', '6',
];

export const documentTypes = [
    { code: 'AS', description: 'ADULTO SIN ID.' },
    { code: 'CD', description: 'CARNÉ DIPLOMATICO' },
    { code: 'CC', description: 'CEDULA' },
    { code: 'CE', description: 'CEDULA DE EXTR.' },
    { code: 'DE', description: 'DOCUMENTO IDENTIFICACIÓN EXTRANJERO' },
    { code: 'MS', description: 'MENOR SIN ID.' },
    { code: 'CN', description: 'NACIDO VIVO' },
    { code: 'NIT', description: 'NIT' },
    { code: 'PA', description: 'PASAPORTE' },
    { code: 'PE', description: 'PERMISO ESPECIAL PERMANENCIA' },
    { code: 'PT', description: 'PERMISO POR PROTECCION TEMPORAL' },
    { code: 'RC', description: 'REGISTRO CIVIL' },
    { code: 'SC', description: 'SALVOCONDUCTO' },
    { code: 'TE', description: 'TARJETA DE EXTRANJERIA' },
    { code: 'TI', description: 'TARJETA IDENT.' }
];

export const sexs = [
    { code: 'M', description: 'Masculino' },
    { code: 'F', description: 'Femenino' },
    { code: 'I', description: 'Indeterminado' },
    { code: 'O', description: 'Otro' }
];

export const times = [
    { code: 'A', description: 'Año' },
    { code: 'M', description: 'Mes' },
    { code: 'D', description: 'Día' },
]

export const ethnicGroups = [
    { code: 'N', description: 'NINGUNO' },
    { code: 'I', description: 'INDIGENA' },
    { code: 'A', description: 'AFRO-COL' },
    { code: 'M', description: 'MESTIZO' },
    { code: 'P', description: 'PALENQUERO' },
    { code: 'R', description: 'RAIZAL' },
    { code: 'G', description: 'ROM' }
]

export const civilStatuses = [
    { code: 'S', description: 'SOLTERO' },
    { code: 'C', description: 'CASADO' },
    { code: 'U', description: 'UNION LIBRE' },
    { code: 'D', description: 'DIVORCIADO' },
    { code: 'V', description: 'VIUDO' }
]

export const populationGroups = [
    "COMUNIDADES INDÍGENAS", "ROM GITANOS", "MADRES COMUNITARIAS", "ARTISTAS, AUTORES, COMPOSITORES", "NEGRO, MULATO, AFROCOLOMBIANO, AFRODESCENDIENTE",
    "OTRO GRUPO POBLACIONAL", "DISCAPACITADO", "DESMOVILIZADOS", "DESPLAZADOS", "POBLACION INFANTIL A CARGO DEL ICBF", "INDIGENTES",
    "POBLACIÓN EN CENTROS PSIQUIATRICOS", "MIGRATORIOS", "POBLACIÓN EN CENTROS CARCELARIOS", "POBLACIÓN RURAL NO MIGRATORIA",
    "POBLACIÓN DE LA TERCERA EDAD EN PROTECCIÓN DE ANCIANATOS", "NUEVE SENTENCIAS DE LA CID CORTE INTERAMERICANA DE DERECHOS HUMANOS",
    "NO DEFINIDO", "INDEFINIDO"
]

export const indigenousPeopleS = [
    "Achagua", "Aruaco", "Awá", "Bará", "Barasana", "Barí", "Camsá", "Cocama", "Cofán", "Cuiba", "Curripaco", "Desano", "Embera", "Inga",
    "Jiw", "Kankuamo", "Kichwa", "Kogui", "Kubeo", "Kuna", "Makaguaje", "Makuna", "Mamlaba", "Matapí", "Miraña", "Misak", "Mokaná",
    "Muina-Murui", "Muisca", "Nasa", "Nonuya", "Ocaina", "Pastos", "Piaroa", "Piapoco", "Pijao", "Piratapuyo", "Pisamira",
    "Saaliva", "Siona", "Sikuani", "Taiwano", "Tanimuca", "Tariano", "Ticuna", "Totoro", "Tucano", "Tukano", "U'wa", "Uitoto", "Wanano",
    "Wayuu", "Wiwa", "Wounaan", "Yagua", "Yanacona", "Yukpa", "Yuruti", "Zenú", "Sáliba", "Chocó", "Páez", "Guambiano", "Cubeo", "Guayabero",
    "Kurripako", "Witoto", "Arhuaco", "Carijona", "Hitnü", "Huitoto", "Kamsá", "Puinave", "Yamalero", "Nukak", "Cacua", "Caiqueto",
    "Hupo", "Kakua", "Carabayo", "Kisgo", "Maguaje", "Maya", "Puimamo", "San Salvador", "Siriano", "Tariano", "Tapuyo", "Waunan", "Siriano",
    "Tukano", "Yapur", "Aroa", "Erara", "Kamsá", "Kariña", "Makaguaje", "Napo", "Noanamá", "Omagua", "Patuyo", "Puinave", "Siona", "Tapuaya",
    "Tukano", "Wanano", "Wayana", "Yagua", "Yari", "Zenu", "Zio", "Haguchá", "Itubo", "Iwio", "Jibaré", "Motilón", "Yabizo", "Yagua", "Yukuna",
    "Amorua", "Andaquí", "Andoke", "Cabiyari", "Cofan", "Cuiba", "Carabayo", "Camsá", "Guahibo", "Guayabero", "Hitnü", "Hupda", "Karijona",
    "Kogui", "Makuna", "Maku", "Mirití", "Muinane", "Murui", "Nonuya", "Okaina", "Ocaina", "Piapoco", "Puindekeri", "Saíra", "Tanimuka",
    "Tatuyo", "Tucano", "Tucano", "Tuyuka", "Wanano", "Witoto", "Yagua", "Yaruro", "Yukpa", "Yuruti", "Kakua", "Aroa", "Arawa", "Cabiyarí",
    "Canamari", "Katanga", "Kayapo", "Kawaiwete", "Kurripako", "Makuna", "Matapi", "Mura", "Parintintin", "Sateré", "Tanimuka", "Tucano",
    "Waorani", "Yanomami", "Yuruti"
]

export const vulnerableGroupsS = [
    "prueba"
]


export const countriesOrigin = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
    "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
    "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
    "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia", "Cameroon", "Canada",
    "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
    "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus",
    "Czechia (Czech Republic)", "Democratic Republic of the Congo", "Denmark",
    "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador",
    "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia",
    "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana",
    "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
    "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
    "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati",
    "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya",
    "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
    "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius",
    "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
    "Mozambique", "Myanmar (formerly Burma)", "Namibia", "Nauru", "Nepal", "Netherlands",
    "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia",
    "Norway", "Oman", "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia",
    "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines",
    "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
    "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
    "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka",
    "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
    "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago",
    "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
    "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu",
    "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
]

export const responsableRelationshipTypes = [
    "Padre/M", "Tio (a)", "Hermano (a)", "Vecino(a)", "Esposo (a)", "Conocido", "Primo (a)", "Primo Herm",
    "El mismo", "Abuelo(a)", "Amigo(a)", "Otro"
]

export const patientProfessions = [
    "Ama de casa", "Estudiante", "Desempleado", "Pensionado", "Independiente", "Médico", "Ingeniero civil", "Abogado", "Arquitecto",
    "Psicólogo clínico", "Científico de datos", "Profesor universitario", "Investigador científico", "Piloto de aviación comercial",
    "Diseñador de software", "Economista", "Analista financiero", "Administrador de empresas", "Periodista investigativo", "Geólogo",
    "Biólogo marino", "Consultor de estrategia empresarial", "Director de marketing", "Farmacéutico", "Nutricionista clínico",
    "Ingeniero biomédico", "Físico teórico", "Matemático investigador", "Traductor e intérprete", "Escritor técnico",
    "Diseñador industrial", "Cirujano", "Veterinario", "Oceanógrafo", "Psiquiatra", "Consultor de recursos humanos", "Analista de sistemas",
    "Analista de seguridad informática", "Fotógrafo profesional", "Director de cine", "Artista digital", "Fotógrafo forense",
    "Director de orquesta", "Juez", "Bombero especializado en rescate", "Actor de teatro", "Escultor", "Director de arte",
    "Coreógrafo", "Chef ejecutivo", "Somelier", "Coach ejecutivo", "Director de operaciones", "Director de recursos humanos",
    "Ingeniero aeroespacial", "Biólogo molecular", "Paleontólogo", "Criminólogo", "Epidemiólogo", "Genetista", "Investigador de mercado",
    "Planificador urbano", "Auditor financiero", "Fisioterapeuta", "Terapeuta ocupacional", "Director de proyectos", "Director creativo",
    "Consultor de comunicaciones", "Editor científico", "Astrónomo", "Escritor médico", "Director de logística", "Geógrafo",
    "Ingeniero de software", "Ingeniero eléctrico", "Diseñador de experiencia de usuario (UX)", "Desarrollador de videojuegos",
    "Diseñador gráfico", "Ingeniero de telecomunicaciones", "Ingeniero ambiental", "Consultor SAP", "Analista de riesgos financieros",
    "Gerente de proyectos de construcción", "Neurólogo", "Psicólogo educativo", "Médico forense", "Ingeniero estructural", "Biocientífico",
    "Piloto de helicóptero de rescate", "Editor de contenido digital", "Consultor de negocios internacionales", "Gerente de operaciones",
    "Diseñador de moda", "Director de eventos", "Investigador de inteligencia artificial", "Ingeniero de sistemas de control",
    "Físico nuclear", "Historiador del arte", "Ingeniero de robótica", "Analista de políticas públicas", "Planificador financiero",
    "Gerontólogo", "Biólogo evolutivo", "Ingeniero de minas", "Analista de datos", "Ingeniero de redes", "Ingeniero de seguridad industrial",
    "Antropólogo", "Consultor de marketing digital", "Meteorólogo", "Diplomático", "Analista de cadena de suministro", "Estadístico",
    "Médico radiólogo", "Ingeniero de calidad", "Gerente de recursos humanos", "Médico cirujano", "Dentista especializado",
    "Ingeniero de diseño mecánico", "Diseñador de interiores", "Científico de materiales", "Economista ambiental", "Ingeniero de energías renovables",
    "Analista de negocios", "Director de tecnología", "Especialista en seguridad informática", "Terapeuta de lenguaje y habla",
    "Biostatístico", "Investigador de enfermedades tropicales", "Director de recursos naturales", "Consultor de ingeniería civil",
    "Explorador submarino", "Etnólogo", "Escritor legal", "Médico veterinario especializado", "Ingeniero acústico", "Diseñador de juguetes",
    "Director de museo", "Especialista en nanotecnología", "Director de operaciones de emergencia", "Ingeniero de diseño industrial",
    "Coreólogo", "Consultor de seguridad cibernética", "Artista de efectos visuales", "Gerente de ventas internacionales",
    "Director de sostenibilidad", "Investigador de oceanografía", "Psicólogo deportivo", "Agrónomo", "Biólogo celular", "Escritor científico",
    "Consultor de gestión de riesgos", "Ingeniero de sistemas espaciales", "Físico de partículas", "Analista de política energética",
    "Especialista en relaciones públicas", "Cirujano cardiovascular", "Investigador de astronomía", "Director de innovación",
    "Asesor financiero", "Gerente de cadena de suministro", "Consultor de desarrollo empresarial", "Médico de emergencias",
    "Ingeniero de materiales", "Piloto de pruebas aéreas", "Bioclimatólogo", "Ingeniero de control de calidad", "Terapeuta respiratorio",
    "Consultor de investigación de mercado", "Ingeniero de automatización industrial", "Artista conceptual", "Gerente de proyectos de TI",
    "Diseñador de productos", "Médico radioterapeuta", "Ingeniero de seguridad cibernética", "Ingeniero de software embebido",
    "Ergónomo", "Director de producción audiovisual", "Ingeniero de telecomunicaciones", "Ingeniero de diseño electrónico",
    "Geofísico", "Especialista en sistemas de información geográfica", "Tecnólogo médico", "Especialista en recursos hídricos",
    "Director de desarrollo de software", "Estratega digital", "Ingeniero de manufactura", "Arqueólogo", "Asesor de políticas públicas",
    "Investigador de biotecnología", "Ingeniero de sistemas de información", "Director de recursos culturales", "Consultor de experiencia de usuario (UX)",
    "Ingeniero de vehículos eléctricos", "Genetista forense", "Ingeniero de realidad virtual", "Diseñador de escenarios",
    "Investigador de ciencias del comportamiento", "Ingeniero de inteligencia artificial", "Ingeniero de sistemas de navegación",
    "Analista de sistemas informáticos", "Asesor de inversiones", "Ingeniero de diseño de software", "Cirujano plástico",
    "Médico oftalmólogo", "Ingeniero de microelectrónica", "Diseñador de efectos especiales", "Fotógrafo de naturaleza",
    "Gerente de sostenibilidad ambiental", "Ingeniero de investigación y desarrollo", "Especialista en educación ambiental",
    "Consultor de ciberseguridad industrial", "Director de políticas de salud pública", "Investigador de inteligencia artificial",
    "Especialista en ergonomía", "Ingeniero de robótica móvil", "Economista de desarrollo", "Biólogo vegetal", "Ingeniero de sistemas de transporte",
    "Especialista en rehabilitación física", "Ingeniero de sistemas fotovoltaicos", "Diseñador de realidad aumentada",
    "Consultor de estrategias de marca", "Médico oncólogo", "Director de desarrollo urbano", "Ingeniero de sistemas de armamento",
    "Escritor de ciencia ficción", "Analista de investigación de operaciones", "Diseñador de aplicaciones móviles",
    "Fotógrafo de moda", "Gerente de cumplimiento normativo", "Consultor de ética empresarial", "Ingeniero de propulsión aeroespacial",
    "Ingeniero de estructuras", "Otro"
]

export const allergies = [
    {
        name: "Alimentos",
        reports: [
            "Mariscos", "Pescado", "Nueces", "Maní", "Huevo", "Leche", "Condimentos", "Aditivos"
        ]
    },
    {
        name: "En el Ambiente",
        reports: [
            "Polen", "Polvo", "Pastos", "Antigeno", "Productos Quimicos"
        ]
    },
    {
        name: "En Contacto con la Piel",
        reports: [
            "Detergente", "Jabón", "Látex"
        ]
    },
    {
        name: "Picadura de Insectos",
        reports: [
            "Avispas", "Abejas"
        ]
    },
    {
        name: "Medicamentos",
        reports: [
            ""
        ]
    },
]

export const allergiesStatus = [
    "En diagnostico", "En tratamiento", "En sensibilización"
]

export const allergiesTypes = [
    "Inmediata", "Citotoxina", "Compleja Inmunológica", "Retardada"
]

export const pathologyStatuses = [
    "DETECTADA", "CONTROL", "TRATADA"
]

export const procedureTypes = [
    "TRANSFUCIONAL", "TERAPEUTICO", "QUIRURGICO", "GINECOLOGICO"
]

export const frequencies = [
    "Por Dia", "Por Semana", "Por Mes", "Ocasional", "Sin Dato"
]

export const bloodTypes = [
    "A", "B", "AB", "O"
]

export const RHs = [
    "Positivo", "Negativo"
]

export const units = [
    "mg", "ml",
]

export const routesOfAdministration = [
    "Tópica", "Oral", "Intravaginal", "Oftálmico", "Ótica", "Intralesional", "Intranasal", "Sublingual",
    "Rectal", "Intradérmica", "Subcutánea", "Intramuscular", "Endovenosa", "Intracardiaca", "intraRaquidea",
    "IntraArticular", "Inhalatoria"
]

export const frequenciesDose = [
    "Mes(Es)", "Noche(s)", "Horas(s)", "Días(s)", "Semanal", "En la Noche", "En Ayunas", "Con el Almuerzo",
    "Después del Almuerzo", "Después de la Comida", "Minuto(s)", "Entre Comidas"
]
