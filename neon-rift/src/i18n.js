const DICT = {
  ru: {
    play: 'ИГРАТЬ', shop: 'Ангар', missions: 'Задания', settings: 'Настройки', records: 'Рекорды',
    best: 'Рекорд', score: 'Очки', distance: 'Дистанция', shards: 'Кристаллы', back: 'Назад',
    paused: 'ПАУЗА', resume: 'Продолжить', restart: 'Заново', menu: 'Меню',
    gameover: 'КРУШЕНИЕ', newBest: 'НОВЫЙ РЕКОРД!', revive: 'Воскреснуть', share: 'Поделиться',
    ships: 'Корабли', upgrades: 'Улучшения', select: 'Выбрать', selected: 'Выбран', buy: 'Купить',
    max: 'МАКС', level: 'Ур.', sec: 'с',
    up_shield: 'Щит', up_magnet: 'Магнит', up_boost: 'Форсаж', up_x2: 'Двойные очки',
    up_desc_shield: 'Поглощает один удар', up_desc_magnet: 'Притягивает кристаллы',
    up_desc_boost: 'Сверхскорость и неуязвимость', up_desc_x2: 'Удваивает очки',
    music: 'Музыка', sfx: 'Звуки', sensitivity: 'Чувствительность', quality: 'Графика',
    vibration: 'Вибрация', language: 'Язык', controls: 'Управление',
    q_low: 'Низкая', q_med: 'Средняя', q_high: 'Высокая',
    c_swipe: 'Свайп', c_tilt: 'Наклон', on: 'Вкл', off: 'Выкл',
    reset: 'Сбросить прогресс', resetConfirm: 'Точно стереть весь прогресс?',
    m_dist: 'Пролети {n} м за забег', m_shards: 'Собери {n} кристаллов за забег',
    m_near: 'Сделай {n} опасных пролётов за забег', m_jumps: 'Прыгни {n} раз за забег',
    m_powerups: 'Подбери {n} бонуса за забег', m_score: 'Набери {n} очков',
    m_combo: 'Достигни множителя x{n}', m_nojump: 'Пролети {n} м без прыжков',
    done: 'Готово!', claim: 'Забрать', missionDone: 'Задание выполнено!',
    daily: 'Ежедневная награда', day: 'День', take: 'Забрать',
    hintSteer: 'Веди пальцем влево‑вправо — вращайся по туннелю',
    hintSteerKeys: '← → или A / D — вращайся по туннелю',
    hintJump: 'Тапни, чтобы перепрыгнуть барьер',
    hintJumpKeys: 'ПРОБЕЛ — прыжок через барьер',
    hintGap: 'Найди проход в стене!',
    hintGo: 'Собирай кристаллы. Удачи, пилот!',
    near: 'НА ВОЛОСКЕ!', shieldBroken: 'ЩИТ РАЗБИТ',
    tapToStart: 'Касание — старт', runs: 'Забегов', totalDist: 'Всего пролетено',
    noRecords: 'Пока нет рекордов. Вперёд!', tagline: 'Туннель без конца. Реакция без права на ошибку.',
    shareText: 'Я пролетел {d} м и набрал {s} очков в NEON RIFT! Сможешь лучше?',
    notEnough: 'Не хватает кристаллов', bought: 'Куплено!', install: 'Установить',
    credits: 'Игра создана с помощью Claude',
    glFail: 'Не удалось запустить 3D-графику на этом устройстве. Обновите Chrome / Android System WebView и перезапустите игру.',
    glLost: 'Графика была сброшена системой. Нажмите здесь, чтобы перезапустить.',
    bestMark: 'РЕКОРД {d} м', meters: '{d} м!', beatBest: 'РЕКОРД ПОБИТ!',
  },
  en: {
    play: 'PLAY', shop: 'Hangar', missions: 'Missions', settings: 'Settings', records: 'Records',
    best: 'Best', score: 'Score', distance: 'Distance', shards: 'Shards', back: 'Back',
    paused: 'PAUSED', resume: 'Resume', restart: 'Restart', menu: 'Menu',
    gameover: 'CRASHED', newBest: 'NEW RECORD!', revive: 'Revive', share: 'Share',
    ships: 'Ships', upgrades: 'Upgrades', select: 'Select', selected: 'Selected', buy: 'Buy',
    max: 'MAX', level: 'Lv.', sec: 's',
    up_shield: 'Shield', up_magnet: 'Magnet', up_boost: 'Boost', up_x2: 'Double score',
    up_desc_shield: 'Absorbs one hit', up_desc_magnet: 'Pulls shards in',
    up_desc_boost: 'Hyper speed & invulnerability', up_desc_x2: 'Doubles points',
    music: 'Music', sfx: 'Sound', sensitivity: 'Sensitivity', quality: 'Graphics',
    vibration: 'Vibration', language: 'Language', controls: 'Controls',
    q_low: 'Low', q_med: 'Medium', q_high: 'High',
    c_swipe: 'Swipe', c_tilt: 'Tilt', on: 'On', off: 'Off',
    reset: 'Reset progress', resetConfirm: 'Really erase all progress?',
    m_dist: 'Fly {n} m in one run', m_shards: 'Collect {n} shards in one run',
    m_near: 'Make {n} near misses in one run', m_jumps: 'Jump {n} times in one run',
    m_powerups: 'Pick up {n} power-ups in one run', m_score: 'Score {n} points',
    m_combo: 'Reach a x{n} multiplier', m_nojump: 'Fly {n} m without jumping',
    done: 'Done!', claim: 'Claim', missionDone: 'Mission complete!',
    daily: 'Daily reward', day: 'Day', take: 'Claim',
    hintSteer: 'Drag left/right to rotate around the tunnel',
    hintSteerKeys: '← → or A / D to rotate around the tunnel',
    hintJump: 'Tap to jump over the barrier',
    hintJumpKeys: 'SPACE to jump over the barrier',
    hintGap: 'Find the gap in the wall!',
    hintGo: 'Collect shards. Good luck, pilot!',
    near: 'CLOSE CALL!', shieldBroken: 'SHIELD BROKEN',
    tapToStart: 'Tap to start', runs: 'Runs', totalDist: 'Total distance',
    noRecords: 'No records yet. Go!', tagline: 'An endless tunnel. Zero margin for error.',
    shareText: 'I flew {d} m and scored {s} in NEON RIFT! Can you beat me?',
    notEnough: 'Not enough shards', bought: 'Purchased!', install: 'Install',
    credits: 'Game made with Claude',
    glFail: 'Could not start 3D graphics on this device. Update Chrome / Android System WebView and restart.',
    glLost: 'Graphics were reset by the system. Tap here to restart.',
    bestMark: 'BEST {d} m', meters: '{d} m!', beatBest: 'RECORD BROKEN!',
  },
};

let lang = 'ru';
export function setLang(l) { lang = DICT[l] ? l : 'en'; }
export function getLang() { return lang; }
export function t(key, vars) {
  let s = (DICT[lang] && DICT[lang][key]) ?? DICT.en[key] ?? key;
  if (vars) for (const k in vars) s = s.replace('{' + k + '}', vars[k]);
  return s;
}
export function detectLang() {
  const n = (navigator.language || 'ru').toLowerCase();
  return n.startsWith('ru') || n.startsWith('uk') || n.startsWith('be') || n.startsWith('kk') ? 'ru' : 'en';
}
