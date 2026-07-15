export interface Product {
  slug: string;
  name: string;
  model: string;
  category: 'Oil Temperature Indicators' | 'Winding Temperature Indicators' | 'Monitoring Devices';
  categorySlug: string;
  title: string;
  description: string;
  summary: string;
  image: string;
  detailImage: string;
  featured: string[];
  specs: Record<string, string>;
  overview: string[];
  principle: string[];
  selection: string[];
  installation: string[];
  applications: string[];
}

export const products: Product[] = [
  {
    slug:'bwr2-transformer-winding-temperature-indicator', name:'BWR2 Transformer Winding Temperature Indicator', model:'BWR2', category:'Winding Temperature Indicators', categorySlug:'transformer-winding-temperature-indicators',
    title:'BWR2 Winding Temperature Indicator | INNO',
    description:'Specify an INNO BWR2 transformer winding temperature indicator for simulated winding temperature, cooling control, alarm, trip and remote output.',
    summary:'A mechanical WTI gauge and compound transmitter for simulated winding temperature indication on oil-immersed transformers, with adjustable contacts and remote signal options.',
    image:'/images/products/bwr2-winding-temperature-indicator.webp', detailImage:'/images/products/bwr2-winding-temperature-indicator-detail.webp',
    featured:['Simulated winding temperature based on top-oil temperature and load-current heating','Four adjustable contacts for cooling, alarm and trip circuits','Pt100 output with 4-20 mA and remote display options by configuration'],
    specs:{'Operating ambient':'-40°C to +65°C','Relative humidity':'Up to 95% at 25°C','Measuring range':'0°C to 160°C','Accuracy':'Class 1.5; stated maximum error ±2.4°C','Switch contacts':'4 adjustable contacts','Switch rated power':'AC 220 V / 5 A','Remote signal options':'Pt100; 4-20 mA by selected configuration','Capillary length':'Defined by the final model code and project layout','Protection grade':'IP55','Common models':'BWR2-06AJ(TH), BWR2-05J(TH), BWR2-04AJ(TH), BWR2-04J(TH)'},
    overview:['The BWR2 is a winding temperature indicator, often abbreviated WTI, for oil-immersed transformers. It does not place an electrical sensor directly inside the conductor. The system combines the measured top-oil temperature with a load-current-related heating effect in a compound transmitter. The pointer therefore represents a simulated winding temperature that can support operating decisions, cooling control and protection logic.','This product family is used when the project needs a durable local dial, adjustable switching contacts and an output for remote indication. Several model suffixes define the contact arrangement, signal method and environmental configuration. A replacement order should never rely on the BWR2 family name alone. The complete model, current-transformer input, existing pocket arrangement and wiring must be compared.'],
    principle:['The temperature bulb responds to the transformer top-oil temperature. A current signal proportional to transformer loading is supplied from a current transformer to the compound transmitter. Its heating element adds a calibrated thermal rise to the sensing system. With no load, the indicated value follows top-oil temperature. Under load, the added rise moves the indication toward the calculated winding temperature.','The adjustable contacts can be assigned to cooling stages, alarm or trip functions according to the transformer protection design. Contact set points belong to the project commissioning record. They should be coordinated with the transformer thermal design, cooling stages and upstream protection scheme rather than copied from an unrelated installation.'],
    selection:['Provide the complete existing BWR2 model code, number and purpose of switch contacts, required signal output, CT secondary current, capillary length, remote display requirement and environmental conditions.','Confirm whether the order is for a new transformer or a retrofit. A retrofit also requires the existing mounting dimensions, thermometer pocket, bulb arrangement, cable entries and terminal diagram.'],
    installation:['Install the indicator vertically where the dial can be read and serviced. Protect the capillary from crushing, sharp bends and vibration. Insert the sensing bulb into the specified compound transmitter and thermometer pocket arrangement, then secure the route at suitable intervals.','Before energization, verify the contact continuity, terminal mapping, current-transformer circuit and remote output against the model-specific diagram. Functional testing should confirm local indication, each cooling or alarm stage and the receiving panel signal.'],
    applications:['Power transformer winding temperature indication','Cooling fan or pump stage control','Over-temperature alarm and trip protection','Retrofit of BWR-family winding thermometers'],
  },
  {
    slug:'bwy2-transformer-oil-temperature-indicator', name:'BWY2 Transformer Oil Temperature Indicator', model:'BWY2', category:'Oil Temperature Indicators', categorySlug:'transformer-oil-temperature-indicators',
    title:'BWY2 Oil Temperature Indicator | INNO',
    description:'Review the INNO BWY2 transformer oil temperature indicator for top-oil indication, cooling control, alarm contacts and remote Pt100 output.',
    summary:'An OTI gauge for transformer top-oil temperature indication, adjustable cooling and alarm contacts, and remote measurement output.',
    image:'/images/products/bwy2-oil-temperature-indicator.webp', detailImage:'/images/products/bwy2-oil-temperature-indicator-detail.webp',
    featured:['Top-oil temperature indication for oil-immersed transformers','Two to four adjustable contacts for cooling and alarm functions','Pt100 output with optional 4-20 mA and remote display configurations'],
    specs:{'Operating ambient':'-40°C to +80°C','Relative humidity':'Up to 95% at 25°C','Measuring range':'-20°C to 140°C','Accuracy':'Class 1.5; stated maximum error ±2.4°C','Switch contacts':'2-4 adjustable contacts','Switch rated power':'AC 220 V / 5 A','Temperature bulb':'Φ14 × 150 mm','Mounting thread':'M27 × 2 mm','Remote signal options':'Pt100; 4-20 mA by selected configuration','Protection grade':'IP55'},
    overview:['The BWY2 oil temperature indicator, or OTI gauge, measures the temperature at a transformer top-oil pocket. It provides a local pointer display and can operate adjustable contacts for cooling stages or an over-temperature alarm. A Pt100 output supports remote indication, while selected configurations can provide a transmitter or digital display.','Top-oil temperature is an important thermal operating value, but it is not the same as winding hot-spot temperature. The OTI records the oil condition at its sensing pocket. A WTI adds a load-dependent simulated rise. This distinction should remain clear in specifications, panel labels and alarm philosophy.'],
    principle:['A sealed sensing system links the temperature bulb, capillary and elastic measuring element. Temperature changes alter the sensing medium and move the indicator mechanism. Adjustable microswitches change state when the pointer mechanism reaches their configured set points.','The bulb is normally inserted into a thermometer pocket in the top-oil region. The pocket arrangement and thermal interface affect response. The selected capillary length must reach the mounting position without tight bends or unsupported loops.'],
    selection:['Confirm the full BWY2 model, measuring scale, switch quantity, contact use, output signal, capillary length, bulb and thread, mounting layout and need for a remote display.','For replacement work, compare the existing dial scale, terminal diagram and dimensions. Similar-looking BWY and BWY2 variants can use different contacts or output arrangements.'],
    installation:['Fill or prepare the thermometer pocket according to the transformer design and insert the bulb to its intended depth. Fix the instrument vertically and route the capillary with mechanical protection.','Test the pointer response, adjustable contacts and Pt100 or transmitter loop before the transformer enters service. Record the final set points and terminal assignments in the commissioning file.'],
    applications:['Transformer top-oil temperature indication','Radiator fan and pump control','High oil temperature alarm','Remote oil temperature display'],
  },
  {
    slug:'bwr-04-06-winding-temperature-controller', name:'BWR-04/06 Winding Temperature Controller', model:'BWR-04 / BWR-06', category:'Winding Temperature Indicators', categorySlug:'transformer-winding-temperature-indicators',
    title:'BWR-04/06 Winding Temperature Controller | INNO',
    description:'Compare BWR-04 and BWR-06 transformer winding temperature controller configurations, outputs, contacts, bulb, thread and capillary requirements.',
    summary:'A BWR winding thermometer family for simulated winding temperature, switch control and remote 4-20 mA configurations.',
    image:'/images/products/bwr-04-06-winding-temperature-controller.jpg', detailImage:'/images/products/bwr-04-06-winding-temperature-controller-detail.jpg',
    featured:['Default 0-150°C scale with optional 0-160°C configuration','Mechanical indication with switch and 4-20 mA model options','Standard Φ14 × 150 mm bulb, M27 × 2 thread and 5 m capillary'],
    specs:{'Referenced model':'BWR-04J(TH)','Default measuring range':'0°C to 150°C','Optional range':'0°C to 160°C','Accuracy':'Class 1.5; stated detection-point error ±2.25°C','Switching error':'±2°C','Switch rating':'AC 220 V / 5 A; DC 220 V / 3 A','Output for J configuration':'4-20 mA','Power supply':'AC 220 V ±10%, 50-60 Hz','Operating ambient':'-40°C to +55°C; altitude up to 2,000 m','Protection grade':'IP55','Bulb and thread':'Φ14 × 150 mm; M27 × 2 mm','Standard capillary':'5 m'},
    overview:['The BWR-04 and BWR-06 families are winding temperature controllers for oil-immersed transformers. They use a top-oil sensing system and a load-current thermal simulation element to provide a winding-temperature indication. Model suffixes identify output and contact configurations, so the exact suffix is required for procurement.','The referenced BWR-04J(TH) configuration provides a 4-20 mA current signal. Other members of the family may use different outputs, contact quantities or special-environment suffixes. The published family range is useful for initial selection, but the final quotation must follow a confirmed datasheet and drawing.'],
    principle:['The sensing bulb follows top-oil temperature while the load-current converter drives an internal heating element. The additional heating represents winding-to-oil temperature rise. The mechanical system sums both effects and moves the pointer.','Switch contacts can control cooling, initiate an alarm or contribute to trip logic. The 4-20 mA output allows a compatible remote display or monitoring system to receive the indicated temperature.'],
    selection:['Send the existing BWR-04 or BWR-06 code, scale, contact quantity, CT input, output, supply, capillary length and installation drawing.','Specify whether the instrument must match an existing mounting footprint or whether a new transformer design can use the current standard dimensions.'],
    installation:['Keep the instrument vertical and protect the capillary. Verify the sensing bulb, thread and pocket depth before installation.','Commission the local pointer, each switch contact, CT circuit and remote current loop. Confirm polarity and scaling at the receiving instrument.'],
    applications:['Oil-immersed transformer winding indication','BWR-04 and BWR-06 replacement projects','Remote 4-20 mA temperature indication','Cooling, alarm and trip contact control'],
  },
  {
    slug:'bwy-802-803-oil-temperature-controller', name:'BWY-802/803 Oil Temperature Controller', model:'BWY-802 / BWY-803', category:'Oil Temperature Indicators', categorySlug:'transformer-oil-temperature-indicators',
    title:'BWY-802/803 Oil Temperature Controller | INNO',
    description:'Specify a BWY-802 or BWY-803 transformer oil temperature controller with Pt100 output, adjustable contacts, M27 × 2 thread and 5 m capillary.',
    summary:'A transformer top-oil temperature controller with local indication, Pt100 remote signal and adjustable control contacts.',
    image:'/images/products/bwy-802-803-oil-temperature-controller.jpg', detailImage:'/images/products/bwy-802-803-oil-temperature-controller-detail.jpg',
    featured:['0-100°C or 0-120°C measuring ranges','Pt100 resistance output for remote indication','Outdoor IP55 construction with adjustable contacts'],
    specs:{'Output signal':'Pt100 resistance signal','Measuring ranges':'0-100°C or 0-120°C','Accuracy':'Class 1.5; stated maximum error ±1.8°C for 0-120°C','Switching error':'±2°C','Switch rating':'AC 220 V / 3 A; DC 220 V / 1.5 A','Operating ambient':'-40°C to +55°C; humidity up to 95%','Protection grade':'IP55','Temperature bulb':'Φ14 mm; insertion depth at least 150 mm','Mounting thread':'M27 × 2 mm','Standard capillary':'5 m','Optional remote conversion':'0-5 V, 4-20 mA or RS485 through a compatible display'},
    overview:['The BWY-802 and BWY-803 controllers measure transformer top-oil temperature and provide a Pt100 resistance signal for remote indication. The mechanical pointer and adjustable contacts support local operating checks and cooling control.','A compatible digital display can convert or retransmit the Pt100 signal as a voltage, current or RS485 interface. The final remote architecture should define who supplies excitation, how cable resistance is handled, and where signal conversion occurs.'],
    principle:['The bulb, capillary and mechanical sensing element form a sealed temperature system. Oil temperature changes move the pointer and the adjustable microswitch mechanism.','The composite sensing arrangement also provides a Pt100 output. This allows the control room to display the temperature without relying on visual inspection of the local dial.'],
    selection:['Choose the 0-100°C or 0-120°C range, confirm contact rating and use, Pt100 wiring, capillary length, mounting dimensions and any remote conversion requirement.','For a BWY replacement, send photographs of the nameplate and terminals together with the existing installation drawing.'],
    installation:['Insert the bulb into the designated top-oil pocket with the required insertion depth. Do not shorten, kink or sharply bend the capillary.','Verify Pt100 loop resistance and receiving-instrument configuration. Test every switch point using the approved commissioning method.'],
    applications:['Distribution transformer oil temperature control','Substation remote oil temperature indication','Cooling system switching','BWY-802 and BWY-803 replacement'],
  },
  {
    slug:'bwy-d804aith-digital-oil-temperature-controller', name:'BWY-D804AITH Digital Oil Temperature Controller', model:'BWY-D804AITH', category:'Oil Temperature Indicators', categorySlug:'transformer-oil-temperature-indicators',
    title:'BWY-D804AITH Digital Oil Temperature Controller',
    description:'Review BWY-D804AITH digital transformer oil temperature controller ranges, 4 or 6 contacts, Pt100 and 4-20 mA outputs, dimensions and options.',
    summary:'A digital-capable transformer oil temperature controller with multiple switch contacts, Pt100 and current-signal options for local and remote monitoring.',
    image:'/images/products/bwy-d804aith-digital-oil-temperature-controller.jpg', detailImage:'/images/products/bwy-d804aith-digital-oil-temperature-controller-detail.jpg',
    featured:['Four or six independently adjustable contacts','Pt100 and 4-20 mA output configurations','Multiple scale, power and capillary options for project matching'],
    specs:{'Default measuring range':'0°C to 150°C','Optional ranges':'0-160°C, -20-140°C or -45-150°C','Accuracy':'Class 1.5','Switch contacts':'4 or 6 adjustable contacts','Switching error':'±2°C','Switch differential':'Stated as 5 ±3°C','Switch rating':'AC 220 V / 5 A; DC 110 V / 3 A','Signals':'Pt100 and 4-20 mA by configuration','Power options':'AC/DC 220 V or DC 24 V configurations stated','Bulb and thread':'Φ14 × 150 mm; M27 × 2 mm','Standard capillary':'6 m; custom lengths available','Protection grade':'IP55','Enclosure':'304 × 192 × 103 mm'},
    overview:['The BWY-D804AITH combines a transformer oil temperature controller with remote signal capability and multiple adjustable switches. It supports local indication, cooling control, alarm logic and connection to a remote temperature display or supervisory system.','Several ranges and power arrangements are available. The dial scale, signal, contact quantity and supply must all appear in the purchase specification. A model name without its confirmed configuration is insufficient for a replacement order.'],
    principle:['The local sensing mechanism responds to top-oil temperature through the bulb and capillary. Adjustable contacts operate across the selected range.','Pt100 or 4-20 mA outputs connect to compatible remote equipment. An optional display can retransmit a 4-20 mA signal and provide RS485 communication according to the selected configuration.'],
    selection:['Confirm range, contact quantity, contact duty, signal, supply, capillary, enclosure mounting and remote display.','Provide the existing nameplate and panel cutout for retrofit work. Check that the receiving system accepts the specified signal and scale.'],
    installation:['Mount the enclosure securely, insert the bulb into the intended oil pocket and protect the capillary along its entire route.','Verify supply voltage before energization. Loop-test the Pt100 or current output and function-test all contact stages.'],
    applications:['Digital transformer top-oil monitoring','Four-stage or six-stage control schemes','Remote control-panel indication','Oil temperature controller modernization'],
  },
  {
    slug:'oil-temperature-level-pressure-monitoring-device', name:'Oil Temperature, Level and Pressure Monitoring Device', model:'IB-YKTCF-OL/OP', category:'Monitoring Devices', categorySlug:'transformer-temperature-monitoring-devices',
    title:'Transformer Oil Temperature Level Pressure Monitor',
    description:'Monitor transformer oil temperature, oil level and absolute pressure with one IP68 device, DC 12-24 V supply and RS485 communication.',
    summary:'An integrated transformer monitoring device for oil temperature, oil level and absolute pressure with RS485 output.',
    image:'/images/products/oil-temperature-level-pressure-monitoring-device.jpg', detailImage:'/images/products/oil-temperature-level-pressure-monitoring-device-detail.webp',
    featured:['Three measured variables in one transformer-mounted device','RS485 connection to an intelligent terminal','IP68 enclosure and DC 12-24 V supply'],
    specs:{'Temperature range':'-45.0°C to 200.0°C','Temperature accuracy':'±2°C from -45°C to 100°C; ±2% from 100°C to 200°C','Temperature resolution':'0.1°C','Absolute pressure range':'71-181 kPa','Pressure accuracy and resolution':'±2 kPa; 1 kPa','Oil-level range':'0 to -35 mm','Oil-level accuracy and resolution':'±2 mm; 1 mm','Operating ambient':'-40°C to +70°C; up to 95% RH at 25°C','Atmospheric pressure':'80-110 kPa','Protection grade':'IP68','Power supply':'DC 12-24 V; consumption ≤5 W','Communication':'RS485','Standard cable':'5 m, 4-core shielded cable with bendable stainless corrugated tube'},
    overview:['This integrated device monitors three operating values on an oil-immersed transformer: oil temperature, oil level and absolute pressure. It sends measured data through RS485 to a compatible intelligent terminal.','The device is intended for transformer or combined-substation monitoring where a single field assembly can reduce separate sensor locations. Integration still requires an agreed communication map, supply, cable route, installation interface and alarm policy in the supervisory system.'],
    principle:['Dedicated sensing elements measure temperature, float-related oil level and absolute pressure. The internal electronics condition the measurements and expose them over RS485.','Unlike a mechanical OTI or WTI, this product depends on external power and a digital receiving system. The selection decision should therefore include communications, cyber and maintenance requirements as well as mechanical fit.'],
    selection:['Confirm transformer type, mounting opening, oil-level geometry, required pressure reference, RS485 protocol details, supply, cable length and receiving terminal.','Confirm whether the project needs only measurement or also local alarm logic in the upstream controller.'],
    installation:['The referenced installation uses a traditional oil-level-gauge mounting location near the transformer side edge. Confirm the final drawing and sealing interface before machining or retrofit.','Connect the shielded cable to the fusion or intelligent terminal and DC supply according to the model-specific wiring instructions. Validate scaling and alarm thresholds in the receiving system.'],
    applications:['Smart distribution transformers','Combined substations','Remote transformer condition monitoring','Oil temperature, level and pressure integration'],
  }
];

export const getProduct = (slug: string) => products.find(product => product.slug === slug);
