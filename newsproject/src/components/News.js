import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
      articles = [
        {
          source: { id: "abc-news", name: "ABC News" },
          author: "James Hill",
          title:
            "4 new batches of documents naming Jeffrey Epstein's associates released - ABC News",
          description: "The new release includes 132 documents.",
          url: "https://abcnews.go.com/US/2-new-batches-documents-naming-jeffrey-epsteins-associates/story?id=106140893",
          urlToImage:
            "https://i.abcnewsfe.com/a/62e523b1-5c89-4f82-80f7-06a7f8b18fd4/Jeffrey-Epstein-ap-gmh-240104_1704386953481_hpMain_16x9.jpg?w=992",
          publishedAt: "2024-01-06T03:50:16Z",
          content:
            "Four more tranches of court records pertaining to the late sex offender Jeffrey Epstein were unsealed Friday.\r\nA total of 132 documents were released Friday. About 19 documents were released Thursday… [+3810 chars]",
        },
        {
          source: { id: null, name: "YouTube" },
          author: null,
          title: "Michael Bolton Reveals Brain Tumor Diagnosis - E! News",
          description:
            "The Grammy-winning artist, who appeared on season nine of The Masked Singer, says he recently underwent surgery amid the medical setback. Michael Bolton tell...",
          url: "https://www.youtube.com/watch?v=7OrfytEd56U",
          urlToImage: "https://i.ytimg.com/vi/7OrfytEd56U/maxresdefault.jpg",
          publishedAt: "2024-01-06T02:43:26Z",
          content: null,
        },
        {
          source: { id: "cnn", name: "CNN" },
          author: "Sara Smart, Kaanita Iyer",
          title:
            "Ohio governor bans gender-transition surgeries for minors - CNN",
          description:
            "Ohio Republican Gov. Mike DeWine announced an executive order on Friday that bans gender-transition surgeries for minors.",
          url: "https://www.cnn.com/2024/01/05/politics/ohio-bans-gender-transition-surgeries-for-minors/index.html",
          urlToImage:
            "https://media.cnn.com/api/v1/images/stellar/prod/231229093031-mike-dewine-1221.jpg?c=16x9&q=w_800,c_fill",
          publishedAt: "2024-01-06T02:17:00Z",
          content:
            "Ohio Republican Gov. Mike DeWine announced an executive order on Friday that bans gender-transition surgeries for minors.\r\nThe ban, which takes effect immediately, comes one week after DeWine vetoed … [+2326 chars]",
        },
        {
          source: { id: "usa-today", name: "USA Today" },
          author: "Mike Snider",
          title:
            "COVID and flu cases rose over Christmas holiday and still rising - USA TODAY",
          description:
            "In the last full week of 2023, 38 states across the U.S. had high or very high activity of respiratory illnesses such as influenza, RSV and COVID-19.",
          url: "https://www.usatoday.com/story/news/health/2024/01/05/covid-flu-cases-increase-christmas/72125075007/",
          urlToImage:
            "https://www.usatoday.com/gcdn/presto/2022/09/28/USAT/2485fe5d-2629-4c3a-a79c-2b25e5280eae-GettyImages-1217583991.jpg?crop=2118,1192,x0,y108&width=2118&height=1192&format=pjpg&auto=webp",
          publishedAt: "2024-01-06T01:32:00Z",
          content:
            "Christmas brought the flu and other respiratory illnesses to many Americans, as more than half the states in the U.S. reported widespread sickness before the New Year.\r\nHoliday gatherings could resul… [+3913 chars]",
        },
        {
          source: { id: "associated-press", name: "Associated Press" },
          author: "HIRO KOMAE, AYAKA MCGILL, YURI KAGEYAMA",
          title:
            "Japan earthquakes: Survivors found in homes. Dozens still missing - The Associated Press",
          description:
            "A woman was pulled carefully from the rubble 72 hours after a 7.6 magnitude quake rattled Ishikawa Prefecture. Deaths climbed Friday to 94 people, and 222 people were missing after a series of powerful quakes rattled Japan’s western coast and triggered tsunam…",
          url: "https://apnews.com/article/earthquake-rescue-ishikawa-japan-disaster-missing-coastline-7063cef9950f59b9702a6fc8364ff363",
          urlToImage:
            "https://dims.apnews.com/dims4/default/46c0506/2147483647/strip/true/crop/5000x2813+0+264/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fe4%2F3f%2Fbd8b7d6c02f76d79ea8279b1ac0a%2Fa2e364101cf24622b3845bddb96125ec",
          publishedAt: "2024-01-06T01:30:57Z",
          content:
            "WAJIMA, Japan (AP) A woman was pulled carefully from the rubble 72 hours after a series of powerful quakes started rattling Japans western coast. Despite rescue efforts, the death toll Friday grew to… [+5222 chars]",
        },
        {
          source: { id: "bloomberg", name: "Bloomberg" },
          author: "Peter Martin, John Harney",
          title:
            "Defense Secretary Austin Hospitalized, Pentagon Says Days Later - Bloomberg",
          description:
            "US Defense Secretary Lloyd Austin was hospitalized because of “complications following a recent elective medical procedure,” the Pentagon said Friday evening — four days after he was admitted and without providing further detail.",
          url: "https://www.bloomberg.com/news/articles/2024-01-06/defense-secretary-lloyd-austin-hospitalized-over-complication",
          urlToImage:
            "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iHJFzbACb7B4/v1/1200x800.jpg",
          publishedAt: "2024-01-06T01:24:47Z",
          content:
            "US Defense Secretary Lloyd Austin was hospitalized because of complications following a recent elective medical procedure, the Pentagon said Friday evening four days after he was admitted and without… [+297 chars]",
        },
        {
          source: { id: "associated-press", name: "Associated Press" },
          author: "SCOTT McFETRIDGE, RYAN J. FOLEY, JOSH FUNK, NICK INGRAM",
          title:
            "Iowa principal critically injured in school shooting risked himself to protect students, police say - The Associated Press",
          description:
            "An Iowa principal critically injured in a school shooting put himself in harm's way as he tried to protect students from the teenage gunman. State authorities said Perry High School Principal Dan Marburger and other staffers and students were wounded in the T…",
          url: "https://apnews.com/article/perry-high-school-shooting-iowa-5346218f2646bec796ba28928a00c745",
          urlToImage:
            "https://dims.apnews.com/dims4/default/2d71d61/2147483647/strip/true/crop/8495x4778+0+443/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F61%2F74%2F54241629e7af2bfcac1a35b6fc53%2Fb74ed69479c74d8083d759164cc5ebf5",
          publishedAt: "2024-01-06T01:24:00Z",
          content:
            "PERRY, Iowa (AP) An Iowa principal critically injured in a school shooting put himself in harms way so students could try to escape from a teenage shooter who opened fire in a cafeteria as students w… [+8468 chars]",
        },
        {
          source: { id: "ars-technica", name: "Ars Technica" },
          author: "Stephen Clark",
          title:
            "Here's a first look at United Launch Alliance's new Vulcan rocket - Ars Technica",
          description:
            "ULA's first flight-ready Vulcan rocket is finally on the launch pad.",
          url: "https://arstechnica.com/space/2024/01/heres-a-first-look-at-united-launch-alliances-new-vulcan-rocket/",
          urlToImage:
            "https://cdn.arstechnica.net/wp-content/uploads/2024/01/vulcanroll3-760x380.jpg",
          publishedAt: "2024-01-06T01:17:59Z",
          content:
            "38\r\n<ul><li>\r\n United Launch Alliance's first Vulcan rocket prepares to emerge from the Vertical Integration Facility at Cape Canaveral Space Force Station in Florida. \r\n</li><li>\r\n ULA's fully stack… [+7957 chars]",
        },
        {
          source: { id: "axios", name: "Axios" },
          author: "Axios",
          title:
            "Navajo Nation fights sending human remains to the moon - Axios",
          description: null,
          url: "https://www.axios.com/2024/01/05/navajo-nation-human-remains-moon-sacred",
          urlToImage: null,
          publishedAt: "2024-01-06T01:11:08Z",
          content: null,
        },
        {
          source: { id: "bloomberg", name: "Bloomberg" },
          author: null,
          title:
            "Ackman Wants Plagiarism Checks on MIT Faculty After Wife Accused - Bloomberg",
          description: null,
          url: "https://www.bloomberg.com/news/articles/2024-01-05/ackman-wants-plagiarism-checks-on-mit-faculty-after-wife-accused",
          urlToImage: null,
          publishedAt: "2024-01-06T00:56:15Z",
          content:
            "To continue, please click the box below to let us know you're not a robot.",
        },
        {
          source: { id: "entertainment-weekly", name: "Entertainment Weekly" },
          author: "https://www.facebook.com/entertainmentweekly",
          title:
            "2024 Golden Globes winners predictions include major Oscars contenders - Entertainment Weekly News",
          description:
            "EW chats with 'Maestro' star Carey Mulligan and 'May December' actor Charles Melton and makes 2024 Golden Globes predictions in key categories ahead of the Oscars nominations.",
          url: "https://ew.com/2024-golden-globes-winners-predictions-8423090",
          urlToImage:
            "https://ew.com/thmb/X5EyydsfQKXeV86O9yQV5bmRCw4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/awardist-podcast-JAN8-766bd9105d654c579e5e359d7ad5d853.jpg",
          publishedAt: "2024-01-06T00:46:01Z",
          content:
            "As the twinkle of bulbous holiday ornaments fade away, the gilded glisten of the 2024 Golden Globes arrives, and EW has some bold predictions for winners in the major categories that could be handed … [+4098 chars]",
        },
        {
          source: { id: "politico", name: "Politico" },
          author: null,
          title:
            "Forget $250M. New York's AG now wants Trump to pay $370M for civil fraud. - POLITICO",
          description:
            "The increased request comes as both sides in the fraud trial prepare to make closing arguments next week.",
          url: "https://www.politico.com/news/2024/01/05/new-york-ag-trump-fraud-00134103",
          urlToImage:
            "https://static.politico.com/a0/55/ce4e75814a0e97e0af31e94420c1/https-delivery-gettyimages.com/downloads/1425941152",
          publishedAt: "2024-01-06T00:32:40Z",
          content:
            "James office said the updated request consisted of $168 million in saved interest on four commercial real estate loans, more than $139 million in profit from the sale of the Old Post Office building … [+1097 chars]",
        },
        {
          source: { id: null, name: "New York Post" },
          author: "Adriana Diaz",
          title:
            "Sudden infant death syndrome: Doctors uncover potential cause in breakthrough study - New York Post ",
          description:
            "SIDS, sometimes referred to as “crib death,” typically strikes infants younger than 6 months of age.",
          url: "https://nypost.com/2024/01/05/lifestyle/sudden-infant-death-syndrome-study-uncovers-potential-cause/",
          urlToImage:
            "https://nypost.com/wp-content/uploads/sites/2/2024/01/miami-beach-florida-veterans-day-74444902.jpg?quality=75&strip=all&w=1024",
          publishedAt: "2024-01-06T00:16:00Z",
          content:
            "After spending years studying the cause of sudden infant death syndrome, or SIDS, doctors believe they have identified a cause, according to a new study published in the journal Neurology. \r\nBrief se… [+3671 chars]",
        },
        {
          source: { id: "abc-news", name: "ABC News" },
          author: "The Associated Press",
          title:
            "US actor Christian Oliver and his 2 daughters died in a plane crash in the Caribbean, police say - ABC News",
          description:
            "Police in St. Vincent and the Grenadines say U.S. actor Christian Oliver and his two daughters died in a plane crash near a tiny private island in the eastern Caribbean",
          url: "https://abcnews.go.com/Entertainment/wireStory/us-actor-christian-oliver-2-daughters-died-plane-106139722",
          urlToImage:
            "https://i.abcnewsfe.com/a/c8f9ea71-262b-462f-85ee-ba8b0e14822a/wirestory_984fedf4cd3288dba6092a67b908a312_16x9.jpg?w=992",
          publishedAt: "2024-01-06T00:15:23Z",
          content:
            "SAN JUAN, Puerto Rico -- U.S. actor Christian Oliver and his two daughters died in a plane crash near a tiny private island in the eastern Caribbean, according to police in St. Vincent and the Grenad… [+979 chars]",
        },
        {
          source: { id: "bbc-news", name: "BBC News" },
          author: "https://www.facebook.com/bbcnews",
          title:
            "Aditya-L1: India's Sun mission set to reach destination in hours - BBC",
          description:
            "Aditya-L1 has been travelling towards the Sun for more than four months since launch on 2 September.",
          url: "https://www.bbc.co.uk/news/world-asia-india-67871797",
          urlToImage:
            "https://ichef.bbci.co.uk/news/1024/branded_news/16DF6/production/_130968639_f5aufzzboaasgxs.jpg",
          publishedAt: "2024-01-06T00:04:58Z",
          content:
            "India's first solar observation mission is set to reach its final destination in a few hours.\r\nOn Saturday, the space agency Isro will attempt to place Aditya-L1 in a spot in space from where it will… [+4258 chars]",
        },
        {
          source: { id: "cnn", name: "CNN" },
          author: "Michael Williams",
          title:
            "Biden makes impassioned argument Trump could destroy American democracy as he opens 2024 campaign - CNN",
          description:
            "The value Americans place on democracy is the “most urgent question of our time,” President Joe Biden said during a speech kicking off his 2024 campaign in Pennsylvania on the eve of the third anniversary of the January 6 attack on the US Capitol - where he l…",
          url: "https://www.cnn.com/2024/01/05/politics/biden-democracy-trump-2024-speech/index.html",
          urlToImage:
            "https://media.cnn.com/api/v1/images/stellar/prod/240105152606-01-joe-biden-pennsylvania-speech-0105-screengrab.jpg?c=16x9&q=w_800,c_fill",
          publishedAt: "2024-01-06T00:00:00Z",
          content:
            "The value Americans place on democracy is the most urgent question of our time, President Joe Biden said during a speech kicking off his 2024 campaign in Pennsylvania on the eve of the third annivers… [+5484 chars]",
        },
        {
          source: { id: null, name: "New York Post" },
          author: "Alyssa Guzman",
          title:
            "Upstate NY to see up to 12 inches of snow, Jersey and Conn. 6 inches as Midwest gears up for possible blizzard conditions - New York Post ",
          description:
            "The Capital Region better grab their shovels this weekend as eight to 12 inches of snow is about to pile high in the Albany area.",
          url: "https://nypost.com/2024/01/05/metro/upstate-ny-to-see-up-to-12-in-of-snow-jersey-ct-6-in-as-midwest-gears-up-for-possible-blizzard-conditions/",
          urlToImage:
            "https://nypost.com/wp-content/uploads/sites/2/2024/01/pedestrians-walk-snow-wind-times-74439037.jpg?quality=75&strip=all&w=1024",
          publishedAt: "2024-01-05T23:23:59Z",
          content:
            "Parts of New York are bracing for up to a foot of snow this weekend while New Jersey and Connecticut could see 6 inches.\r\nThe Capital Region is preparing to dig out with 5 to 8 inches of snow expecte… [+3555 chars]",
        },
        {
          source: { id: "espn", name: "ESPN" },
          author: "Mike Coppinger",
          title: "Ngannou, Joshua to square off in boxing match - ESPN",
          description:
            "Anthony Joshua, whose fight with Deontay Wilder fell through last month, has struck a deal to meet Francis Ngannou in a heavyweight boxing match in Saudi Arabia.",
          url: "https://www.espn.com/boxing/story/_/id/39249014/francis-ngannou-anthony-joshua-square-boxing-match",
          urlToImage:
            "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F1102%2Fr1247562_1296x729_16%2D9.jpg",
          publishedAt: "2024-01-05T23:19:00Z",
          content:
            "Anthony Joshua and Francis Ngannou have struck a deal for a heavyweight boxing match in Riyadh, Turki Alalshikh, chairman of Saudi Arabia's General Entertainment Authority, announced Friday on social… [+1968 chars]",
        },
        {
          source: { id: "ars-technica", name: "Ars Technica" },
          author: "Beth Mole",
          title:
            "Experimental antibiotic kills deadly superbug, opens whole new class of drugs - Ars Technica",
          description:
            "The relatively large molecule clogs a transport system, leading to lethal toxicity.",
          url: "https://arstechnica.com/science/2024/01/experimental-antibiotic-reveals-entirely-new-way-to-kill-drug-resistant-bacteria/",
          urlToImage:
            "https://cdn.arstechnica.net/wp-content/uploads/2024/01/10096-760x380.jpg",
          publishedAt: "2024-01-05T23:15:40Z",
          content:
            "Enlarge/ This Scanning Electron Microscope image depicts several clusters of aerobic Gram-negative, non-motile Acinetobacter baumannii bacteria under a magnification of 24,730x.\r\nMembers of the genus… [+4877 chars]",
        },
        {
          source: { id: null, name: "CNBC" },
          author: "Chelsey Cox",
          title:
            "Global shipping delays cast shadow over strong December jobs report - CNBC",
          description:
            "White House officials are keenly aware that global shipping holdups could trigger a domino effect within the U.S. supply chain.",
          url: "https://www.cnbc.com/2024/01/05/global-shipping-delays-cast-a-shadow-over-strong-december-jobs-report-.html",
          urlToImage:
            "https://image.cnbcfm.com/api/v1/image/107349383-1702994880245-gettyimages-1266961933-20170120_cargo_bellini-234.jpeg?v=1702995374&w=1920&h=1080",
          publishedAt: "2024-01-05T23:12:46Z",
          content:
            "WASHINGTON The strong December jobs report released Friday capped off a year of economic wins for the Biden administration. Now, global shipping delays caused by attacks on cargo vessels in the Red S… [+1912 chars]",
  }  ]

    
    constructor() {
      super();
      this.state ={
        articles : this.articles,
        loading : false
      }
  }
  render() {
    return (
      <>
        <div className="container my-3">
          <h3 className="mx-3 mt-4 text-black-50">
            NewsMonkey - Top headlines
          </h3>
          <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4 " key={element.url}>
              <NewsItem
                title={element.title.slice(0 , 38)}
                discripation={element.description}
                imgUrl={element.urlToImage}
                newsUrl ={element.url}/>
            </div>
          })}
          </div>
        </div>
      </>
    );
  }
}

export default News;
