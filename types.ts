export interface CosmicFile {
  url: string;
  imgix_url: string;
}

export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  type: string;
  created_at: string;
  modified_at: string;
  metadata: Record<string, unknown>;
}

export interface WeddingSettings extends CosmicObject {
  type: 'wedding-settings';
  metadata: {
    couple_names?: string;
    wedding_date?: string;
    location?: string;
    hero_image?: CosmicFile;
    enter_button_label?: string;
    primary_accent_color?: string;
    secondary_accent_color?: string;
    thank_you_message?: string;
  };
}

export interface StoryMoment extends CosmicObject {
  type: 'story-moments';
  metadata: {
    title?: string;
    date_label?: string;
    description?: string;
    photo?: CosmicFile;
    order?: number;
  };
}

export interface ScheduleEvent extends CosmicObject {
  type: 'schedule-events';
  metadata: {
    event_name?: string;
    time?: string;
    location_detail?: string;
    description?: string;
    order?: number;
  };
}

export interface VenueInfo extends CosmicObject {
  type: 'venue-info';
  metadata: {
    venue_name?: string;
    google_maps_embed_url?: string;
    hotel_information?: string;
    parking_information?: string;
  };
}

export interface DressCode extends CosmicObject {
  type: 'dress-code';
  metadata: {
    title?: string;
    description?: string;
    guidelines?: string;
  };
}

export interface HoneymoonFund extends CosmicObject {
  type: 'honeymoon-fund';
  metadata: {
    title?: string;
    message?: string;
    ath_movil_link?: string;
    zelle_link?: string;
    paypal_link?: string;
  };
}

export interface RsvpMemories extends CosmicObject {
  type: 'rsvp-memories';
  metadata: {
    rsvp_heading?: string;
    joy_website_link?: string;
    rsvp_button_label?: string;
    memories_heading?: string;
    qr_code_image?: CosmicFile;
    upload_photos_link?: string;
    upload_button_label?: string;
  };
}

export interface Faq extends CosmicObject {
  type: 'faq';
  metadata: {
    question?: string;
    answer?: string;
    order?: number;
  };
}