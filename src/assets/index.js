import * as CampaignIcons from './campaigns/icons_campaigns';
import * as CampaignImages from './campaigns/images_campaigns';
import * as CampaignPartners from './campaigns/partners_campaigns';
import * as CampaignPrizes from './campaigns/prizes_campaigns';
import * as BetTypesIcons from './bet_types';
import * as BetChoicesBg from './bet_choices';
export { default as next } from './next.png';
export { default as previous } from './previous.png';
export { default as google } from './google.png';
const campaigns_icons_map = { toss: CampaignIcons.toss };
const campaigns_images_map = { toss: CampaignImages.toss, wei: CampaignImages.wei };
const campaigns_partners_map = { csfinance: CampaignPartners.csfinance };
const campaigns_prizes_map = { airpods: CampaignPrizes.airpods, macbookpro: CampaignPrizes.macbookpro, jblcharge: CampaignPrizes.jblcharge };
export { campaigns_icons_map, campaigns_images_map, campaigns_partners_map, campaigns_prizes_map, CampaignIcons, CampaignImages };

const bet_types = { multiple: "Choix multiples", location: "Position sur une carte" }
const bet_types_icons = { multiple: BetTypesIcons.multiple, location: BetTypesIcons.location }
export { bet_types, bet_types_icons };
export { default as csfinance_logo } from './csfinance_logo.png';
export { default as airpods } from './airpods.png';
export { default as macbookpro } from './macbookpro.png';
export { default as jblcharge } from './jblcharge.png';

const choices_backgrounds_map = { plk: BetChoicesBg.plk, sch: BetChoicesBg.sch, johnny: BetChoicesBg.johnny, eminem: BetChoicesBg.eminem };
export { choices_backgrounds_map };

export { default as toss_logo } from './campaigns/icons_campaigns/toss.png';
export { default as toss_img } from './campaigns/images_campaigns/toss.png';
export { default as wei_img } from './campaigns/images_campaigns/wei.png';

export { default as plk } from './bet_choices/plk.png';
export { default as sch } from './bet_choices/sch.png';
export { default as johnny } from './bet_choices/johnny.png';
export { default as eminem } from './bet_choices/eminem.png';