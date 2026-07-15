export interface CaseStudy {
  slug: string;
  country: string;
  title: string;
  seoTitle: string;
  description: string;
  image: string;
  imagePosition: string;
  applicationSlug: string;
  productSlugs: string[];
  context: string[];
  requirement: string[];
  configuration: string[];
  interfaces: string[];
  checklist: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'turkey-transformer-temperature-controller-retrofit',
    country: 'Turkey',
    title: 'Turkey Transformer Temperature Controller Retrofit',
    seoTitle: 'Turkey Transformer Temperature Controller Retrofit | INNO',
    description: 'Turkey transformer temperature controller retrofit configuration covering BWY oil indication, BWR winding control, signals and replacement checks.',
    image: '/images/scenes/cases/turkey-transformer-retrofit.webp',
    imagePosition: '50% center',
    applicationSlug: 'transformer-temperature-controller-retrofit',
    productSlugs: ['bwy-802-803-oil-temperature-controller', 'bwr-04-06-winding-temperature-controller'],
    context: [
      'Oil-immersed transformer retrofits in Turkey often begin with an existing oil temperature indicator and winding temperature indicator that require replacement while the original control scheme remains in service.',
      'A retrofit begins with the installed instruments rather than a preferred catalog model. Front and rear photographs, complete nameplates, dial ranges, terminal references, capillary routes, bulb dimensions and mounting drawings establish the functional and mechanical baseline.'
    ],
    requirement: [
      'The replacement must preserve the meaning of each temperature value. The oil temperature controller follows top oil at the thermometer pocket. The winding temperature controller represents the transformer-specific simulated winding value through its current-related heating arrangement.',
      'Cooling, alarm and trip contacts require a terminal-by-terminal comparison. Remote Pt100 or 4-20 mA signals must retain their scale and receiving-input compatibility. A similar enclosure or partial BWY or BWR family name is not enough to prove interchangeability.'
    ],
    configuration: [
      'A suitable selection path pairs a BWY oil temperature controller with a BWR winding temperature controller after the full suffixes and drawings have been compared. The scale, switch count, contact duty, capillary length, bulb, thread and environmental construction remain subject to model confirmation.',
      'For the WTI path, the current-transformer secondary data and compound transmitter or converter arrangement must be captured from the original system. The simulated rise belongs to the transformer thermal design and should not be transferred from an unrelated unit.'
    ],
    interfaces: [
      'Assign every contact to a documented function such as cooling stage, high-temperature alarm or trip input. Confirm whether an interposing relay separates the instrument contact from the controlled load.',
      'For remote monitoring, document the signal type, loop supply, polarity, temperature scale and panel input. Commissioning compares local indication with the remote value and verifies every downstream action.'
    ],
    checklist: ['Complete old and proposed model codes', 'Dial scale and contact set points', 'Terminal diagram and contact functions', 'Remote signal type and scale', 'Bulb, thread and pocket dimensions', 'Capillary route and mounting footprint', 'WTI current circuit information', 'Final loop and function test record']
  },
  {
    slug: 'russia-cold-climate-winding-temperature-monitoring',
    country: 'Russia',
    title: 'Russia Cold-Climate Winding Temperature Monitoring',
    seoTitle: 'Russia Winding Temperature Monitoring Configuration | INNO',
    description: 'Russia winding temperature monitoring configuration for cold climates, covering BWR WTI selection, capillary routing, contacts and remote signals.',
    image: '/images/scenes/cases/russia-cold-climate.webp',
    imagePosition: '50% center',
    applicationSlug: 'power-transformer-temperature-monitoring',
    productSlugs: ['bwr2-transformer-winding-temperature-indicator', 'bwr-04-06-winding-temperature-controller'],
    context: [
      'Outdoor oil-immersed transformer winding temperature monitoring in Russia places particular emphasis on low ambient temperature, outdoor exposure and reliable transfer of the simulated winding value to local control and remote supervision.',
      'Cold-climate selection must start with the project environmental specification. Enclosure construction, sealing, capillary protection, cable entries, auxiliary equipment and any powered transmitter need to be checked against the stated minimum ambient and installation conditions.'
    ],
    requirement: [
      'The WTI must maintain clear local indication and operate the approved cooling, alarm or trip contacts. The current-derived heating system must correspond to the transformer CT data and required winding-to-oil temperature rise.',
      'Remote monitoring may use Pt100 or a conditioned 4-20 mA signal according to the selected model and panel architecture. The field scale and receiving scale must match, and the signal circuit should be commissioned across several test values.'
    ],
    configuration: [
      'A BWR2 or BWR family winding temperature indicator can be reviewed after the full operating range, switch functions, CT interface, compound transmitter, output and capillary are defined. Environmental suffixes and current product drawings control the final selection.',
      'The sensing system and capillary should be routed with broad bends and mechanical protection. Outdoor mounting should allow inspection without requiring repeated movement of the sealed capillary assembly.'
    ],
    interfaces: [
      'Cooling contacts are assigned in the transformer control scheme, while alarm and trip signals are coordinated with the approved protection philosophy. Contact ratings are compared with the real control circuit and interposing relays where applicable.',
      'Remote tags should state simulated winding temperature rather than the generic phrase transformer temperature. This prevents the WTI value from being confused with top-oil or direct embedded sensing.'
    ],
    checklist: ['Minimum and maximum ambient specification', 'BWR full model and temperature range', 'CT secondary current and converter data', 'Cooling, alarm and trip assignments', 'Pt100 or 4-20 mA interface', 'Outdoor sealing and cable entries', 'Capillary protection and bend route', 'Cold-condition commissioning procedure']
  },
  {
    slug: 'vietnam-distribution-transformer-temperature-monitoring',
    country: 'Vietnam',
    title: 'Vietnam Distribution Transformer Temperature Monitoring',
    seoTitle: 'Vietnam Distribution Transformer Temperature Monitoring | INNO',
    description: 'Vietnam distribution transformer temperature monitoring configuration using local oil indication, alarm contacts and optional remote condition data.',
    image: '/images/scenes/cases/vietnam-distribution.webp',
    imagePosition: '50% center',
    applicationSlug: 'distribution-transformer-temperature-monitoring',
    productSlugs: ['bwy2-transformer-oil-temperature-indicator', 'oil-temperature-level-pressure-monitoring-device'],
    context: [
      'Distribution transformer temperature monitoring in Vietnam must account for warm, humid and potentially unattended installations. The selection method starts with the operating response required from each measured value.',
      'The monitoring architecture depends on who observes the transformer and what action follows an abnormal value. A regularly inspected unit may use robust local top-oil indication and alarm contacts. A remote site may justify a powered device that reports additional condition values.'
    ],
    requirement: [
      'The project first defines whether top-oil temperature alone is required or whether oil level, pressure and remote communications are also part of the operating plan. Local visibility remains useful even when a supervisory connection is available.',
      'Humidity, enclosure sealing, cable entry direction and maintenance access belong in the mechanical review. The thermometer pocket, sensing bulb, thread and insertion depth must match the transformer drawing.'
    ],
    configuration: [
      'A BWY2 oil temperature indicator can provide local top-oil indication, adjustable contacts and a selected remote output. Where several transformer condition values are required, a powered oil temperature, level and pressure monitoring device can be evaluated as a separate architecture.',
      'The choice is based on maintenance responsibility and receiving-system capability. Digital data adds value only when the RTU or monitoring platform has a controlled address, register map, scale and alarm response.'
    ],
    interfaces: [
      'Local contacts can initiate a cooling or high-temperature alarm circuit. Their set points follow transformer engineering data, and the real contact load is checked before direct switching is approved.',
      'For RS485, define supply, topology, address, protocol and registers. For Pt100 or 4-20 mA, define wiring, isolation and scale. Commissioning confirms the complete path from field device to operator display.'
    ],
    checklist: ['Transformer type and inspection model', 'Top-oil or multi-parameter scope', 'Local display and contact functions', 'Remote signal or RS485 requirement', 'Pocket, thread and insertion depth', 'Humidity and enclosure requirement', 'Receiving-system configuration', 'End-to-end alarm verification']
  },
  {
    slug: 'spain-renewable-substation-temperature-monitoring',
    country: 'Spain',
    title: 'Spain Renewable Substation Temperature Monitoring',
    seoTitle: 'Spain Renewable Substation Temperature Monitoring | INNO',
    description: 'Spain renewable substation temperature monitoring configuration covering OTI, WTI, cooling contacts and remote transformer temperature signals.',
    image: '/images/scenes/cases/spain-renewable.webp',
    imagePosition: '50% center',
    applicationSlug: 'substation-remote-temperature-monitoring',
    productSlugs: ['bwy2-transformer-oil-temperature-indicator', 'bwr2-transformer-winding-temperature-indicator'],
    context: [
      'A renewable-energy substation in Spain benefits from a transformer temperature monitoring approach that separates local thermal indication, cooling control and remote supervisory signals.',
      'Variable generation can produce changing transformer load patterns. The monitoring scheme should preserve separate top-oil and simulated winding values so operators can relate temperature trends to loading and cooling state without treating the two measurements as equivalent.'
    ],
    requirement: [
      'The OTI provides the top-oil reference at the specified thermometer pocket. The WTI adds the transformer-specific current-related simulated rise. Each instrument can provide local indication and contacts according to the approved cooling and protection philosophy.',
      'Remote data is selected around the substation RTU or control platform. Pt100, 4-20 mA and RS485 are different interfaces and require compatible receiving equipment, scale definitions and commissioning methods.'
    ],
    configuration: [
      'A practical arrangement combines a BWY2 oil temperature indicator and a BWR2 winding temperature indicator. Final suffixes depend on range, contact quantity, output, capillary, CT interface, mounting and environmental requirements.',
      'The project drawings should identify every sensing point, terminal, cable, signal scale and remote tag. Product drawings confirm the bulb, thread, mounting and enclosure before installation work begins.'
    ],
    interfaces: [
      'Cooling-stage contacts, alarm and trip inputs are documented individually. The contact duty is coordinated with the panel circuit, and relay interfaces are used where the controlled load exceeds the instrument duty.',
      'Remote labels should state top-oil temperature and simulated winding temperature. Loop tests verify local and control-room values, alarm mapping and loss-of-signal behavior.'
    ],
    checklist: ['Top-oil and winding monitoring scope', 'Transformer loading and cooling philosophy', 'OTI and WTI complete model codes', 'WTI CT and thermal simulation data', 'Remote interface and receiving input', 'Signal labels and scale mapping', 'Outdoor installation drawings', 'Local-to-remote loop testing']
  },
  {
    slug: 'south-africa-industrial-transformer-thermal-protection',
    country: 'South Africa',
    title: 'South Africa Industrial Transformer Thermal Protection',
    seoTitle: 'South Africa Transformer Thermal Protection Configuration | INNO',
    description: 'South Africa industrial transformer thermal protection configuration using oil and winding temperature contacts for cooling, alarm and trip logic.',
    image: '/images/scenes/cases/south-africa-industrial.webp',
    imagePosition: '50% center',
    applicationSlug: 'transformer-cooling-control-alarm-trip',
    productSlugs: ['bwy-d804aith-digital-oil-temperature-controller', 'bwr-04-06-winding-temperature-controller'],
    context: [
      'Thermal protection for an oil-immersed transformer serving an industrial power system in South Africa requires a clear relationship between measured temperature, cooling control, alarm and trip logic.',
      'Industrial sites need a clear relationship between temperature indication and the action taken by the control circuit. Dust, ambient conditions, panel location, maintenance access and the duty of connected relays are defined before a temperature controller is selected.'
    ],
    requirement: [
      'The scheme may coordinate top-oil and simulated winding temperature with cooling stages, high-temperature alarm and a protection input. Each action is assigned to a specific contact and temperature variable in the approved drawings.',
      'A contact rating is not permission to switch a motor directly. The panel designer compares voltage, current and inductive duty, then specifies an interposing relay when required.'
    ],
    configuration: [
      'A multi-contact BWY oil temperature controller can support top-oil cooling and alarm functions. A BWR winding temperature controller can provide load-related simulation and additional control or protection contacts. Range, contact count, output and mechanics remain configuration-specific.',
      'The WTI current circuit, converter and simulated rise must correspond to the transformer. The OTI bulb and thermometer pocket must provide the intended top-oil measurement location and installation fit.'
    ],
    interfaces: [
      'The terminal schedule records contact state, controlled relay and approved set point. Switching differential is considered so cooling stages do not cycle rapidly and protection stages remain coordinated.',
      'Where a remote signal is required, its type, scale, supply and isolation are matched to the plant monitoring system. Commissioning proves each contact and remote value from the field instrument to the final destination.'
    ],
    checklist: ['Industrial ambient and dust conditions', 'Oil and winding temperature functions', 'Cooling, alarm and trip sequence', 'Contact voltage and real load duty', 'Interposing relay requirements', 'WTI CT and converter information', 'Remote signal and plant input', 'Documented functional test']
  },
  {
    slug: 'indonesia-hydropower-transformer-oil-temperature-monitoring',
    country: 'Indonesia',
    title: 'Indonesia Hydropower Transformer Oil Temperature Monitoring',
    seoTitle: 'Indonesia Transformer Oil Temperature Monitoring | INNO',
    description: 'Indonesia hydropower transformer oil temperature monitoring configuration covering BWY indication, cooling contacts, humidity and remote integration.',
    image: '/images/scenes/cases/indonesia-hydropower.webp',
    imagePosition: '50% center',
    applicationSlug: 'power-transformer-temperature-monitoring',
    productSlugs: ['bwy2-transformer-oil-temperature-indicator', 'bwy-d804aith-digital-oil-temperature-controller'],
    context: [
      'Oil temperature monitoring for an oil-immersed transformer at an Indonesian hydropower application must account for high humidity, outdoor exposure and the control-room signal path.',
      'The project environment may combine high humidity, outdoor exposure and limited access to the transformer during operation. Instrument location, enclosure sealing, cable entries, capillary protection and safe maintenance clearance should be included in the installation review.'
    ],
    requirement: [
      'The top-oil indicator provides a local value and can operate cooling or alarm contacts. The project specifies the thermometer pocket, temperature range, number of contacts, contact assignments and any remote signal required by the control room.',
      'Temperature trends need the correct context. Operators should review top-oil value with load, ambient condition and cooling status rather than interpret one isolated reading as a direct winding hot-spot measurement.'
    ],
    configuration: [
      'A BWY2 oil temperature indicator can be reviewed for local indication and selected remote output. A BWY-D804AITH configuration may be considered where additional contacts or a powered remote arrangement is required. Final availability follows the current model documents.',
      'Bulb diameter, active length, thread, insertion depth and capillary length must match the transformer arrangement. Spare capillary is managed in a broad protected route without crushing or sharp bends.'
    ],
    interfaces: [
      'Cooling and alarm contacts are tested through their final relays and annunciation paths. Set points follow approved transformer thermal limits and are recorded with the contact function.',
      'A Pt100 or 4-20 mA path requires compatible scale and wiring at the receiving equipment. Commissioning compares local indication with the control-room value and verifies alarm mapping.'
    ],
    checklist: ['Top-oil sensing pocket drawing', 'Temperature range and contact quantity', 'Cooling and alarm assignments', 'Pt100 or 4-20 mA requirement', 'Bulb, thread and insertion depth', 'Capillary route and protection', 'Humidity and enclosure sealing', 'Local and remote value comparison']
  }
];
