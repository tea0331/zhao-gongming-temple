// ============================================
// 财神签诗数据库 - 60签
// 正一龙虎玄坛真君财神赵公明
// ============================================

const STICKS_DATA = [
    // ===== 上签 (1-20) =====
    {
        number: 1,
        level: 'upper',
        levelZh: '上上签',
        levelEn: 'Supreme Fortune',
        poem: [
            '金龙如意赐祥光',
            '玄坛真君降吉祥',
            '求财得财心欢喜',
            '百事亨通福满堂'
        ],
        interpretation: {
            zh: '此签大吉。金龙如意乃赵公明法器，象征财运通达、万事如意。求财者得财，问事者得顺，百般皆宜。',
            en: 'Supreme fortune. The Golden Dragon Ruyi is Zhao Gongming\'s divine instrument, symbolizing unimpeded wealth and fulfilled wishes. Success in all endeavors.'
        },
        advice: {
            zh: '宜积极进取，投资创业皆有利。贵人相助，可大胆行动。',
            en: 'Be proactive. Investment and entrepreneurship are favorable. Noble people will assist you — act boldly.'
        },
        categories: { wealth: '大吉', career: '大吉', love: '吉', health: '吉', study: '吉', travel: '吉' }
    },
    {
        number: 2,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '黑虎巡山百兽藏',
            '铁鞭一挥鬼神降',
            '经商贸易多顺遂',
            '横财入命喜洋洋'
        ],
        interpretation: {
            zh: '此签吉利。黑虎乃赵公明坐骑，铁鞭乃其法器，威震四方。经商者大利，有意想不到的财运降临。',
            en: 'Great fortune. The Black Tiger is Zhao Gongming\'s mount, and the Iron Whip is his weapon — commanding respect everywhere. Great profit in business, unexpected wealth arrives.'
        },
        advice: {
            zh: '把握商机，近期有意外之财。可适当冒险，收获丰厚。',
            en: 'Seize business opportunities. Unexpected wealth is coming. Calculated risks will bring rich rewards.'
        },
        categories: { wealth: '大吉', career: '吉', love: '平', health: '吉', study: '平', travel: '吉' }
    },
    {
        number: 3,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '聚宝盆中金满溢',
            '招财纳珍福星临',
            '守得云开见月明',
            '春来花开万事新'
        ],
        interpretation: {
            zh: '此签吉利。聚宝盆乃赵公明法宝，象征财源广进。前期虽有小阻，但终将云开月明，事业有成。',
            en: 'Great fortune. The Treasure Basin is Zhao Gongming\'s divine treasure, symbolizing abundant wealth flowing in. Minor obstacles will clear, and success will come.'
        },
        advice: {
            zh: '耐心等待，好运将至。守得云开便见月明，切勿急躁。',
            en: 'Be patient — good fortune is coming. After clouds part, the moon shines bright. Do not rush.'
        },
        categories: { wealth: '吉', career: '吉', love: '吉', health: '平', study: '吉', travel: '平' }
    },
    {
        number: 4,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '四季来财路路通',
            '东西南北任君行',
            '但行好事莫问程',
            '天道酬勤自然成'
        ],
        interpretation: {
            zh: '此签吉利。四方来财，行路皆通。但需行善积德，天道自会酬勤，不必忧虑前程。',
            en: 'Great fortune. Wealth comes from all directions, all paths are open. Do good deeds and heaven will reward your diligence.'
        },
        advice: {
            zh: '广结善缘，多行善事。财路自然通达，不必刻意追求。',
            en: 'Build good relationships and do good deeds. Wealth paths will open naturally.'
        },
        categories: { wealth: '吉', career: '吉', love: '吉', health: '吉', study: '平', travel: '大吉' }
    },
    {
        number: 5,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '紫气东来瑞满门',
            '贵人相助事皆成',
            '求名得名财得财',
            '一轮红日破云生'
        ],
        interpretation: {
            zh: '此签吉利。紫气东来为祥瑞之兆，有贵人相助。求名求财皆能如愿，如红日破云而出，前途光明。',
            en: 'Great fortune. Purple qi from the east is an auspicious omen. Noble helpers will assist you. Fame and wealth will both be achieved, like a red sun breaking through clouds.'
        },
        advice: {
            zh: '积极社交，贵人就在身边。主动出击，万事可成。',
            en: 'Network actively — noble helpers are nearby. Take initiative and all things are possible.'
        },
        categories: { wealth: '吉', career: '大吉', love: '吉', health: '吉', study: '吉', travel: '吉' }
    },
    {
        number: 6,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '龙虎交会风云起',
            '玄坛真君显灵威',
            '迷途知返终有路',
            '柳暗花明又一村'
        ],
        interpretation: {
            zh: '此签先难后易。龙虎交会乃大变动之象，虽经历迷茫，但终将峰回路转，柳暗花明。',
            en: 'Great fortune after difficulty. Dragon and Tiger meeting signifies great changes. Though confused now, a new path will appear.'
        },
        advice: {
            zh: '不要害怕困境，转机即将来临。坚持到底必见光明。',
            en: 'Don\'t fear difficulties — a turning point is coming. Persevere and you will see the light.'
        },
        categories: { wealth: '平→吉', career: '平→吉', love: '吉', health: '平', study: '吉', travel: '平' }
    },
    {
        number: 7,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '金元宝落玉盘中',
            '财运亨通事事通',
            '有志竟成天不负',
            '扬帆起航正东风'
        ],
        interpretation: {
            zh: '此签大吉。金元宝为财之象征，事事通达。有志者天不负，正是扬帆起航的大好时机。',
            en: 'Supreme fortune. The gold ingot symbolizes wealth, and everything goes smoothly. Heaven rewards the determined — it\'s time to set sail.'
        },
        advice: {
            zh: '这是行动的时机，大胆出击。投资、创业、跳槽皆有利。',
            en: 'This is the time to act. Investment, entrepreneurship, and career changes are all favorable.'
        },
        categories: { wealth: '大吉', career: '大吉', love: '平', health: '吉', study: '吉', travel: '吉' }
    },
    {
        number: 8,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '五路财神齐降临',
            '东西南北中皆金',
            '诚心祈求必有应',
            '家宅安宁福满门'
        ],
        interpretation: {
            zh: '此签吉利。五路财神即赵公明与部下招财、进宝、纳珍、利市，五路齐通，财运广进。',
            en: 'Great fortune. The Five Directions Wealth Gods — Zhao Gongming and his four subordinates — all bring wealth from every direction.'
        },
        advice: {
            zh: '财运全面利好，可多线投资。家宅平安，适合添置产业。',
            en: 'Wealth fortune is favorable from all directions. Good time for diversified investments and real estate.'
        },
        categories: { wealth: '大吉', career: '吉', love: '平', health: '吉', study: '平', travel: '吉' }
    },
    {
        number: 9,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '旱田得雨万物生',
            '枯木逢春再发枝',
            '久困之人终得解',
            '时来运转莫迟疑'
        ],
        interpretation: {
            zh: '此签转运之象。久旱逢甘霖，否极泰来。困境即将结束，好运即将开始。',
            en: 'Fortune turns favorable. Like rain after drought, spring on dead wood — your difficulties are ending and good fortune begins.'
        },
        advice: {
            zh: '时机已到，不要犹豫。抓住转机，大胆行动。',
            en: 'The time has come — do not hesitate. Seize the turning point and act boldly.'
        },
        categories: { wealth: '平→吉', career: '平→吉', love: '吉', health: '平→吉', study: '吉', travel: '吉' }
    },
    {
        number: 10,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '瑞雪兆丰年景好',
            '春耕夏耘秋收高',
            '一分耕耘一分获',
            '勤奋之人天不抛'
        ],
        interpretation: {
            zh: '此签吉利。瑞雪兆丰年，付出必有回报。勤奋者终获丰收，天道酬勤。',
            en: 'Great fortune. Timely snow promises a good harvest — your efforts will be rewarded. Heaven rewards diligence.'
        },
        advice: {
            zh: '脚踏实地，勤勉做事。回报虽不是立刻显现，但终将丰厚。',
            en: 'Work steadily and diligently. Rewards may not be immediate but will be substantial.'
        },
        categories: { wealth: '吉', career: '吉', love: '平', health: '吉', study: '大吉', travel: '平' }
    },
    {
        number: 11,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '月满则盈花正开',
            '良辰美景君须待',
            '贵人指路前途远',
            '一步一莲福自来'
        ],
        interpretation: {
            zh: '此签吉利。月圆花开乃盛景之象，有贵人指引方向。前途远大，步步有福。',
            en: 'Great fortune. Full moon and blooming flowers signify prosperity. Noble guidance will lead you far — blessings at every step.'
        },
        advice: {
            zh: '虚心请教长辈或前辈，他们的指点将为你指明方向。',
            en: 'Humbly seek advice from mentors or seniors — their guidance will illuminate your path.'
        },
        categories: { wealth: '吉', career: '大吉', love: '大吉', health: '吉', study: '吉', travel: '吉' }
    },
    {
        number: 12,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '三阳开泰运初兴',
            '百事顺遂万象新',
            '若问前程何处去',
            '东南方向有佳音'
        ],
        interpretation: {
            zh: '此签吉利。三阳开泰为吉运初兴之象，百事顺遂。东南方向尤佳，可能有喜讯传来。',
            en: 'Great fortune. Three Yang brings new prosperity — everything goes smoothly. The southeast direction is especially favorable.'
        },
        advice: {
            zh: '朝东南方向发展有利。新项目、新合作皆可推进。',
            en: 'Southeast direction is favorable. New projects and partnerships can proceed.'
        },
        categories: { wealth: '吉', career: '吉', love: '吉', health: '吉', study: '吉', travel: '大吉' }
    },
    {
        number: 13,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '宝船满载顺风归',
            '商人得利笑颜开',
            '合伙经营多顺利',
            '同心协力创未来'
        ],
        interpretation: {
            zh: '此签吉利。宝船满载象征收获丰厚，合伙经营尤为顺利。团队协作可创大业。',
            en: 'Great fortune. The treasure ship returns full — merchants prosper. Partnerships are especially favorable. Teamwork creates great achievements.'
        },
        advice: {
            zh: '适合合伙经营，选择可靠伙伴可共创佳绩。',
            en: 'Partnerships are favorable. Choose reliable partners to create great results together.'
        },
        categories: { wealth: '大吉', career: '吉', love: '吉', health: '平', study: '平', travel: '吉' }
    },
    {
        number: 14,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '文星高照笔生花',
            '考运亨通榜上名',
            '十年寒窗终有报',
            '金榜题名天下知'
        ],
        interpretation: {
            zh: '此签大利考试学业。文星高照，才思泉涌。苦读终有回报，金榜题名可期。',
            en: 'Great fortune for studies and exams. The literary star shines bright — hard study will be rewarded with success.'
        },
        advice: {
            zh: '专注学业，考试运极佳。适合考证、升学、竞赛。',
            en: 'Focus on studies — exam fortune is excellent. Good for certifications, admissions, and competitions.'
        },
        categories: { wealth: '平', career: '吉', love: '平', health: '平', study: '大吉', travel: '平' }
    },
    {
        number: 15,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '红鸾星动喜临门',
            '有缘千里来相会',
            '月老牵线天作合',
            '百年好合永同心'
        ],
        interpretation: {
            zh: '此签大利姻缘。红鸾星动，姻缘将至。有缘之人终会相遇，天作之合可期。',
            en: 'Great fortune for love. The Red Star moves — romance is coming. Destined ones will meet; a heavenly match is possible.'
        },
        advice: {
            zh: '积极社交，姻缘就在身边。已有对象者适合谈婚论嫁。',
            en: 'Socialize actively — romance is nearby. Those in relationships should consider marriage.'
        },
        categories: { wealth: '平', career: '平', love: '大吉', health: '吉', study: '平', travel: '吉' }
    },
    {
        number: 16,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '神将护佑灾祸消',
            '身康体健乐逍遥',
            '药王赐福百病散',
            '延年益寿福星高'
        ],
        interpretation: {
            zh: '此签吉利。神将护佑，疾病消散。身体康健，延年益寿之象。',
            en: 'Great fortune. Divine protection disperses illness. Good health and longevity are foretold.'
        },
        advice: {
            zh: '注意养生保健，疾病将痊愈。保持乐观心态有利于康复。',
            en: 'Focus on health and wellness — illness will heal. A positive mindset aids recovery.'
        },
        categories: { wealth: '平', career: '平', love: '平', health: '大吉', study: '平', travel: '吉' }
    },
    {
        number: 17,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '山不在高有仙则名',
            '水不在深有龙则灵',
            '小本经营可发迹',
            '莫嫌起点不如人'
        ],
        interpretation: {
            zh: '此签吉利。勿以善小而不为，小本经营也可发大财。起点低不代表终点低。',
            en: 'Great fortune. Don\'t underestimate small beginnings. Small investments can yield great returns. Low start doesn\'t mean low finish.'
        },
        advice: {
            zh: '从点滴做起，积少成多。不轻视小生意，厚积薄发。',
            en: 'Start small and accumulate. Don\'t dismiss small opportunities — steady growth leads to success.'
        },
        categories: { wealth: '吉', career: '吉', love: '平', health: '平', study: '平', travel: '平' }
    },
    {
        number: 18,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '千里之行足下始',
            '万事开头虽觉难',
            '坚持到底终如愿',
            '守得云开见晴天'
        ],
        interpretation: {
            zh: '此签先难后易。万事开头难，但只要坚持到底，终能如愿以偿。',
            en: 'Great fortune after persistence. All beginnings are hard, but perseverance leads to fulfillment.'
        },
        advice: {
            zh: '不要因起步困难而放弃。坚持下去，成功就在前方。',
            en: 'Don\'t give up because of early difficulties. Persevere — success is ahead.'
        },
        categories: { wealth: '平→吉', career: '吉', love: '吉', health: '平', study: '吉', travel: '平' }
    },
    {
        number: 19,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '鸿雁传书好消息',
            '远方来财喜临门',
            '海外有缘添异彩',
            '跨洋过海利无边'
        ],
        interpretation: {
            zh: '此签吉利。鸿雁传书象征远方有佳音。海外求财或跨境业务尤佳，跨洋发展利无边。',
            en: 'Great fortune. The wild goose brings good news from afar. Overseas ventures and cross-border business are especially favorable.'
        },
        advice: {
            zh: '适合拓展海外市场或跨境业务。远方的机会值得把握。',
            en: 'Good for expanding overseas or cross-border business. Distant opportunities are worth pursuing.'
        },
        categories: { wealth: '大吉', career: '吉', love: '吉', health: '平', study: '平', travel: '大吉' }
    },
    {
        number: 20,
        level: 'upper',
        levelZh: '上签',
        levelEn: 'Great Fortune',
        poem: [
            '天降甘霖润万物',
            '众生皆得福泽被',
            '行善积德天知道',
            '善有善报不须疑'
        ],
        interpretation: {
            zh: '此签吉利。天降甘霖普施恩泽，行善者终有善报。积德行善之人必得天佑。',
            en: 'Great fortune. Heavenly rain nourishes all — those who do good will receive good in return. Virtue is always rewarded.'
        },
        advice: {
            zh: '继续行善积德，福报自来。可做公益或助人为乐。',
            en: 'Continue doing good — blessings will follow naturally. Consider charity or helping others.'
        },
        categories: { wealth: '吉', career: '吉', love: '吉', health: '吉', study: '吉', travel: '吉' }
    },
    // ===== 中签 (21-40) =====
    {
        number: 21,
        level: 'middle',
        levelZh: '中签',
        levelEn: 'Moderate Fortune',
        poem: [
            '风平浪静船行缓',
            '不急不徐自安然',
            '守成待时莫冒进',
            '稳中求进是良方'
        ],
        interpretation: {
            zh: '此签平稳。目前运势平缓，不宜冒进。稳扎稳打，守成待时即可。',
            en: 'Moderate fortune. Current fortune is steady — avoid rash actions. Steady progress is the best approach.'
        },
        advice: {
            zh: '保持现状，不要冒险。稳中求进，等待更好时机。',
            en: 'Maintain the status quo. Seek progress steadily and wait for better opportunities.'
        },
        categories: { wealth: '平', career: '平', love: '平', health: '吉', study: '平', travel: '平' }
    },
    {
        number: 22,
        level: 'middle',
        levelZh: '中签',
        levelEn: 'Moderate Fortune',
        poem: [
            '半信半疑事难成',
            '犹豫不决失良辰',
            '当断不断反受乱',
            '果敢行事路方通'
        ],
        interpretation: {
            zh: '此签警示犹豫之害。半信半疑则事难成，当断不断反受其乱。需果敢行事。',
            en: 'Moderate fortune with a warning. Hesitation leads to failure. When you cannot decide, indecision creates chaos. Be decisive.'
        },
        advice: {
            zh: '放下犹豫，果断行动。做决定比不做决定好。',
            en: 'Let go of hesitation and act decisively. Making a decision is better than no decision.'
        },
        categories: { wealth: '平', career: '平', love: '平', health: '平', study: '平', travel: '平' }
    },
    {
        number: 23,
        level: 'middle',
        levelZh: '中签',
        levelEn: 'Moderate Fortune',
        poem: [
            '独木难支大厦倾',
            '孤掌难鸣需借力',
            '结交贵人助前行',
            '单打独斗终受限'
        ],
        interpretation: {
            zh: '此签提示需借力。独木难支，孤掌难鸣。需结交贵人，团队合作方能成事。',
            en: 'Moderate fortune. You need support. A single beam cannot hold a building. Seek allies and collaborate for success.'
        },
        advice: {
            zh: '主动寻求合作，不要孤军奋战。人脉就是财脉。',
            en: 'Actively seek partnerships. Don\'t fight alone — your network is your net worth.'
        },
        categories: { wealth: '平', career: '平', love: '吉', health: '平', study: '平', travel: '平' }
    },
    {
        number: 24,
        level: 'middle',
        levelZh: '中签',
        levelEn: 'Moderate Fortune',
        poem: [
            '小人有口莫轻信',
            '花言巧语需当心',
            '耳听为虚眼见实',
            '明辨是非保自身'
        ],
        interpretation: {
            zh: '此签提醒防小人。有人花言巧语，不可轻信。需明辨是非，以眼见为实。',
            en: 'Moderate fortune with caution. Beware of smooth talkers and flatterers. Verify with your own eyes and discern truth from falsehood.'
        },
        advice: {
            zh: '对甜言蜜语保持警惕。签订合同需仔细审核，防被骗。',
            en: 'Stay alert to sweet words. Review contracts carefully to avoid deception.'
        },
        categories: { wealth: '平', career: '平', love: '凶', health: '平', study: '平', travel: '凶' }
    },
    {
        number: 25,
        level: 'middle',
        levelZh: '中签',
        levelEn: 'Moderate Fortune',
        poem: [
            '守株待兔空等待',
            '主动出击方有成',
            '天助自助之人',
            '坐等不如起来行'
        ],
        interpretation: {
            zh: '此签提醒不可消极。守株待兔只会空等，天助自助者，需主动出击。',
            en: 'Moderate fortune. Waiting idly brings nothing. Heaven helps those who help themselves — take action.'
        },
        advice: {
            zh: '停止等待，主动行动。机会是创造出来的，不是等来的。',
            en: 'Stop waiting and take action. Opportunities are created, not waited for.'
        },
        categories: { wealth: '平', career: '平', love: '平', health: '平', study: '平', travel: '平' }
    },
    {
        number: 26,
        level: 'middle',
        levelZh: '中签',
        levelEn: 'Moderate Fortune',
        poem: [
            '花开堪折直须折',
            '莫待无花空折枝',
            '良机稍纵即逝去',
            '及时把握莫迟疑'
        ],
        interpretation: {
            zh: '此签提醒把握时机。良机稍纵即逝，需及时把握，犹豫则失之交臂。',
            en: 'Moderate fortune. Opportunities are fleeting — seize them while you can. Hesitation means missing out.'
        },
        advice: {
            zh: '看到机会就抓住，不要等到错过了才后悔。',
            en: 'Grab opportunities when you see them. Don\'t wait until it\'s too late.'
        },
        categories: { wealth: '吉', career: '吉', love: '吉', health: '平', study: '吉', travel: '平' }
    },
    {
        number: 27,
        level: 'middle',
        levelZh: '中签',
        levelEn: 'Moderate Fortune',
        poem: [
            '道路崎岖多坎坷',
            '步步为营慎前行',
            '磨刀不误砍柴工',
            '准备充分事方成'
        ],
        interpretation: {
            zh: '此签提醒需充分准备。道路虽坎坷，但只要准备充分，步步为营，终能到达。',
            en: 'Moderate fortune. The path is rough but manageable with thorough preparation. Step carefully and you\'ll reach your goal.'
        },
        advice: {
            zh: '做好充分准备再行动。磨刀不误砍柴工，急躁反误事。',
            en: 'Prepare thoroughly before acting. Sharpening the axe doesn\'t delay the cutting — rushing creates mistakes.'
        },
        categories: { wealth: '平', career: '平', love: '平', health: '平', study: '吉', travel: '凶' }
    },
    {
        number: 28,
        level: 'middle',
        levelZh: '中签',
        levelEn: 'Moderate Fortune',
        poem: [
            '两路分叉需抉择',
            '左思右想难取舍',
            '凭心而论随本意',
            '心之所向即正途'
        ],
        interpretation: {
            zh: '此签面临选择。两难之中需做出抉择，跟随内心直觉，心之所向即为正途。',
            en: 'Moderate fortune. You face a crossroads. Follow your heart — your inner direction is the right path.'
        },
        advice: {
            zh: '听从内心声音，不必过分纠结。选择后坚定走下去。',
            en: 'Listen to your inner voice. Once you choose, walk the path with conviction.'
        },
        categories: { wealth: '平', career: '平', love: '平', health: '平', study: '平', travel: '平' }
    },
    {
        number: 29,
        level: 'middle',
        levelZh: '中签',
        levelEn: 'Moderate Fortune',
        poem: [
            '酒色财气四堵墙',
            '人人都在墙中藏',
            '若能跳出墙外去',
            '不是神仙也寿长'
        ],
        interpretation: {
            zh: '此签提醒节制。酒色财气需适度，过度则伤身损德。节制欲望方能长久。',
            en: 'Moderate fortune. Moderation in all things — excess in pleasure, wealth, or anger leads to harm. Restraint brings longevity.'
        },
        advice: {
            zh: '节制欲望，不要过度消费或沉迷。保持清醒头脑。',
            en: 'Moderate your desires. Avoid excessive spending or indulgence. Keep a clear head.'
        },
        categories: { wealth: '凶', career: '平', love: '凶', health: '平', study: '平', travel: '平' }
    },
    {
        number: 30,
        level: 'middle',
        levelZh: '中签',
        levelEn: 'Moderate Fortune',
        poem: [
            '水到渠成自然得',
            '强求之事反成空',
            '顺其自然心自在',
            '随缘而行路更通'
        ],
        interpretation: {
            zh: '此签劝顺其自然。强求不如随缘，水到自然渠成。心态放平，反而收获更多。',
            en: 'Moderate fortune. Let things flow naturally — forced efforts lead to emptiness. A peaceful mind attracts more.'
        },
        advice: {
            zh: '放下执念，顺其自然。越想得到的，越要放手。',
            en: 'Release attachment and let things flow. Sometimes letting go brings more than holding tight.'
        },
        categories: { wealth: '平', career: '平', love: '吉', health: '吉', study: '平', travel: '吉' }
    },
    {
        number: 31, level: 'middle', levelZh: '中签', levelEn: 'Moderate Fortune',
        poem: ['以和为贵家和兴', '和气生财是明训', '争争吵吵损财运', '和和睦睦福临门'],
        interpretation: { zh: '此签劝和。和气生财，争执损运。保持和睦关系，财运自然而来。', en: 'Moderate fortune. Harmony brings wealth; disputes drain it. Maintain good relationships.' },
        advice: { zh: '避免争执，以和为贵。人际关系和谐，财运自然好转。', en: 'Avoid disputes. Harmonious relationships naturally improve your fortune.' },
        categories: { wealth: '平', career: '平', love: '吉', health: '吉', study: '平', travel: '平' }
    },
    {
        number: 32, level: 'middle', levelZh: '中签', levelEn: 'Moderate Fortune',
        poem: ['明枪易躲暗箭防', '表面和善暗藏伤', '交友需识真与假', '真心假意要分清'],
        interpretation: { zh: '此签提醒防暗算。明枪易躲暗箭难防，需警惕表里不一之人。', en: 'Moderate fortune. Beware of hidden attacks. Not everyone who smiles at you is a friend.' },
        advice: { zh: '谨慎交友，对过于热情的陌生人保持警惕。', en: 'Be cautious in friendships. Stay alert to overly friendly strangers.' },
        categories: { wealth: '凶', career: '平', love: '凶', health: '平', study: '平', travel: '凶' }
    },
    {
        number: 33, level: 'middle', levelZh: '中签', levelEn: 'Moderate Fortune',
        poem: ['棋逢对手将遇才', '势均力敌难分裁', '胜败乃兵家常事', '不必太看重输赢'],
        interpretation: { zh: '此签竞争激烈。对手实力相当，胜负难料。不必太在意一时得失。', en: 'Moderate fortune. Competition is fierce with equally matched opponents. Don\'t fixate on temporary wins or losses.' },
        advice: { zh: '专注提升自己，不过度关注对手。长远看，实力才是关键。', en: 'Focus on self-improvement rather than competitors. Long-term, ability is what matters.' },
        categories: { wealth: '平', career: '平', love: '平', health: '平', study: '平', travel: '平' }
    },
    {
        number: 34, level: 'middle', levelZh: '中签', levelEn: 'Moderate Fortune',
        poem: ['退一步海阔天空', '让三分心平气和', '固执己见路越窄', '变通处事道更宽'],
        interpretation: { zh: '此签劝变通。退一步天地宽，固执己见反而路窄。学会变通方能通达。', en: 'Moderate fortune. Step back and the view expands. Stubbornness narrows your path; flexibility broadens it.' },
        advice: { zh: '学会妥协和变通，不要一条路走到黑。', en: 'Learn to compromise and adapt. Don\'t stubbornly follow one path.' },
        categories: { wealth: '平', career: '平', love: '吉', health: '平', study: '平', travel: '平' }
    },
    {
        number: 35, level: 'middle', levelZh: '中签', levelEn: 'Moderate Fortune',
        poem: ['旧事已去莫回头', '前路漫漫需放手', '沉溺旧日徒伤悲', '展望新程有盼头'],
        interpretation: { zh: '此签劝放下过去。旧事已去不可追，沉溺过去只会徒增悲伤。放下包袱，前路可期。', en: 'Moderate fortune. The past is gone — don\'t look back. Dwelling on yesterday only brings sorrow. Look forward.' },
        advice: { zh: '放下过去，重新出发。新的机会正在前方等待。', en: 'Let go of the past and start fresh. New opportunities await ahead.' },
        categories: { wealth: '平', career: '平', love: '平', health: '平', study: '平', travel: '平' }
    },
    {
        number: 36, level: 'middle', levelZh: '中签', levelEn: 'Moderate Fortune',
        poem: ['日出而作日落息', '勤劳本分是根基', '一夜暴富非常道', '踏实积累方长久'],
        interpretation: { zh: '此签劝踏实。勤劳本分是立身之本，一夜暴富非常态。踏实积累方能长久。', en: 'Moderate fortune. Diligence is the foundation. Overnight wealth is rare. Steady accumulation lasts.' },
        advice: { zh: '脚踏实地，不要幻想一夜暴富。稳扎稳打是正道。', en: 'Stay grounded and don\'t dream of overnight riches. Steady progress is the true path.' },
        categories: { wealth: '平', career: '平', love: '平', health: '吉', study: '吉', travel: '平' }
    },
    {
        number: 37, level: 'middle', levelZh: '中签', levelEn: 'Moderate Fortune',
        poem: ['树挪死人挪活', '此处不留有他处', '换个方向或思路', '柳暗花明又一路'],
        interpretation: { zh: '此签劝换思路。此路不通另寻出路，换个方向可能有新的发现。', en: 'Moderate fortune. When one door closes, another opens. Change direction and you may find a new path.' },
        advice: { zh: '如果当前方向受阻，不妨换个角度思考。灵活变通是关键。', en: 'If the current direction is blocked, try a different angle. Flexibility is key.' },
        categories: { wealth: '平', career: '平', love: '平', health: '平', study: '平', travel: '吉' }
    },
    {
        number: 38, level: 'middle', levelZh: '中签', levelEn: 'Moderate Fortune',
        poem: ['见好就收是智慧', '贪心不足蛇吞象', '得寸进尺终失利', '知足常乐福绵长'],
        interpretation: { zh: '此签劝知足。见好就收是智慧，贪心不足终将失利。知足常乐方能长久。', en: 'Moderate fortune. Knowing when to stop is wisdom. Greed leads to loss. Contentment brings lasting happiness.' },
        advice: { zh: '已获利益及时收手，不要贪心。知足者常乐。', en: 'Lock in your gains and don\'t be greedy. Contentment is lasting wealth.' },
        categories: { wealth: '平', career: '平', love: '平', health: '吉', study: '平', travel: '平' }
    },
    {
        number: 39, level: 'middle', levelZh: '中签', levelEn: 'Moderate Fortune',
        poem: ['风雨之后见彩虹', '磨难历练出真金', '逆境不是终点站', '转机就在前面等'],
        interpretation: { zh: '此签劝坚持。风雨之后必见彩虹，逆境只是暂时的。磨难历练人，转机就在前方。', en: 'Moderate fortune. After rain comes the rainbow. Adversity is temporary. Trials forge strength — a turning point is ahead.' },
        advice: { zh: '不要被眼前的困难打倒，坚持就是胜利。', en: 'Don\'t be defeated by current difficulties. Persistence is victory.' },
        categories: { wealth: '平→吉', career: '平', love: '平', health: '平', study: '平', travel: '平' }
    },
    {
        number: 40, level: 'middle', levelZh: '中签', levelEn: 'Moderate Fortune',
        poem: ['船到桥头自然直', '事到临头必有路', '忧心忡忡徒费力', '淡定从容迎转机'],
        interpretation: { zh: '此签劝淡定。船到桥头自然直，过度忧虑无益。保持淡定，转机自会出现。', en: 'Moderate fortune. Things work out in the end. Excessive worry is useless. Stay calm and opportunities will appear.' },
        advice: { zh: '放下焦虑，事情自有解决之道。心态平和反而更容易看清方向。', en: 'Release anxiety — solutions will present themselves. A calm mind sees clearly.' },
        categories: { wealth: '平', career: '平', love: '平', health: '吉', study: '平', travel: '平' }
    },
    // ===== 下签 (41-60) =====
    {
        number: 41,
        level: 'lower',
        levelZh: '下签',
        levelEn: 'Challenging Fortune',
        poem: [
            '乌云遮日暂无光',
            '运势低迷莫逞强',
            '韬光养晦待时变',
            '守得云开见月明'
        ],
        interpretation: {
            zh: '此签运势低迷。乌云遮日，暂无光明。此时不宜冒进，应韬光养晦，等待时机转变。',
            en: 'Challenging fortune. Dark clouds obscure the sun. This is not the time for bold moves — lie low and wait for change.'
        },
        advice: {
            zh: '保守行事，不要冒险。积蓄力量，等待运势好转。',
            en: 'Act conservatively and avoid risks. Gather strength and wait for fortune to turn.'
        },
        categories: { wealth: '凶', career: '凶', love: '平', health: '平', study: '平', travel: '凶' }
    },
    {
        number: 42,
        level: 'lower',
        levelZh: '下签',
        levelEn: 'Challenging Fortune',
        poem: [
            '财来财去一场空',
            '入不敷出需节省',
            '切忌借贷度日艰',
            '量入为出保安宁'
        ],
        interpretation: {
            zh: '此签财运不佳。入不敷出，需量入为出。切忌借贷度日，否则越陷越深。',
            en: 'Challenging fortune. Expenses exceed income — you must budget carefully. Avoid borrowing or you\'ll sink deeper.'
        },
        advice: {
            zh: '紧缩开支，量入为出。不要借贷，减少不必要的消费。',
            en: 'Cut expenses and live within your means. No borrowing; reduce unnecessary spending.'
        },
        categories: { wealth: '大凶', career: '凶', love: '平', health: '平', study: '平', travel: '凶' }
    },
    {
        number: 43,
        level: 'lower',
        levelZh: '下签',
        levelEn: 'Challenging Fortune',
        poem: [
            '口舌是非惹祸端',
            '多言多败少言安',
            '沉默是金切记取',
            '祸从口出须防患'
        ],
        interpretation: {
            zh: '此签警示口舌之灾。多言多败，沉默是金。祸从口出，需谨言慎行。',
            en: 'Challenging fortune. Much talking brings trouble — silence is golden. Guard your words carefully.'
        },
        advice: {
            zh: '少说多做，不要议论他人是非。谨言慎行为上策。',
            en: 'Speak less, do more. Don\'t gossip. Discretion is the best policy.'
        },
        categories: { wealth: '凶', career: '凶', love: '凶', health: '平', study: '平', travel: '平' }
    },
    {
        number: 44,
        level: 'lower',
        levelZh: '下签',
        levelEn: 'Challenging Fortune',
        poem: [
            '合伙经营需谨慎',
            '利益分配易生嫌',
            '亲兄弟明算账',
            '含糊不清终翻脸'
        ],
        interpretation: {
            zh: '此签警示合伙风险。利益分配易生嫌隙，即使是亲兄弟也要明算账，否则终将翻脸。',
            en: 'Challenging fortune. Partnerships over profit easily sour. Even brothers need clear accounts — ambiguity leads to conflict.'
        },
        advice: {
            zh: '合伙前签好协议，利益分配写清楚。亲兄弟明算账。',
            en: 'Sign clear agreements before partnering. Spell out profit sharing explicitly.'
        },
        categories: { wealth: '凶', career: '凶', love: '平', health: '平', study: '平', travel: '平' }
    },
    {
        number: 45,
        level: 'lower',
        levelZh: '下签',
        levelEn: 'Challenging Fortune',
        poem: [
            '病从口入祸从天',
            '身体欠佳需调养',
            '莫要逞强忽视症',
            '及时就医保平安'
        ],
        interpretation: {
            zh: '此签健康警示。身体不适不可忽视，及时就医。逞强拖延只会加重病情。',
            en: 'Challenging fortune for health. Don\'t ignore physical symptoms — see a doctor promptly. Delaying worsens conditions.'
        },
        advice: {
            zh: '身体不适及时就医，不要拖延。注意饮食和休息。',
            en: 'Seek medical attention promptly. Pay attention to diet and rest.'
        },
        categories: { wealth: '平', career: '平', love: '平', health: '大凶', study: '平', travel: '凶' }
    },
    {
        number: 46,
        level: 'lower',
        levelZh: '下签',
        levelEn: 'Challenging Fortune',
        poem: [
            '逆水行舟不进退',
            '阻力重重难前行',
            '此非良时需忍耐',
            '退一步保全身退'
        ],
        interpretation: {
            zh: '此签运势受阻。逆水行舟阻力重重，此时不宜强求。忍耐退让保全自身为上。',
            en: 'Challenging fortune. Sailing upstream against strong current. This is not the time to force things — retreat to preserve yourself.'
        },
        advice: {
            zh: '暂时退让，不要硬碰硬。保存实力，等待运势逆转。',
            en: 'Temporarily retreat. Don\'t fight against the current. Conserve strength for better times.'
        },
        categories: { wealth: '凶', career: '凶', love: '平', health: '平', study: '凶', travel: '凶' }
    },
    {
        number: 47,
        level: 'lower',
        levelZh: '下签',
        levelEn: 'Challenging Fortune',
        poem: [
            '感情纠葛乱如麻',
            '三角关系最难堪',
            '当断不断反受乱',
            '快刀斩麻方为上'
        ],
        interpretation: {
            zh: '此签感情警示。感情纠葛复杂，当断不断反受其乱。需果断处理感情问题。',
            en: 'Challenging fortune for love. Emotional entanglements are complicated. Hesitation makes it worse — cut it clean.'
        },
        advice: {
            zh: '果断处理不健康的感情关系。拖泥带水只会更痛苦。',
            en: 'Decisively handle unhealthy relationships. Dragging it out only increases pain.'
        },
        categories: { wealth: '平', career: '平', love: '大凶', health: '平', study: '平', travel: '平' }
    },
    {
        number: 48,
        level: 'lower',
        levelZh: '下签',
        levelEn: 'Challenging Fortune',
        poem: [
            '赌博之心不可有',
            '侥幸心理终害己',
            '十赌九输千古训',
            '勤劳致富是正道'
        ],
        interpretation: {
            zh: '此签严禁赌博投机。侥幸心理终将害己，十赌九输是千古教训。勤劳致富才是正道。',
            en: 'Challenging fortune. Gambling and speculation will harm you. The house always wins — honest work is the true path to wealth.'
        },
        advice: {
            zh: '远离赌博和投机，靠勤劳和智慧赚钱。',
            en: 'Stay away from gambling and speculation. Build wealth through diligence and wisdom.'
        },
        categories: { wealth: '大凶', career: '凶', love: '平', health: '平', study: '平', travel: '凶' }
    },
    {
        number: 49,
        level: 'lower',
        levelZh: '下签',
        levelEn: 'Challenging Fortune',
        poem: [
            '急功近利终失利',
            '欲速不达古人云',
            '心急吃不了热豆腐',
            '耐心等待方为上'
        ],
        interpretation: {
            zh: '此签警示急躁。急功近利终将失利，欲速则不达。需放慢节奏，耐心行事。',
            en: 'Challenging fortune. Rushing leads to failure. Haste makes waste. Slow down and be patient.'
        },
        advice: {
            zh: '放慢脚步，不要急于求成。耐心是成功的关键。',
            en: 'Slow down. Don\'t rush for quick results. Patience is the key to success.'
        },
        categories: { wealth: '凶', career: '凶', love: '平', health: '平', study: '平', travel: '平' }
    },
    {
        number: 50,
        level: 'lower',
        levelZh: '下签',
        levelEn: 'Challenging Fortune',
        poem: [
            '小人作祟暗中伤',
            '背后冷箭需提防',
            '言行举止需谨慎',
            '明哲保身度难关'
        ],
        interpretation: {
            zh: '此签有小人暗算。有人背后使坏，需提高警惕。言行谨慎，明哲保身。',
            en: 'Challenging fortune. Hidden enemies scheme against you. Be vigilant in words and deeds. Protect yourself wisely.'
        },
        advice: {
            zh: '近期低调行事，不要张扬。注意保护个人隐私和商业机密。',
            en: 'Keep a low profile. Protect your privacy and business secrets carefully.'
        },
        categories: { wealth: '凶', career: '凶', love: '凶', health: '平', study: '平', travel: '凶' }
    },
    {
        number: 51, level: 'lower', levelZh: '下签', levelEn: 'Challenging Fortune',
        poem: ['屋漏偏逢连夜雨', '祸不单行事事难', '咬紧牙关挺过去', '否极泰来终有时'],
        interpretation: { zh: '此签运势极差。祸不单行，困难接踵而来。但否极泰来，坚持就是胜利。', en: 'Challenging fortune. Troubles come in pairs. But when things hit bottom, they can only go up. Persevere.' },
        advice: { zh: '咬牙坚持，最黑暗的时刻也是最接近黎明的时刻。', en: 'Hold on tight. The darkest hour is just before dawn.' },
        categories: { wealth: '大凶', career: '凶', love: '凶', health: '凶', study: '凶', travel: '大凶' }
    },
    {
        number: 52, level: 'lower', levelZh: '下签', levelEn: 'Challenging Fortune',
        poem: ['投资失误需止损', '一意孤行更亏损', '亡羊补牢犹未晚', '及时收手保本金'],
        interpretation: { zh: '此签投资警示。投资已出现亏损，需果断止损。亡羊补牢犹未晚，及时收手保住本金。', en: 'Challenging fortune. Cut your losses on bad investments. It\'s not too late to protect your capital.' },
        advice: { zh: '果断止损，不要追加投资。保住本金是最重要的。', en: 'Cut losses decisively. Don\'t throw good money after bad. Preserve capital.' },
        categories: { wealth: '大凶', career: '凶', love: '平', health: '平', study: '平', travel: '平' }
    },
    {
        number: 53, level: 'lower', levelZh: '下签', levelEn: 'Challenging Fortune',
        poem: ['表里不一需警惕', '表面风光暗藏虚', '透过现象看本质', '华而不实终败露'],
        interpretation: { zh: '此签提醒看透本质。表面风光可能暗藏危机，不要被华丽外表迷惑。', en: 'Challenging fortune. Things may not be as they appear. Don\'t be deceived by glamorous surfaces.' },
        advice: { zh: '深入调查再做决定，不要被表面现象迷惑。', en: 'Investigate deeply before deciding. Don\'t be fooled by appearances.' },
        categories: { wealth: '凶', career: '凶', love: '凶', health: '平', study: '平', travel: '凶' }
    },
    {
        number: 54, level: 'lower', levelZh: '下签', levelEn: 'Challenging Fortune',
        poem: ['劳而无功徒费力', '方向不对努力废', '南辕北辙越走远', '及时调整寻正途'],
        interpretation: { zh: '此签方向有误。努力但方向不对，越努力越偏离。需及时调整方向。', en: 'Challenging fortune. Effort in the wrong direction is wasted. The harder you try, the further you stray. Change direction.' },
        advice: { zh: '停下来审视方向是否正确。方向比努力更重要。', en: 'Stop and check if you\'re heading the right way. Direction matters more than effort.' },
        categories: { wealth: '凶', career: '凶', love: '平', health: '平', study: '凶', travel: '凶' }
    },
    {
        number: 55, level: 'lower', levelZh: '下签', levelEn: 'Challenging Fortune',
        poem: ['桃花虽美多带刺', '异性缘旺需警惕', '烂桃花缠身损运', '洁身自好保安宁'],
        interpretation: { zh: '此签烂桃花警示。异性缘旺但多为烂桃花，缠身则损运。需洁身自好。', en: 'Challenging fortune. Romantic attention may be tempting but harmful. Guard your virtue.' },
        advice: { zh: '对不靠谱的感情保持距离。专注正缘，远离烂桃花。', en: 'Keep distance from unreliable romances. Focus on genuine connections.' },
        categories: { wealth: '平', career: '平', love: '大凶', health: '平', study: '平', travel: '平' }
    },
    {
        number: 56, level: 'lower', levelZh: '下签', levelEn: 'Challenging Fortune',
        poem: ['高处不胜寒', '身居高位需谨慎', '树大招风引来妒', '低调谦逊保平安'],
        interpretation: { zh: '此签警示高处之险。身居高位引来嫉妒，需低调谦逊保平安。', en: 'Challenging fortune. High positions attract envy. Stay humble and low-key for safety.' },
        advice: { zh: '不要炫耀成就，低调做人。高处不胜寒，谦逊为上。', en: 'Don\'t flaunt achievements. Stay humble. Discretion is safety.' },
        categories: { wealth: '平', career: '凶', love: '平', health: '平', study: '平', travel: '平' }
    },
    {
        number: 57, level: 'lower', levelZh: '下签', levelEn: 'Challenging Fortune',
        poem: ['文书合同有陷阱', '签字画押需细心', '逐字逐句看清楚', '一字之差悔终身'],
        interpretation: { zh: '此签合同警示。文书合同中可能有陷阱，签字前需逐字核对。', en: 'Challenging fortune. Contracts may contain traps. Read every word before signing.' },
        advice: { zh: '重要文件请律师审核，不要急于签字。细节决定成败。', en: 'Have a lawyer review important documents. Don\'t rush to sign. Details matter.' },
        categories: { wealth: '凶', career: '凶', love: '平', health: '平', study: '平', travel: '平' }
    },
    {
        number: 58, level: 'lower', levelZh: '下签', levelEn: 'Challenging Fortune',
        poem: ['出行不利需暂缓', '舟车劳顿多风险', '待在家中保平安', '择日再行更稳妥'],
        interpretation: { zh: '此签出行不利。出行多风险，建议暂缓。择日再行更稳妥。', en: 'Challenging fortune for travel. Travel carries risks — postpone if possible. Choose a better day.' },
        advice: { zh: '近期不宜远行。如必须出行，注意安全和保险。', en: 'Avoid long trips recently. If you must travel, ensure safety and insurance.' },
        categories: { wealth: '平', career: '平', love: '平', health: '凶', study: '平', travel: '大凶' }
    },
    {
        number: 59, level: 'lower', levelZh: '下签', levelEn: 'Challenging Fortune',
        poem: ['旧账未清又添新', '债务缠身心不安', '开源节流双管下', '早日还清得自由'],
        interpretation: { zh: '此签债务警示。旧债未清又添新债，需开源节流，早日还清方得自由。', en: 'Challenging fortune. Old debts pile up with new ones. Increase income and reduce expenses to gain freedom.' },
        advice: { zh: '制定还款计划，不再新增债务。开源节流双管齐下。', en: 'Create a repayment plan and take on no new debt. Both increase income and reduce spending.' },
        categories: { wealth: '大凶', career: '凶', love: '平', health: '平', study: '平', travel: '凶' }
    },
    {
        number: 60, level: 'lower', levelZh: '下签', levelEn: 'Challenging Fortune',
        poem: ['抱薪救火火增烟', '急中出错乱上乱', '冷静思考寻出路', '以静制动待转机'],
        interpretation: { zh: '此签警示慌乱之害。抱薪救火越救越乱，需冷静思考，以静制动等待转机。', en: 'Challenging fortune. Fighting fire with fire only makes it worse. Stay calm and wait for the turning point.' },
        advice: { zh: '遇到困难先冷静，不要病急乱投医。深呼吸，理性分析。', en: 'Stay calm in difficulties. Don\'t panic-solve. Breathe deeply and analyze rationally.' },
        categories: { wealth: '凶', career: '凶', love: '凶', health: '平', study: '凶', travel: '凶' }
    }
];

// Export for use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = STICKS_DATA;
}
