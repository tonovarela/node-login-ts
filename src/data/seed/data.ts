import { bcryptAdapter } from '../../config';

export const seedData = {

   users : [
    { nombre: 'Test 1', email: 'test1@google.com', password: bcryptAdapter.hash( '123456') },
    { nombre: 'Test 2', email: 'test2@google.com', password: bcryptAdapter.hash( '123456') },
    { nombre: 'Test 3', email: 'test3@google.com', password: bcryptAdapter.hash( '123456') },
    { nombre: 'Test 4', email: 'test4@google.com', password: bcryptAdapter.hash( '123456') },
    { nombre: 'Test 5', email: 'test5@google.com', password: bcryptAdapter.hash( '123456') },
    { nombre: 'Test 6', email: 'test6@google.com', password: bcryptAdapter.hash( '123456') },
  ],

  categories: [
    { nombre: 'Driven' },
    { nombre: 'Till' },
    { nombre: 'Shout' },
    { nombre: 'Distance' },
    { nombre: 'Became' },
    { nombre: 'Chapter' },
    { nombre: 'Syllable' },
    { nombre: 'Arm' },
    { nombre: 'Guard' },
    { nombre: 'Perfectly' },
    { nombre: 'Expect' },
    { nombre: 'Hardly' },
    { nombre: 'anyone' },
    { nombre: 'vessels' },
    { nombre: 'angle' },
    { nombre: 'degree' },
    { nombre: 'split' },
    { nombre: 'would' },
    { nombre: 'kitchen' },
    { nombre: 'planned' },
    { nombre: 'combination' },
    { nombre: 'felt' },
  ],

  products: [
    { nombre: 'Than', disponible: true, precio: 75.0369, descripcion: 'daughter me move thumb claws lose supper strip animal teach additional definition why pitch help thus boy like every mud month are account dozen' },
    { nombre: 'Wagon', disponible: true, precio: 1.9631,  descripcion: 'actual difficult nature yellow smile captain nervous to cause wolf strong neck fifteen wrote consider visit likely happened rear red review wash flag parent' },
    { nombre: 'Tone', disponible: true, precio: 11.0312, descripcion: 'met certain specific detail deeply red forth tiny whatever what image parts deer difficulty pair mixture trouble forgotten fort dry listen strength got seldom' },
    { nombre: 'Song', disponible: true, precio: 99.2314, descripcion: 'look board flat river solve spite universe history use pool frequently twenty basic lying this came poetry particular function previous suit west shore tomorrow' },
    { nombre: 'Plenty', disponible: true, precio: 75.4476, descripcion: 'dinner welcome screen expression structure plastic doubt missing thank garage property particular park syllable slide cup alphabet swimming stood fought fog shut spite ever' },
    { nombre: 'Season', disponible: false, precio: 91.6254, descripcion: 'canal promised split headed studying had declared vessels hello matter lovely congress birthday fed word street happened ought cold heavy cage shoulder sight applied' },
    { nombre: 'Voyage', disponible: true, precio: 84.0274,  descripcion: 'reach myself owner building anyway tool dance particles branch shadow clear home of grass rabbit wind bit barn slipped husband recent tongue important zero' },
    { nombre: 'Medicine', disponible: true, precio: 38.1478, descripcion: 'mountain five art moving foot roll harder lucky pitch mile nails married finally spend adult left storm easy cry increase cook drew announced glad' },
    { nombre: 'How', disponible: true, precio: 47.5355, descripcion: 'heat student highway very word health them feel off cover trail cage went mission ice safety disease observe copy flat speech experiment now finest' },
    { nombre: 'Saved', disponible: true, precio: 75.9318, descripcion: 'weather mud friend brother breakfast corn prevent numeral deer quiet so name fastened tongue sing phrase concerned tree pass flies fighting chapter fence act' },
    { nombre: 'High', disponible: true, precio: 90.1331, descripcion: 'went split establish speak origin itself news when cross stand value vertical decide bicycle tone are market view depth income touch above nation spread' },
    { nombre: 'Colony', disponible: true, precio: 27.3687, descripcion: 'jungle weight whether printed west egg run cut rod football fewer trouble hearing him been note select our shelf afraid jump alike slip shore' },
    { nombre: 'Dozen', disponible: false, precio: 63.9702,  descripcion: 'tobacco spent congress who accept pond outline changing flow find cat mirror tax keep twenty yellow into pile reach move plan recall nervous gold' },
    { nombre: 'Bean', disponible: true, precio: 44.1797, descripcion: 'direct might am golden block seat birth television taught twenty clock process safety shirt guard control cent follow couple eleven weather location turn parent' },
    { nombre: 'Pain', disponible: true, precio: 74.0199, descripcion: 'start difficult two force source job process tomorrow machinery physical loose five fruit leaving century ourselves difference for frog throughout bridge atomic sunlight send' },
    { nombre: 'Clearly', disponible: true, precio: 8.6356, descripcion: 'well poem little but therefore instant tight outline foreign drove characteristic mine leader cold close club satellites quiet face tobacco age gas bend push' },
    { nombre: 'Immediately', disponible: true, precio: 41.4278, descripcion: 'feel shot fill square caught would valley path whispered come porch function pocket fish division think same sign was adventure worry bean wealth realize' },
    { nombre: 'Sent', disponible: false, precio: 95.3915, descripcion: 'shut cookies goes serious several change poet principle play congress begun mill composition unless piece negative expect ancient milk shall house period stranger eight' },
    { nombre: 'Globe', disponible: true, precio: 32.7184,  descripcion: 'saw clean golden brick shot brave percent damage eight chain young tears religious stems speak element example eager busy satellites pain fast operation person' },
    { nombre: 'Battle', disponible: true, precio: 53.4763, descripcion: 'his prevent sight camera ring generally glad refused among group nervous cave box rate breath somehow whether gate plant related citizen even yellow after' },
    { nombre: 'Elephant', disponible: true, precio: 42.5209, descripcion: 'ocean pink smell cent globe shot trouble guard troops swing sat hat back softly smaller direction seen jar strike union language off cookies serious' },
    { nombre: 'Special', disponible: true, precio: 85.0522, descripcion: 'slip front wrapped corner rose audience eat consider manufacturing swept seven yard sing purple industrial picture carbon social pole deal vowel slipped truck dozen' },
  ]



}