type DiversityChildren = "1f3fb" | "1f3fc" | "1f3fd" | "1f3fe" | "1f3ff";

export interface BaseEmoji {
    readonly name: string;
    readonly names: readonly string[];
    readonly surrogates: string;
}

export type EmojiWithDiversity = BaseEmoji & {
    readonly hasDiversity: boolean;
    readonly diversityChildren: Record<DiversityChildren, BaseEmoji>;
}

export type Emoji = BaseEmoji | EmojiWithDiversity;

export default {
    "people": {
        "grinning": {
            "name": "grinning",
            "names": [
                "grinning",
                "grinning_face"
            ],
            "surrogates": "😀"
        },
        "smiley": {
            "name": "smiley",
            "names": [
                "smiley"
            ],
            "surrogates": "😃"
        },
        "smile": {
            "name": "smile",
            "names": [
                "smile"
            ],
            "surrogates": "😄"
        },
        "grin": {
            "name": "grin",
            "names": [
                "grin"
            ],
            "surrogates": "😁"
        },
        "laughing": {
            "name": "laughing",
            "names": [
                "laughing",
                "satisfied"
            ],
            "surrogates": "😆"
        },
        "face_holding_back_tears": {
            "name": "face_holding_back_tears",
            "names": [
                "face_holding_back_tears"
            ],
            "surrogates": "🥹"
        },
        "sweat_smile": {
            "name": "sweat_smile",
            "names": [
                "sweat_smile"
            ],
            "surrogates": "😅"
        },
        "joy": {
            "name": "joy",
            "names": [
                "joy"
            ],
            "surrogates": "😂"
        },
        "rofl": {
            "name": "rofl",
            "names": [
                "rofl",
                "rolling_on_the_floor_laughing"
            ],
            "surrogates": "🤣"
        },
        "smiling_face_with_tear": {
            "name": "smiling_face_with_tear",
            "names": [
                "smiling_face_with_tear"
            ],
            "surrogates": "🥲"
        },
        "relaxed": {
            "name": "relaxed",
            "names": [
                "relaxed",
                "smiling_face"
            ],
            "surrogates": "☺️"
        },
        "blush": {
            "name": "blush",
            "names": [
                "blush"
            ],
            "surrogates": "😊"
        },
        "innocent": {
            "name": "innocent",
            "names": [
                "innocent"
            ],
            "surrogates": "😇"
        },
        "slight_smile": {
            "name": "slight_smile",
            "names": [
                "slight_smile",
                "slightly_smiling_face"
            ],
            "surrogates": "🙂"
        },
        "upside_down": {
            "name": "upside_down",
            "names": [
                "upside_down",
                "upside_down_face"
            ],
            "surrogates": "🙃"
        },
        "wink": {
            "name": "wink",
            "names": [
                "wink",
                "winking_face"
            ],
            "surrogates": "😉"
        },
        "relieved": {
            "name": "relieved",
            "names": [
                "relieved",
                "relieved_face"
            ],
            "surrogates": "😌"
        },
        "heart_eyes": {
            "name": "heart_eyes",
            "names": [
                "heart_eyes"
            ],
            "surrogates": "😍"
        },
        "smiling_face_with_3_hearts": {
            "name": "smiling_face_with_3_hearts",
            "names": [
                "smiling_face_with_3_hearts"
            ],
            "surrogates": "🥰"
        },
        "kissing_heart": {
            "name": "kissing_heart",
            "names": [
                "kissing_heart"
            ],
            "surrogates": "😘"
        },
        "kissing": {
            "name": "kissing",
            "names": [
                "kissing",
                "kissing_face"
            ],
            "surrogates": "😗"
        },
        "kissing_smiling_eyes": {
            "name": "kissing_smiling_eyes",
            "names": [
                "kissing_smiling_eyes"
            ],
            "surrogates": "😙"
        },
        "kissing_closed_eyes": {
            "name": "kissing_closed_eyes",
            "names": [
                "kissing_closed_eyes"
            ],
            "surrogates": "😚"
        },
        "yum": {
            "name": "yum",
            "names": [
                "yum"
            ],
            "surrogates": "😋"
        },
        "stuck_out_tongue": {
            "name": "stuck_out_tongue",
            "names": [
                "stuck_out_tongue"
            ],
            "surrogates": "😛"
        },
        "stuck_out_tongue_closed_eyes": {
            "name": "stuck_out_tongue_closed_eyes",
            "names": [
                "stuck_out_tongue_closed_eyes"
            ],
            "surrogates": "😝"
        },
        "stuck_out_tongue_winking_eye": {
            "name": "stuck_out_tongue_winking_eye",
            "names": [
                "stuck_out_tongue_winking_eye"
            ],
            "surrogates": "😜"
        },
        "zany_face": {
            "name": "zany_face",
            "names": [
                "zany_face"
            ],
            "surrogates": "🤪"
        },
        "face_with_raised_eyebrow": {
            "name": "face_with_raised_eyebrow",
            "names": [
                "face_with_raised_eyebrow"
            ],
            "surrogates": "🤨"
        },
        "face_with_monocle": {
            "name": "face_with_monocle",
            "names": [
                "face_with_monocle"
            ],
            "surrogates": "🧐"
        },
        "nerd": {
            "name": "nerd",
            "names": [
                "nerd",
                "nerd_face"
            ],
            "surrogates": "🤓"
        },
        "sunglasses": {
            "name": "sunglasses",
            "names": [
                "sunglasses"
            ],
            "surrogates": "😎"
        },
        "disguised_face": {
            "name": "disguised_face",
            "names": [
                "disguised_face"
            ],
            "surrogates": "🥸"
        },
        "star_struck": {
            "name": "star_struck",
            "names": [
                "star_struck"
            ],
            "surrogates": "🤩"
        },
        "partying_face": {
            "name": "partying_face",
            "names": [
                "partying_face"
            ],
            "surrogates": "🥳"
        },
        "smirk": {
            "name": "smirk",
            "names": [
                "smirk",
                "smirking_face"
            ],
            "surrogates": "😏"
        },
        "unamused": {
            "name": "unamused",
            "names": [
                "unamused",
                "unamused_face"
            ],
            "surrogates": "😒"
        },
        "disappointed": {
            "name": "disappointed",
            "names": [
                "disappointed"
            ],
            "surrogates": "😞"
        },
        "pensive": {
            "name": "pensive",
            "names": [
                "pensive",
                "pensive_face"
            ],
            "surrogates": "😔"
        },
        "worried": {
            "name": "worried",
            "names": [
                "worried",
                "worried_face"
            ],
            "surrogates": "😟"
        },
        "confused": {
            "name": "confused",
            "names": [
                "confused",
                "confused_face"
            ],
            "surrogates": "😕"
        },
        "slight_frown": {
            "name": "slight_frown",
            "names": [
                "slight_frown",
                "slightly_frowning_face"
            ],
            "surrogates": "🙁"
        },
        "frowning2": {
            "name": "frowning2",
            "names": [
                "frowning2",
                "white_frowning_face",
                "frowning_face"
            ],
            "surrogates": "☹️"
        },
        "persevere": {
            "name": "persevere",
            "names": [
                "persevere"
            ],
            "surrogates": "😣"
        },
        "confounded": {
            "name": "confounded",
            "names": [
                "confounded"
            ],
            "surrogates": "😖"
        },
        "tired_face": {
            "name": "tired_face",
            "names": [
                "tired_face"
            ],
            "surrogates": "😫"
        },
        "weary": {
            "name": "weary",
            "names": [
                "weary",
                "weary_face"
            ],
            "surrogates": "😩"
        },
        "pleading_face": {
            "name": "pleading_face",
            "names": [
                "pleading_face"
            ],
            "surrogates": "🥺"
        },
        "cry": {
            "name": "cry",
            "names": [
                "cry",
                "crying_face"
            ],
            "surrogates": "😢"
        },
        "sob": {
            "name": "sob",
            "names": [
                "sob"
            ],
            "surrogates": "😭"
        },
        "triumph": {
            "name": "triumph",
            "names": [
                "triumph"
            ],
            "surrogates": "😤"
        },
        "angry": {
            "name": "angry",
            "names": [
                "angry",
                "angry_face"
            ],
            "surrogates": "😠"
        },
        "rage": {
            "name": "rage",
            "names": [
                "rage",
                "pouting_face"
            ],
            "surrogates": "😡"
        },
        "face_with_symbols_over_mouth": {
            "name": "face_with_symbols_over_mouth",
            "names": [
                "face_with_symbols_over_mouth"
            ],
            "surrogates": "🤬"
        },
        "exploding_head": {
            "name": "exploding_head",
            "names": [
                "exploding_head"
            ],
            "surrogates": "🤯"
        },
        "flushed": {
            "name": "flushed",
            "names": [
                "flushed",
                "flushed_face"
            ],
            "surrogates": "😳"
        },
        "hot_face": {
            "name": "hot_face",
            "names": [
                "hot_face"
            ],
            "surrogates": "🥵"
        },
        "cold_face": {
            "name": "cold_face",
            "names": [
                "cold_face"
            ],
            "surrogates": "🥶"
        },
        "face_in_clouds": {
            "name": "face_in_clouds",
            "names": [
                "face_in_clouds"
            ],
            "surrogates": "😶‍🌫️"
        },
        "scream": {
            "name": "scream",
            "names": [
                "scream"
            ],
            "surrogates": "😱"
        },
        "fearful": {
            "name": "fearful",
            "names": [
                "fearful",
                "fearful_face"
            ],
            "surrogates": "😨"
        },
        "cold_sweat": {
            "name": "cold_sweat",
            "names": [
                "cold_sweat"
            ],
            "surrogates": "😰"
        },
        "disappointed_relieved": {
            "name": "disappointed_relieved",
            "names": [
                "disappointed_relieved"
            ],
            "surrogates": "😥"
        },
        "sweat": {
            "name": "sweat",
            "names": [
                "sweat"
            ],
            "surrogates": "😓"
        },
        "hugging": {
            "name": "hugging",
            "names": [
                "hugging",
                "hugging_face"
            ],
            "surrogates": "🤗"
        },
        "thinking": {
            "name": "thinking",
            "names": [
                "thinking",
                "thinking_face"
            ],
            "surrogates": "🤔"
        },
        "face_with_peeking_eye": {
            "name": "face_with_peeking_eye",
            "names": [
                "face_with_peeking_eye"
            ],
            "surrogates": "🫣"
        },
        "face_with_hand_over_mouth": {
            "name": "face_with_hand_over_mouth",
            "names": [
                "face_with_hand_over_mouth"
            ],
            "surrogates": "🤭"
        },
        "face_with_open_eyes_and_hand_over_mouth": {
            "name": "face_with_open_eyes_and_hand_over_mouth",
            "names": [
                "face_with_open_eyes_and_hand_over_mouth"
            ],
            "surrogates": "🫢"
        },
        "saluting_face": {
            "name": "saluting_face",
            "names": [
                "saluting_face"
            ],
            "surrogates": "🫡"
        },
        "shushing_face": {
            "name": "shushing_face",
            "names": [
                "shushing_face"
            ],
            "surrogates": "🤫"
        },
        "melting_face": {
            "name": "melting_face",
            "names": [
                "melting_face"
            ],
            "surrogates": "🫠"
        },
        "lying_face": {
            "name": "lying_face",
            "names": [
                "lying_face",
                "liar"
            ],
            "surrogates": "🤥"
        },
        "no_mouth": {
            "name": "no_mouth",
            "names": [
                "no_mouth"
            ],
            "surrogates": "😶"
        },
        "dotted_line_face": {
            "name": "dotted_line_face",
            "names": [
                "dotted_line_face"
            ],
            "surrogates": "🫥"
        },
        "neutral_face": {
            "name": "neutral_face",
            "names": [
                "neutral_face"
            ],
            "surrogates": "😐"
        },
        "face_with_diagonal_mouth": {
            "name": "face_with_diagonal_mouth",
            "names": [
                "face_with_diagonal_mouth"
            ],
            "surrogates": "🫤"
        },
        "expressionless": {
            "name": "expressionless",
            "names": [
                "expressionless"
            ],
            "surrogates": "😑"
        },
        "shaking_face": {
            "name": "shaking_face",
            "names": [
                "shaking_face"
            ],
            "surrogates": "🫨"
        },
        "head_shaking_horizontally": {
            "name": "head_shaking_horizontally",
            "names": [
                "head_shaking_horizontally"
            ],
            "surrogates": "🙂‍↔️"
        },
        "head_shaking_vertically": {
            "name": "head_shaking_vertically",
            "names": [
                "head_shaking_vertically"
            ],
            "surrogates": "🙂‍↕️"
        },
        "grimacing": {
            "name": "grimacing",
            "names": [
                "grimacing"
            ],
            "surrogates": "😬"
        },
        "rolling_eyes": {
            "name": "rolling_eyes",
            "names": [
                "rolling_eyes",
                "face_with_rolling_eyes"
            ],
            "surrogates": "🙄"
        },
        "hushed": {
            "name": "hushed",
            "names": [
                "hushed",
                "hushed_face"
            ],
            "surrogates": "😯"
        },
        "frowning": {
            "name": "frowning",
            "names": [
                "frowning"
            ],
            "surrogates": "😦"
        },
        "anguished": {
            "name": "anguished",
            "names": [
                "anguished"
            ],
            "surrogates": "😧"
        },
        "open_mouth": {
            "name": "open_mouth",
            "names": [
                "open_mouth"
            ],
            "surrogates": "😮"
        },
        "astonished": {
            "name": "astonished",
            "names": [
                "astonished"
            ],
            "surrogates": "😲"
        },
        "yawning_face": {
            "name": "yawning_face",
            "names": [
                "yawning_face"
            ],
            "surrogates": "🥱"
        },
        "sleeping": {
            "name": "sleeping",
            "names": [
                "sleeping",
                "sleeping_face"
            ],
            "surrogates": "😴"
        },
        "drooling_face": {
            "name": "drooling_face",
            "names": [
                "drooling_face",
                "drool"
            ],
            "surrogates": "🤤"
        },
        "sleepy": {
            "name": "sleepy",
            "names": [
                "sleepy",
                "sleepy_face"
            ],
            "surrogates": "😪"
        },
        "face_exhaling": {
            "name": "face_exhaling",
            "names": [
                "face_exhaling"
            ],
            "surrogates": "😮‍💨"
        },
        "dizzy_face": {
            "name": "dizzy_face",
            "names": [
                "dizzy_face"
            ],
            "surrogates": "😵"
        },
        "face_with_spiral_eyes": {
            "name": "face_with_spiral_eyes",
            "names": [
                "face_with_spiral_eyes"
            ],
            "surrogates": "😵‍💫"
        },
        "zipper_mouth": {
            "name": "zipper_mouth",
            "names": [
                "zipper_mouth",
                "zipper_mouth_face"
            ],
            "surrogates": "🤐"
        },
        "woozy_face": {
            "name": "woozy_face",
            "names": [
                "woozy_face"
            ],
            "surrogates": "🥴"
        },
        "nauseated_face": {
            "name": "nauseated_face",
            "names": [
                "nauseated_face",
                "sick"
            ],
            "surrogates": "🤢"
        },
        "face_vomiting": {
            "name": "face_vomiting",
            "names": [
                "face_vomiting"
            ],
            "surrogates": "🤮"
        },
        "sneezing_face": {
            "name": "sneezing_face",
            "names": [
                "sneezing_face",
                "sneeze"
            ],
            "surrogates": "🤧"
        },
        "mask": {
            "name": "mask",
            "names": [
                "mask"
            ],
            "surrogates": "😷"
        },
        "thermometer_face": {
            "name": "thermometer_face",
            "names": [
                "thermometer_face",
                "face_with_thermometer"
            ],
            "surrogates": "🤒"
        },
        "head_bandage": {
            "name": "head_bandage",
            "names": [
                "head_bandage",
                "face_with_head_bandage"
            ],
            "surrogates": "🤕"
        },
        "money_mouth": {
            "name": "money_mouth",
            "names": [
                "money_mouth",
                "money_mouth_face"
            ],
            "surrogates": "🤑"
        },
        "cowboy": {
            "name": "cowboy",
            "names": [
                "cowboy",
                "face_with_cowboy_hat"
            ],
            "surrogates": "🤠"
        },
        "smiling_imp": {
            "name": "smiling_imp",
            "names": [
                "smiling_imp"
            ],
            "surrogates": "😈"
        },
        "imp": {
            "name": "imp",
            "names": [
                "imp"
            ],
            "surrogates": "👿"
        },
        "japanese_ogre": {
            "name": "japanese_ogre",
            "names": [
                "japanese_ogre",
                "ogre"
            ],
            "surrogates": "👹"
        },
        "japanese_goblin": {
            "name": "japanese_goblin",
            "names": [
                "japanese_goblin",
                "goblin"
            ],
            "surrogates": "👺"
        },
        "clown": {
            "name": "clown",
            "names": [
                "clown",
                "clown_face"
            ],
            "surrogates": "🤡"
        },
        "poop": {
            "name": "poop",
            "names": [
                "poop",
                "shit",
                "hankey",
                "poo",
                "pile_of_poo"
            ],
            "surrogates": "💩"
        },
        "ghost": {
            "name": "ghost",
            "names": [
                "ghost"
            ],
            "surrogates": "👻"
        },
        "skull": {
            "name": "skull",
            "names": [
                "skull",
                "skeleton"
            ],
            "surrogates": "💀"
        },
        "skull_crossbones": {
            "name": "skull_crossbones",
            "names": [
                "skull_crossbones",
                "skull_and_crossbones"
            ],
            "surrogates": "☠️"
        },
        "alien": {
            "name": "alien",
            "names": [
                "alien"
            ],
            "surrogates": "👽"
        },
        "space_invader": {
            "name": "space_invader",
            "names": [
                "space_invader",
                "alien_monster"
            ],
            "surrogates": "👾"
        },
        "robot": {
            "name": "robot",
            "names": [
                "robot",
                "robot_face"
            ],
            "surrogates": "🤖"
        },
        "jack_o_lantern": {
            "name": "jack_o_lantern",
            "names": [
                "jack_o_lantern"
            ],
            "surrogates": "🎃"
        },
        "smiley_cat": {
            "name": "smiley_cat",
            "names": [
                "smiley_cat",
                "grinning_cat"
            ],
            "surrogates": "😺"
        },
        "smile_cat": {
            "name": "smile_cat",
            "names": [
                "smile_cat"
            ],
            "surrogates": "😸"
        },
        "joy_cat": {
            "name": "joy_cat",
            "names": [
                "joy_cat"
            ],
            "surrogates": "😹"
        },
        "heart_eyes_cat": {
            "name": "heart_eyes_cat",
            "names": [
                "heart_eyes_cat"
            ],
            "surrogates": "😻"
        },
        "smirk_cat": {
            "name": "smirk_cat",
            "names": [
                "smirk_cat"
            ],
            "surrogates": "😼"
        },
        "kissing_cat": {
            "name": "kissing_cat",
            "names": [
                "kissing_cat"
            ],
            "surrogates": "😽"
        },
        "scream_cat": {
            "name": "scream_cat",
            "names": [
                "scream_cat",
                "weary_cat"
            ],
            "surrogates": "🙀"
        },
        "crying_cat_face": {
            "name": "crying_cat_face",
            "names": [
                "crying_cat_face",
                "crying_cat"
            ],
            "surrogates": "😿"
        },
        "pouting_cat": {
            "name": "pouting_cat",
            "names": [
                "pouting_cat"
            ],
            "surrogates": "😾"
        },
        "handshake": {
            "name": "handshake",
            "names": [
                "handshake",
                "shaking_hands"
            ],
            "surrogates": "🤝"
        },
        "heart_hands": {
            "name": "heart_hands",
            "names": [
                "heart_hands"
            ],
            "surrogates": "🫶",
            "diversityChildren": {
                "1f3fb": {
                    "name": "heart_hands_tone1",
                    "names": [
                        "heart_hands_tone1",
                        "heart_hands_light_skin_tone"
                    ],
                    "surrogates": "🫶🏻"
                },
                "1f3fc": {
                    "name": "heart_hands_tone2",
                    "names": [
                        "heart_hands_tone2",
                        "heart_hands_medium_light_skin_tone"
                    ],
                    "surrogates": "🫶🏼"
                },
                "1f3fd": {
                    "name": "heart_hands_tone3",
                    "names": [
                        "heart_hands_tone3",
                        "heart_hands_medium_skin_tone"
                    ],
                    "surrogates": "🫶🏽"
                },
                "1f3fe": {
                    "name": "heart_hands_tone4",
                    "names": [
                        "heart_hands_tone4",
                        "heart_hands_medium_dark_skin_tone"
                    ],
                    "surrogates": "🫶🏾"
                },
                "1f3ff": {
                    "name": "heart_hands_tone5",
                    "names": [
                        "heart_hands_tone5",
                        "heart_hands_dark_skin_tone"
                    ],
                    "surrogates": "🫶🏿"
                }
            }
        },
        "palms_up_together": {
            "name": "palms_up_together",
            "names": [
                "palms_up_together"
            ],
            "surrogates": "🤲",
            "diversityChildren": {
                "1f3fb": {
                    "name": "palms_up_together_tone1",
                    "names": [
                        "palms_up_together_tone1",
                        "palms_up_together_light_skin_tone"
                    ],
                    "surrogates": "🤲🏻"
                },
                "1f3fc": {
                    "name": "palms_up_together_tone2",
                    "names": [
                        "palms_up_together_tone2",
                        "palms_up_together_medium_light_skin_tone"
                    ],
                    "surrogates": "🤲🏼"
                },
                "1f3fd": {
                    "name": "palms_up_together_tone3",
                    "names": [
                        "palms_up_together_tone3",
                        "palms_up_together_medium_skin_tone"
                    ],
                    "surrogates": "🤲🏽"
                },
                "1f3fe": {
                    "name": "palms_up_together_tone4",
                    "names": [
                        "palms_up_together_tone4",
                        "palms_up_together_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤲🏾"
                },
                "1f3ff": {
                    "name": "palms_up_together_tone5",
                    "names": [
                        "palms_up_together_tone5",
                        "palms_up_together_dark_skin_tone"
                    ],
                    "surrogates": "🤲🏿"
                }
            }
        },
        "open_hands": {
            "name": "open_hands",
            "names": [
                "open_hands"
            ],
            "surrogates": "👐",
            "diversityChildren": {
                "1f3fb": {
                    "name": "open_hands_tone1",
                    "names": [
                        "open_hands_tone1"
                    ],
                    "surrogates": "👐🏻"
                },
                "1f3fc": {
                    "name": "open_hands_tone2",
                    "names": [
                        "open_hands_tone2"
                    ],
                    "surrogates": "👐🏼"
                },
                "1f3fd": {
                    "name": "open_hands_tone3",
                    "names": [
                        "open_hands_tone3"
                    ],
                    "surrogates": "👐🏽"
                },
                "1f3fe": {
                    "name": "open_hands_tone4",
                    "names": [
                        "open_hands_tone4"
                    ],
                    "surrogates": "👐🏾"
                },
                "1f3ff": {
                    "name": "open_hands_tone5",
                    "names": [
                        "open_hands_tone5"
                    ],
                    "surrogates": "👐🏿"
                }
            }
        },
        "raised_hands": {
            "name": "raised_hands",
            "names": [
                "raised_hands",
                "raising_hands"
            ],
            "surrogates": "🙌",
            "diversityChildren": {
                "1f3fb": {
                    "name": "raised_hands_tone1",
                    "names": [
                        "raised_hands_tone1"
                    ],
                    "surrogates": "🙌🏻"
                },
                "1f3fc": {
                    "name": "raised_hands_tone2",
                    "names": [
                        "raised_hands_tone2"
                    ],
                    "surrogates": "🙌🏼"
                },
                "1f3fd": {
                    "name": "raised_hands_tone3",
                    "names": [
                        "raised_hands_tone3"
                    ],
                    "surrogates": "🙌🏽"
                },
                "1f3fe": {
                    "name": "raised_hands_tone4",
                    "names": [
                        "raised_hands_tone4"
                    ],
                    "surrogates": "🙌🏾"
                },
                "1f3ff": {
                    "name": "raised_hands_tone5",
                    "names": [
                        "raised_hands_tone5"
                    ],
                    "surrogates": "🙌🏿"
                }
            }
        },
        "clap": {
            "name": "clap",
            "names": [
                "clap"
            ],
            "surrogates": "👏",
            "diversityChildren": {
                "1f3fb": {
                    "name": "clap_tone1",
                    "names": [
                        "clap_tone1"
                    ],
                    "surrogates": "👏🏻"
                },
                "1f3fc": {
                    "name": "clap_tone2",
                    "names": [
                        "clap_tone2"
                    ],
                    "surrogates": "👏🏼"
                },
                "1f3fd": {
                    "name": "clap_tone3",
                    "names": [
                        "clap_tone3"
                    ],
                    "surrogates": "👏🏽"
                },
                "1f3fe": {
                    "name": "clap_tone4",
                    "names": [
                        "clap_tone4"
                    ],
                    "surrogates": "👏🏾"
                },
                "1f3ff": {
                    "name": "clap_tone5",
                    "names": [
                        "clap_tone5"
                    ],
                    "surrogates": "👏🏿"
                }
            }
        },
        "thumbsup": {
            "name": "thumbsup",
            "names": [
                "thumbsup",
                "+1",
                "thumbup",
                "thumbs_up"
            ],
            "surrogates": "👍",
            "diversityChildren": {
                "1f3fb": {
                    "name": "thumbsup_tone1",
                    "names": [
                        "thumbsup_tone1",
                        "+1_tone1",
                        "thumbup_tone1"
                    ],
                    "surrogates": "👍🏻"
                },
                "1f3fc": {
                    "name": "thumbsup_tone2",
                    "names": [
                        "thumbsup_tone2",
                        "+1_tone2",
                        "thumbup_tone2"
                    ],
                    "surrogates": "👍🏼"
                },
                "1f3fd": {
                    "name": "thumbsup_tone3",
                    "names": [
                        "thumbsup_tone3",
                        "+1_tone3",
                        "thumbup_tone3"
                    ],
                    "surrogates": "👍🏽"
                },
                "1f3fe": {
                    "name": "thumbsup_tone4",
                    "names": [
                        "thumbsup_tone4",
                        "+1_tone4",
                        "thumbup_tone4"
                    ],
                    "surrogates": "👍🏾"
                },
                "1f3ff": {
                    "name": "thumbsup_tone5",
                    "names": [
                        "thumbsup_tone5",
                        "+1_tone5",
                        "thumbup_tone5"
                    ],
                    "surrogates": "👍🏿"
                }
            }
        },
        "thumbsdown": {
            "name": "thumbsdown",
            "names": [
                "thumbsdown",
                "-1",
                "thumbdown",
                "thumbs_down"
            ],
            "surrogates": "👎",
            "diversityChildren": {
                "1f3fb": {
                    "name": "thumbsdown_tone1",
                    "names": [
                        "thumbsdown_tone1",
                        "_1_tone1",
                        "thumbdown_tone1"
                    ],
                    "surrogates": "👎🏻"
                },
                "1f3fc": {
                    "name": "thumbsdown_tone2",
                    "names": [
                        "thumbsdown_tone2",
                        "_1_tone2",
                        "thumbdown_tone2"
                    ],
                    "surrogates": "👎🏼"
                },
                "1f3fd": {
                    "name": "thumbsdown_tone3",
                    "names": [
                        "thumbsdown_tone3",
                        "_1_tone3",
                        "thumbdown_tone3"
                    ],
                    "surrogates": "👎🏽"
                },
                "1f3fe": {
                    "name": "thumbsdown_tone4",
                    "names": [
                        "thumbsdown_tone4",
                        "_1_tone4",
                        "thumbdown_tone4"
                    ],
                    "surrogates": "👎🏾"
                },
                "1f3ff": {
                    "name": "thumbsdown_tone5",
                    "names": [
                        "thumbsdown_tone5",
                        "_1_tone5",
                        "thumbdown_tone5"
                    ],
                    "surrogates": "👎🏿"
                }
            }
        },
        "punch": {
            "name": "punch",
            "names": [
                "punch",
                "oncoming_fist"
            ],
            "surrogates": "👊",
            "diversityChildren": {
                "1f3fb": {
                    "name": "punch_tone1",
                    "names": [
                        "punch_tone1"
                    ],
                    "surrogates": "👊🏻"
                },
                "1f3fc": {
                    "name": "punch_tone2",
                    "names": [
                        "punch_tone2"
                    ],
                    "surrogates": "👊🏼"
                },
                "1f3fd": {
                    "name": "punch_tone3",
                    "names": [
                        "punch_tone3"
                    ],
                    "surrogates": "👊🏽"
                },
                "1f3fe": {
                    "name": "punch_tone4",
                    "names": [
                        "punch_tone4"
                    ],
                    "surrogates": "👊🏾"
                },
                "1f3ff": {
                    "name": "punch_tone5",
                    "names": [
                        "punch_tone5"
                    ],
                    "surrogates": "👊🏿"
                }
            }
        },
        "fist": {
            "name": "fist",
            "names": [
                "fist",
                "raised_fist"
            ],
            "surrogates": "✊",
            "diversityChildren": {
                "1f3fb": {
                    "name": "fist_tone1",
                    "names": [
                        "fist_tone1"
                    ],
                    "surrogates": "✊🏻"
                },
                "1f3fc": {
                    "name": "fist_tone2",
                    "names": [
                        "fist_tone2"
                    ],
                    "surrogates": "✊🏼"
                },
                "1f3fd": {
                    "name": "fist_tone3",
                    "names": [
                        "fist_tone3"
                    ],
                    "surrogates": "✊🏽"
                },
                "1f3fe": {
                    "name": "fist_tone4",
                    "names": [
                        "fist_tone4"
                    ],
                    "surrogates": "✊🏾"
                },
                "1f3ff": {
                    "name": "fist_tone5",
                    "names": [
                        "fist_tone5"
                    ],
                    "surrogates": "✊🏿"
                }
            }
        },
        "left_facing_fist": {
            "name": "left_facing_fist",
            "names": [
                "left_facing_fist",
                "left_fist"
            ],
            "surrogates": "🤛",
            "diversityChildren": {
                "1f3fb": {
                    "name": "left_facing_fist_tone1",
                    "names": [
                        "left_facing_fist_tone1",
                        "left_fist_tone1"
                    ],
                    "surrogates": "🤛🏻"
                },
                "1f3fc": {
                    "name": "left_facing_fist_tone2",
                    "names": [
                        "left_facing_fist_tone2",
                        "left_fist_tone2"
                    ],
                    "surrogates": "🤛🏼"
                },
                "1f3fd": {
                    "name": "left_facing_fist_tone3",
                    "names": [
                        "left_facing_fist_tone3",
                        "left_fist_tone3"
                    ],
                    "surrogates": "🤛🏽"
                },
                "1f3fe": {
                    "name": "left_facing_fist_tone4",
                    "names": [
                        "left_facing_fist_tone4",
                        "left_fist_tone4"
                    ],
                    "surrogates": "🤛🏾"
                },
                "1f3ff": {
                    "name": "left_facing_fist_tone5",
                    "names": [
                        "left_facing_fist_tone5",
                        "left_fist_tone5"
                    ],
                    "surrogates": "🤛🏿"
                }
            }
        },
        "right_facing_fist": {
            "name": "right_facing_fist",
            "names": [
                "right_facing_fist",
                "right_fist"
            ],
            "surrogates": "🤜",
            "diversityChildren": {
                "1f3fb": {
                    "name": "right_facing_fist_tone1",
                    "names": [
                        "right_facing_fist_tone1",
                        "right_fist_tone1"
                    ],
                    "surrogates": "🤜🏻"
                },
                "1f3fc": {
                    "name": "right_facing_fist_tone2",
                    "names": [
                        "right_facing_fist_tone2",
                        "right_fist_tone2"
                    ],
                    "surrogates": "🤜🏼"
                },
                "1f3fd": {
                    "name": "right_facing_fist_tone3",
                    "names": [
                        "right_facing_fist_tone3",
                        "right_fist_tone3"
                    ],
                    "surrogates": "🤜🏽"
                },
                "1f3fe": {
                    "name": "right_facing_fist_tone4",
                    "names": [
                        "right_facing_fist_tone4",
                        "right_fist_tone4"
                    ],
                    "surrogates": "🤜🏾"
                },
                "1f3ff": {
                    "name": "right_facing_fist_tone5",
                    "names": [
                        "right_facing_fist_tone5",
                        "right_fist_tone5"
                    ],
                    "surrogates": "🤜🏿"
                }
            }
        },
        "leftwards_pushing_hand": {
            "name": "leftwards_pushing_hand",
            "names": [
                "leftwards_pushing_hand"
            ],
            "surrogates": "🫷",
            "diversityChildren": {
                "1f3fb": {
                    "name": "leftwards_pushing_hand_tone1",
                    "names": [
                        "leftwards_pushing_hand_tone1",
                        "leftwards_pushing_hand_light_skin_tone"
                    ],
                    "surrogates": "🫷🏻"
                },
                "1f3fc": {
                    "name": "leftwards_pushing_hand_tone2",
                    "names": [
                        "leftwards_pushing_hand_tone2",
                        "leftwards_pushing_hand_medium_light_skin_tone"
                    ],
                    "surrogates": "🫷🏼"
                },
                "1f3fd": {
                    "name": "leftwards_pushing_hand_tone3",
                    "names": [
                        "leftwards_pushing_hand_tone3",
                        "leftwards_pushing_hand_medium_skin_tone"
                    ],
                    "surrogates": "🫷🏽"
                },
                "1f3fe": {
                    "name": "leftwards_pushing_hand_tone4",
                    "names": [
                        "leftwards_pushing_hand_tone4",
                        "leftwards_pushing_hand_medium_dark_skin_tone"
                    ],
                    "surrogates": "🫷🏾"
                },
                "1f3ff": {
                    "name": "leftwards_pushing_hand_tone5",
                    "names": [
                        "leftwards_pushing_hand_tone5",
                        "leftwards_pushing_hand_dark_skin_tone"
                    ],
                    "surrogates": "🫷🏿"
                }
            }
        },
        "rightwards_pushing_hand": {
            "name": "rightwards_pushing_hand",
            "names": [
                "rightwards_pushing_hand"
            ],
            "surrogates": "🫸",
            "diversityChildren": {
                "1f3fb": {
                    "name": "rightwards_pushing_hand_tone1",
                    "names": [
                        "rightwards_pushing_hand_tone1",
                        "rightwards_pushing_hand_light_skin_tone"
                    ],
                    "surrogates": "🫸🏻"
                },
                "1f3fc": {
                    "name": "rightwards_pushing_hand_tone2",
                    "names": [
                        "rightwards_pushing_hand_tone2",
                        "rightwards_pushing_hand_medium_light_skin_tone"
                    ],
                    "surrogates": "🫸🏼"
                },
                "1f3fd": {
                    "name": "rightwards_pushing_hand_tone3",
                    "names": [
                        "rightwards_pushing_hand_tone3",
                        "rightwards_pushing_hand_medium_skin_tone"
                    ],
                    "surrogates": "🫸🏽"
                },
                "1f3fe": {
                    "name": "rightwards_pushing_hand_tone4",
                    "names": [
                        "rightwards_pushing_hand_tone4",
                        "rightwards_pushing_hand_medium_dark_skin_tone"
                    ],
                    "surrogates": "🫸🏾"
                },
                "1f3ff": {
                    "name": "rightwards_pushing_hand_tone5",
                    "names": [
                        "rightwards_pushing_hand_tone5",
                        "rightwards_pushing_hand_dark_skin_tone"
                    ],
                    "surrogates": "🫸🏿"
                }
            }
        },
        "fingers_crossed": {
            "name": "fingers_crossed",
            "names": [
                "fingers_crossed",
                "hand_with_index_and_middle_finger_crossed"
            ],
            "surrogates": "🤞",
            "diversityChildren": {
                "1f3fb": {
                    "name": "fingers_crossed_tone1",
                    "names": [
                        "fingers_crossed_tone1",
                        "hand_with_index_and_middle_fingers_crossed_tone1"
                    ],
                    "surrogates": "🤞🏻"
                },
                "1f3fc": {
                    "name": "fingers_crossed_tone2",
                    "names": [
                        "fingers_crossed_tone2",
                        "hand_with_index_and_middle_fingers_crossed_tone2"
                    ],
                    "surrogates": "🤞🏼"
                },
                "1f3fd": {
                    "name": "fingers_crossed_tone3",
                    "names": [
                        "fingers_crossed_tone3",
                        "hand_with_index_and_middle_fingers_crossed_tone3"
                    ],
                    "surrogates": "🤞🏽"
                },
                "1f3fe": {
                    "name": "fingers_crossed_tone4",
                    "names": [
                        "fingers_crossed_tone4",
                        "hand_with_index_and_middle_fingers_crossed_tone4"
                    ],
                    "surrogates": "🤞🏾"
                },
                "1f3ff": {
                    "name": "fingers_crossed_tone5",
                    "names": [
                        "fingers_crossed_tone5",
                        "hand_with_index_and_middle_fingers_crossed_tone5"
                    ],
                    "surrogates": "🤞🏿"
                }
            }
        },
        "v": {
            "name": "v",
            "names": [
                "v",
                "victory_hand"
            ],
            "surrogates": "✌️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "v_tone1",
                    "names": [
                        "v_tone1"
                    ],
                    "surrogates": "✌🏻"
                },
                "1f3fc": {
                    "name": "v_tone2",
                    "names": [
                        "v_tone2"
                    ],
                    "surrogates": "✌🏼"
                },
                "1f3fd": {
                    "name": "v_tone3",
                    "names": [
                        "v_tone3"
                    ],
                    "surrogates": "✌🏽"
                },
                "1f3fe": {
                    "name": "v_tone4",
                    "names": [
                        "v_tone4"
                    ],
                    "surrogates": "✌🏾"
                },
                "1f3ff": {
                    "name": "v_tone5",
                    "names": [
                        "v_tone5"
                    ],
                    "surrogates": "✌🏿"
                }
            }
        },
        "hand_with_index_finger_and_thumb_crossed": {
            "name": "hand_with_index_finger_and_thumb_crossed",
            "names": [
                "hand_with_index_finger_and_thumb_crossed"
            ],
            "surrogates": "🫰",
            "diversityChildren": {
                "1f3fb": {
                    "name": "hand_with_index_finger_and_thumb_crossed_tone1",
                    "names": [
                        "hand_with_index_finger_and_thumb_crossed_tone1",
                        "hand_with_index_finger_and_thumb_crossed_light_skin_tone"
                    ],
                    "surrogates": "🫰🏻"
                },
                "1f3fc": {
                    "name": "hand_with_index_finger_and_thumb_crossed_tone2",
                    "names": [
                        "hand_with_index_finger_and_thumb_crossed_tone2",
                        "hand_with_index_finger_and_thumb_crossed_medium_light_skin_tone"
                    ],
                    "surrogates": "🫰🏼"
                },
                "1f3fd": {
                    "name": "hand_with_index_finger_and_thumb_crossed_tone3",
                    "names": [
                        "hand_with_index_finger_and_thumb_crossed_tone3",
                        "hand_with_index_finger_and_thumb_crossed_medium_skin_tone"
                    ],
                    "surrogates": "🫰🏽"
                },
                "1f3fe": {
                    "name": "hand_with_index_finger_and_thumb_crossed_tone4",
                    "names": [
                        "hand_with_index_finger_and_thumb_crossed_tone4",
                        "hand_with_index_finger_and_thumb_crossed_medium_dark_skin_tone"
                    ],
                    "surrogates": "🫰🏾"
                },
                "1f3ff": {
                    "name": "hand_with_index_finger_and_thumb_crossed_tone5",
                    "names": [
                        "hand_with_index_finger_and_thumb_crossed_tone5",
                        "hand_with_index_finger_and_thumb_crossed_dark_skin_tone"
                    ],
                    "surrogates": "🫰🏿"
                }
            }
        },
        "love_you_gesture": {
            "name": "love_you_gesture",
            "names": [
                "love_you_gesture"
            ],
            "surrogates": "🤟",
            "diversityChildren": {
                "1f3fb": {
                    "name": "love_you_gesture_tone1",
                    "names": [
                        "love_you_gesture_tone1",
                        "love_you_gesture_light_skin_tone"
                    ],
                    "surrogates": "🤟🏻"
                },
                "1f3fc": {
                    "name": "love_you_gesture_tone2",
                    "names": [
                        "love_you_gesture_tone2",
                        "love_you_gesture_medium_light_skin_tone"
                    ],
                    "surrogates": "🤟🏼"
                },
                "1f3fd": {
                    "name": "love_you_gesture_tone3",
                    "names": [
                        "love_you_gesture_tone3",
                        "love_you_gesture_medium_skin_tone"
                    ],
                    "surrogates": "🤟🏽"
                },
                "1f3fe": {
                    "name": "love_you_gesture_tone4",
                    "names": [
                        "love_you_gesture_tone4",
                        "love_you_gesture_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤟🏾"
                },
                "1f3ff": {
                    "name": "love_you_gesture_tone5",
                    "names": [
                        "love_you_gesture_tone5",
                        "love_you_gesture_dark_skin_tone"
                    ],
                    "surrogates": "🤟🏿"
                }
            }
        },
        "metal": {
            "name": "metal",
            "names": [
                "metal",
                "sign_of_the_horns"
            ],
            "surrogates": "🤘",
            "diversityChildren": {
                "1f3fb": {
                    "name": "metal_tone1",
                    "names": [
                        "metal_tone1",
                        "sign_of_the_horns_tone1"
                    ],
                    "surrogates": "🤘🏻"
                },
                "1f3fc": {
                    "name": "metal_tone2",
                    "names": [
                        "metal_tone2",
                        "sign_of_the_horns_tone2"
                    ],
                    "surrogates": "🤘🏼"
                },
                "1f3fd": {
                    "name": "metal_tone3",
                    "names": [
                        "metal_tone3",
                        "sign_of_the_horns_tone3"
                    ],
                    "surrogates": "🤘🏽"
                },
                "1f3fe": {
                    "name": "metal_tone4",
                    "names": [
                        "metal_tone4",
                        "sign_of_the_horns_tone4"
                    ],
                    "surrogates": "🤘🏾"
                },
                "1f3ff": {
                    "name": "metal_tone5",
                    "names": [
                        "metal_tone5",
                        "sign_of_the_horns_tone5"
                    ],
                    "surrogates": "🤘🏿"
                }
            }
        },
        "ok_hand": {
            "name": "ok_hand",
            "names": [
                "ok_hand"
            ],
            "surrogates": "👌",
            "diversityChildren": {
                "1f3fb": {
                    "name": "ok_hand_tone1",
                    "names": [
                        "ok_hand_tone1"
                    ],
                    "surrogates": "👌🏻"
                },
                "1f3fc": {
                    "name": "ok_hand_tone2",
                    "names": [
                        "ok_hand_tone2"
                    ],
                    "surrogates": "👌🏼"
                },
                "1f3fd": {
                    "name": "ok_hand_tone3",
                    "names": [
                        "ok_hand_tone3"
                    ],
                    "surrogates": "👌🏽"
                },
                "1f3fe": {
                    "name": "ok_hand_tone4",
                    "names": [
                        "ok_hand_tone4"
                    ],
                    "surrogates": "👌🏾"
                },
                "1f3ff": {
                    "name": "ok_hand_tone5",
                    "names": [
                        "ok_hand_tone5"
                    ],
                    "surrogates": "👌🏿"
                }
            }
        },
        "pinched_fingers": {
            "name": "pinched_fingers",
            "names": [
                "pinched_fingers"
            ],
            "surrogates": "🤌",
            "diversityChildren": {
                "1f3fc": {
                    "name": "pinched_fingers_tone2",
                    "names": [
                        "pinched_fingers_tone2",
                        "pinched_fingers_medium_light_skin_tone"
                    ],
                    "surrogates": "🤌🏼"
                },
                "1f3fb": {
                    "name": "pinched_fingers_tone1",
                    "names": [
                        "pinched_fingers_tone1",
                        "pinched_fingers_light_skin_tone"
                    ],
                    "surrogates": "🤌🏻"
                },
                "1f3fd": {
                    "name": "pinched_fingers_tone3",
                    "names": [
                        "pinched_fingers_tone3",
                        "pinched_fingers_medium_skin_tone"
                    ],
                    "surrogates": "🤌🏽"
                },
                "1f3fe": {
                    "name": "pinched_fingers_tone4",
                    "names": [
                        "pinched_fingers_tone4",
                        "pinched_fingers_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤌🏾"
                },
                "1f3ff": {
                    "name": "pinched_fingers_tone5",
                    "names": [
                        "pinched_fingers_tone5",
                        "pinched_fingers_dark_skin_tone"
                    ],
                    "surrogates": "🤌🏿"
                }
            }
        },
        "pinching_hand": {
            "name": "pinching_hand",
            "names": [
                "pinching_hand"
            ],
            "surrogates": "🤏",
            "diversityChildren": {
                "1f3fb": {
                    "name": "pinching_hand_tone1",
                    "names": [
                        "pinching_hand_tone1",
                        "pinching_hand_light_skin_tone"
                    ],
                    "surrogates": "🤏🏻"
                },
                "1f3fc": {
                    "name": "pinching_hand_tone2",
                    "names": [
                        "pinching_hand_tone2",
                        "pinching_hand_medium_light_skin_tone"
                    ],
                    "surrogates": "🤏🏼"
                },
                "1f3fd": {
                    "name": "pinching_hand_tone3",
                    "names": [
                        "pinching_hand_tone3",
                        "pinching_hand_medium_skin_tone"
                    ],
                    "surrogates": "🤏🏽"
                },
                "1f3fe": {
                    "name": "pinching_hand_tone4",
                    "names": [
                        "pinching_hand_tone4",
                        "pinching_hand_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤏🏾"
                },
                "1f3ff": {
                    "name": "pinching_hand_tone5",
                    "names": [
                        "pinching_hand_tone5",
                        "pinching_hand_dark_skin_tone"
                    ],
                    "surrogates": "🤏🏿"
                }
            }
        },
        "palm_down_hand": {
            "name": "palm_down_hand",
            "names": [
                "palm_down_hand"
            ],
            "surrogates": "🫳",
            "diversityChildren": {
                "1f3fb": {
                    "name": "palm_down_hand_tone1",
                    "names": [
                        "palm_down_hand_tone1",
                        "palm_down_hand_light_skin_tone"
                    ],
                    "surrogates": "🫳🏻"
                },
                "1f3fc": {
                    "name": "palm_down_hand_tone2",
                    "names": [
                        "palm_down_hand_tone2",
                        "palm_down_hand_medium_light_skin_tone"
                    ],
                    "surrogates": "🫳🏼"
                },
                "1f3fd": {
                    "name": "palm_down_hand_tone3",
                    "names": [
                        "palm_down_hand_tone3",
                        "palm_down_hand_medium_skin_tone"
                    ],
                    "surrogates": "🫳🏽"
                },
                "1f3fe": {
                    "name": "palm_down_hand_tone4",
                    "names": [
                        "palm_down_hand_tone4",
                        "palm_down_hand_medium_dark_skin_tone"
                    ],
                    "surrogates": "🫳🏾"
                },
                "1f3ff": {
                    "name": "palm_down_hand_tone5",
                    "names": [
                        "palm_down_hand_tone5",
                        "palm_down_hand_dark_skin_tone"
                    ],
                    "surrogates": "🫳🏿"
                }
            }
        },
        "palm_up_hand": {
            "name": "palm_up_hand",
            "names": [
                "palm_up_hand"
            ],
            "surrogates": "🫴",
            "diversityChildren": {
                "1f3fb": {
                    "name": "palm_up_hand_tone1",
                    "names": [
                        "palm_up_hand_tone1",
                        "palm_up_hand_light_skin_tone"
                    ],
                    "surrogates": "🫴🏻"
                },
                "1f3fc": {
                    "name": "palm_up_hand_tone2",
                    "names": [
                        "palm_up_hand_tone2",
                        "palm_up_hand_medium_light_skin_tone"
                    ],
                    "surrogates": "🫴🏼"
                },
                "1f3fd": {
                    "name": "palm_up_hand_tone3",
                    "names": [
                        "palm_up_hand_tone3",
                        "palm_up_hand_medium_skin_tone"
                    ],
                    "surrogates": "🫴🏽"
                },
                "1f3fe": {
                    "name": "palm_up_hand_tone4",
                    "names": [
                        "palm_up_hand_tone4",
                        "palm_up_hand_medium_dark_skin_tone"
                    ],
                    "surrogates": "🫴🏾"
                },
                "1f3ff": {
                    "name": "palm_up_hand_tone5",
                    "names": [
                        "palm_up_hand_tone5",
                        "palm_up_hand_dark_skin_tone"
                    ],
                    "surrogates": "🫴🏿"
                }
            }
        },
        "point_left": {
            "name": "point_left",
            "names": [
                "point_left"
            ],
            "surrogates": "👈",
            "diversityChildren": {
                "1f3fb": {
                    "name": "point_left_tone1",
                    "names": [
                        "point_left_tone1"
                    ],
                    "surrogates": "👈🏻"
                },
                "1f3fc": {
                    "name": "point_left_tone2",
                    "names": [
                        "point_left_tone2"
                    ],
                    "surrogates": "👈🏼"
                },
                "1f3fd": {
                    "name": "point_left_tone3",
                    "names": [
                        "point_left_tone3"
                    ],
                    "surrogates": "👈🏽"
                },
                "1f3fe": {
                    "name": "point_left_tone4",
                    "names": [
                        "point_left_tone4"
                    ],
                    "surrogates": "👈🏾"
                },
                "1f3ff": {
                    "name": "point_left_tone5",
                    "names": [
                        "point_left_tone5"
                    ],
                    "surrogates": "👈🏿"
                }
            }
        },
        "point_right": {
            "name": "point_right",
            "names": [
                "point_right"
            ],
            "surrogates": "👉",
            "diversityChildren": {
                "1f3fb": {
                    "name": "point_right_tone1",
                    "names": [
                        "point_right_tone1"
                    ],
                    "surrogates": "👉🏻"
                },
                "1f3fc": {
                    "name": "point_right_tone2",
                    "names": [
                        "point_right_tone2"
                    ],
                    "surrogates": "👉🏼"
                },
                "1f3fd": {
                    "name": "point_right_tone3",
                    "names": [
                        "point_right_tone3"
                    ],
                    "surrogates": "👉🏽"
                },
                "1f3fe": {
                    "name": "point_right_tone4",
                    "names": [
                        "point_right_tone4"
                    ],
                    "surrogates": "👉🏾"
                },
                "1f3ff": {
                    "name": "point_right_tone5",
                    "names": [
                        "point_right_tone5"
                    ],
                    "surrogates": "👉🏿"
                }
            }
        },
        "point_up_2": {
            "name": "point_up_2",
            "names": [
                "point_up_2"
            ],
            "surrogates": "👆",
            "diversityChildren": {
                "1f3fb": {
                    "name": "point_up_2_tone1",
                    "names": [
                        "point_up_2_tone1"
                    ],
                    "surrogates": "👆🏻"
                },
                "1f3fc": {
                    "name": "point_up_2_tone2",
                    "names": [
                        "point_up_2_tone2"
                    ],
                    "surrogates": "👆🏼"
                },
                "1f3fd": {
                    "name": "point_up_2_tone3",
                    "names": [
                        "point_up_2_tone3"
                    ],
                    "surrogates": "👆🏽"
                },
                "1f3fe": {
                    "name": "point_up_2_tone4",
                    "names": [
                        "point_up_2_tone4"
                    ],
                    "surrogates": "👆🏾"
                },
                "1f3ff": {
                    "name": "point_up_2_tone5",
                    "names": [
                        "point_up_2_tone5"
                    ],
                    "surrogates": "👆🏿"
                }
            }
        },
        "point_down": {
            "name": "point_down",
            "names": [
                "point_down"
            ],
            "surrogates": "👇",
            "diversityChildren": {
                "1f3fb": {
                    "name": "point_down_tone1",
                    "names": [
                        "point_down_tone1"
                    ],
                    "surrogates": "👇🏻"
                },
                "1f3fc": {
                    "name": "point_down_tone2",
                    "names": [
                        "point_down_tone2"
                    ],
                    "surrogates": "👇🏼"
                },
                "1f3fd": {
                    "name": "point_down_tone3",
                    "names": [
                        "point_down_tone3"
                    ],
                    "surrogates": "👇🏽"
                },
                "1f3fe": {
                    "name": "point_down_tone4",
                    "names": [
                        "point_down_tone4"
                    ],
                    "surrogates": "👇🏾"
                },
                "1f3ff": {
                    "name": "point_down_tone5",
                    "names": [
                        "point_down_tone5"
                    ],
                    "surrogates": "👇🏿"
                }
            }
        },
        "point_up": {
            "name": "point_up",
            "names": [
                "point_up"
            ],
            "surrogates": "☝️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "point_up_tone1",
                    "names": [
                        "point_up_tone1"
                    ],
                    "surrogates": "☝🏻"
                },
                "1f3fc": {
                    "name": "point_up_tone2",
                    "names": [
                        "point_up_tone2"
                    ],
                    "surrogates": "☝🏼"
                },
                "1f3fd": {
                    "name": "point_up_tone3",
                    "names": [
                        "point_up_tone3"
                    ],
                    "surrogates": "☝🏽"
                },
                "1f3fe": {
                    "name": "point_up_tone4",
                    "names": [
                        "point_up_tone4"
                    ],
                    "surrogates": "☝🏾"
                },
                "1f3ff": {
                    "name": "point_up_tone5",
                    "names": [
                        "point_up_tone5"
                    ],
                    "surrogates": "☝🏿"
                }
            }
        },
        "raised_hand": {
            "name": "raised_hand",
            "names": [
                "raised_hand"
            ],
            "surrogates": "✋",
            "diversityChildren": {
                "1f3fb": {
                    "name": "raised_hand_tone1",
                    "names": [
                        "raised_hand_tone1"
                    ],
                    "surrogates": "✋🏻"
                },
                "1f3fc": {
                    "name": "raised_hand_tone2",
                    "names": [
                        "raised_hand_tone2"
                    ],
                    "surrogates": "✋🏼"
                },
                "1f3fd": {
                    "name": "raised_hand_tone3",
                    "names": [
                        "raised_hand_tone3"
                    ],
                    "surrogates": "✋🏽"
                },
                "1f3fe": {
                    "name": "raised_hand_tone4",
                    "names": [
                        "raised_hand_tone4"
                    ],
                    "surrogates": "✋🏾"
                },
                "1f3ff": {
                    "name": "raised_hand_tone5",
                    "names": [
                        "raised_hand_tone5"
                    ],
                    "surrogates": "✋🏿"
                }
            }
        },
        "raised_back_of_hand": {
            "name": "raised_back_of_hand",
            "names": [
                "raised_back_of_hand",
                "back_of_hand"
            ],
            "surrogates": "🤚",
            "diversityChildren": {
                "1f3fb": {
                    "name": "raised_back_of_hand_tone1",
                    "names": [
                        "raised_back_of_hand_tone1",
                        "back_of_hand_tone1"
                    ],
                    "surrogates": "🤚🏻"
                },
                "1f3fc": {
                    "name": "raised_back_of_hand_tone2",
                    "names": [
                        "raised_back_of_hand_tone2",
                        "back_of_hand_tone2"
                    ],
                    "surrogates": "🤚🏼"
                },
                "1f3fd": {
                    "name": "raised_back_of_hand_tone3",
                    "names": [
                        "raised_back_of_hand_tone3",
                        "back_of_hand_tone3"
                    ],
                    "surrogates": "🤚🏽"
                },
                "1f3fe": {
                    "name": "raised_back_of_hand_tone4",
                    "names": [
                        "raised_back_of_hand_tone4",
                        "back_of_hand_tone4"
                    ],
                    "surrogates": "🤚🏾"
                },
                "1f3ff": {
                    "name": "raised_back_of_hand_tone5",
                    "names": [
                        "raised_back_of_hand_tone5",
                        "back_of_hand_tone5"
                    ],
                    "surrogates": "🤚🏿"
                }
            }
        },
        "hand_splayed": {
            "name": "hand_splayed",
            "names": [
                "hand_splayed",
                "raised_hand_with_fingers_splayed"
            ],
            "surrogates": "🖐️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "hand_splayed_tone1",
                    "names": [
                        "hand_splayed_tone1",
                        "raised_hand_with_fingers_splayed_tone1"
                    ],
                    "surrogates": "🖐🏻"
                },
                "1f3fc": {
                    "name": "hand_splayed_tone2",
                    "names": [
                        "hand_splayed_tone2",
                        "raised_hand_with_fingers_splayed_tone2"
                    ],
                    "surrogates": "🖐🏼"
                },
                "1f3fd": {
                    "name": "hand_splayed_tone3",
                    "names": [
                        "hand_splayed_tone3",
                        "raised_hand_with_fingers_splayed_tone3"
                    ],
                    "surrogates": "🖐🏽"
                },
                "1f3fe": {
                    "name": "hand_splayed_tone4",
                    "names": [
                        "hand_splayed_tone4",
                        "raised_hand_with_fingers_splayed_tone4"
                    ],
                    "surrogates": "🖐🏾"
                },
                "1f3ff": {
                    "name": "hand_splayed_tone5",
                    "names": [
                        "hand_splayed_tone5",
                        "raised_hand_with_fingers_splayed_tone5"
                    ],
                    "surrogates": "🖐🏿"
                }
            }
        },
        "vulcan": {
            "name": "vulcan",
            "names": [
                "vulcan",
                "raised_hand_with_part_between_middle_and_ring_fingers",
                "vulcan_salute"
            ],
            "surrogates": "🖖",
            "diversityChildren": {
                "1f3fb": {
                    "name": "vulcan_tone1",
                    "names": [
                        "vulcan_tone1",
                        "raised_hand_with_part_between_middle_and_ring_fingers_tone1"
                    ],
                    "surrogates": "🖖🏻"
                },
                "1f3fc": {
                    "name": "vulcan_tone2",
                    "names": [
                        "vulcan_tone2",
                        "raised_hand_with_part_between_middle_and_ring_fingers_tone2"
                    ],
                    "surrogates": "🖖🏼"
                },
                "1f3fd": {
                    "name": "vulcan_tone3",
                    "names": [
                        "vulcan_tone3",
                        "raised_hand_with_part_between_middle_and_ring_fingers_tone3"
                    ],
                    "surrogates": "🖖🏽"
                },
                "1f3fe": {
                    "name": "vulcan_tone4",
                    "names": [
                        "vulcan_tone4",
                        "raised_hand_with_part_between_middle_and_ring_fingers_tone4"
                    ],
                    "surrogates": "🖖🏾"
                },
                "1f3ff": {
                    "name": "vulcan_tone5",
                    "names": [
                        "vulcan_tone5",
                        "raised_hand_with_part_between_middle_and_ring_fingers_tone5"
                    ],
                    "surrogates": "🖖🏿"
                }
            }
        },
        "wave": {
            "name": "wave",
            "names": [
                "wave",
                "waving_hand"
            ],
            "surrogates": "👋",
            "diversityChildren": {
                "1f3fb": {
                    "name": "wave_tone1",
                    "names": [
                        "wave_tone1"
                    ],
                    "surrogates": "👋🏻"
                },
                "1f3fc": {
                    "name": "wave_tone2",
                    "names": [
                        "wave_tone2"
                    ],
                    "surrogates": "👋🏼"
                },
                "1f3fd": {
                    "name": "wave_tone3",
                    "names": [
                        "wave_tone3"
                    ],
                    "surrogates": "👋🏽"
                },
                "1f3fe": {
                    "name": "wave_tone4",
                    "names": [
                        "wave_tone4"
                    ],
                    "surrogates": "👋🏾"
                },
                "1f3ff": {
                    "name": "wave_tone5",
                    "names": [
                        "wave_tone5"
                    ],
                    "surrogates": "👋🏿"
                }
            }
        },
        "call_me": {
            "name": "call_me",
            "names": [
                "call_me",
                "call_me_hand"
            ],
            "surrogates": "🤙",
            "diversityChildren": {
                "1f3fb": {
                    "name": "call_me_tone1",
                    "names": [
                        "call_me_tone1",
                        "call_me_hand_tone1"
                    ],
                    "surrogates": "🤙🏻"
                },
                "1f3fc": {
                    "name": "call_me_tone2",
                    "names": [
                        "call_me_tone2",
                        "call_me_hand_tone2"
                    ],
                    "surrogates": "🤙🏼"
                },
                "1f3fd": {
                    "name": "call_me_tone3",
                    "names": [
                        "call_me_tone3",
                        "call_me_hand_tone3"
                    ],
                    "surrogates": "🤙🏽"
                },
                "1f3fe": {
                    "name": "call_me_tone4",
                    "names": [
                        "call_me_tone4",
                        "call_me_hand_tone4"
                    ],
                    "surrogates": "🤙🏾"
                },
                "1f3ff": {
                    "name": "call_me_tone5",
                    "names": [
                        "call_me_tone5",
                        "call_me_hand_tone5"
                    ],
                    "surrogates": "🤙🏿"
                }
            }
        },
        "leftwards_hand": {
            "name": "leftwards_hand",
            "names": [
                "leftwards_hand"
            ],
            "surrogates": "🫲",
            "diversityChildren": {
                "1f3fb": {
                    "name": "leftwards_hand_tone1",
                    "names": [
                        "leftwards_hand_tone1",
                        "leftwards_hand_light_skin_tone"
                    ],
                    "surrogates": "🫲🏻"
                },
                "1f3fc": {
                    "name": "leftwards_hand_tone2",
                    "names": [
                        "leftwards_hand_tone2",
                        "leftwards_hand_medium_light_skin_tone"
                    ],
                    "surrogates": "🫲🏼"
                },
                "1f3fd": {
                    "name": "leftwards_hand_tone3",
                    "names": [
                        "leftwards_hand_tone3",
                        "leftwards_hand_medium_skin_tone"
                    ],
                    "surrogates": "🫲🏽"
                },
                "1f3fe": {
                    "name": "leftwards_hand_tone4",
                    "names": [
                        "leftwards_hand_tone4",
                        "leftwards_hand_medium_dark_skin_tone"
                    ],
                    "surrogates": "🫲🏾"
                },
                "1f3ff": {
                    "name": "leftwards_hand_tone5",
                    "names": [
                        "leftwards_hand_tone5",
                        "leftwards_hand_dark_skin_tone"
                    ],
                    "surrogates": "🫲🏿"
                }
            }
        },
        "rightwards_hand": {
            "name": "rightwards_hand",
            "names": [
                "rightwards_hand"
            ],
            "surrogates": "🫱",
            "diversityChildren": {
                "1f3fb": {
                    "name": "rightwards_hand_tone1",
                    "names": [
                        "rightwards_hand_tone1",
                        "rightwards_hand_light_skin_tone"
                    ],
                    "surrogates": "🫱🏻"
                },
                "1f3fc": {
                    "name": "rightwards_hand_tone2",
                    "names": [
                        "rightwards_hand_tone2",
                        "rightwards_hand_medium_light_skin_tone"
                    ],
                    "surrogates": "🫱🏼"
                },
                "1f3fd": {
                    "name": "rightwards_hand_tone3",
                    "names": [
                        "rightwards_hand_tone3",
                        "rightwards_hand_medium_skin_tone"
                    ],
                    "surrogates": "🫱🏽"
                },
                "1f3fe": {
                    "name": "rightwards_hand_tone4",
                    "names": [
                        "rightwards_hand_tone4",
                        "rightwards_hand_medium_dark_skin_tone"
                    ],
                    "surrogates": "🫱🏾"
                },
                "1f3ff": {
                    "name": "rightwards_hand_tone5",
                    "names": [
                        "rightwards_hand_tone5",
                        "rightwards_hand_dark_skin_tone"
                    ],
                    "surrogates": "🫱🏿"
                }
            }
        },
        "muscle": {
            "name": "muscle",
            "names": [
                "muscle",
                "flexed_biceps"
            ],
            "surrogates": "💪",
            "diversityChildren": {
                "1f3fb": {
                    "name": "muscle_tone1",
                    "names": [
                        "muscle_tone1"
                    ],
                    "surrogates": "💪🏻"
                },
                "1f3fc": {
                    "name": "muscle_tone2",
                    "names": [
                        "muscle_tone2"
                    ],
                    "surrogates": "💪🏼"
                },
                "1f3fd": {
                    "name": "muscle_tone3",
                    "names": [
                        "muscle_tone3"
                    ],
                    "surrogates": "💪🏽"
                },
                "1f3fe": {
                    "name": "muscle_tone4",
                    "names": [
                        "muscle_tone4"
                    ],
                    "surrogates": "💪🏾"
                },
                "1f3ff": {
                    "name": "muscle_tone5",
                    "names": [
                        "muscle_tone5"
                    ],
                    "surrogates": "💪🏿"
                }
            }
        },
        "mechanical_arm": {
            "name": "mechanical_arm",
            "names": [
                "mechanical_arm"
            ],
            "surrogates": "🦾"
        },
        "middle_finger": {
            "name": "middle_finger",
            "names": [
                "middle_finger",
                "reversed_hand_with_middle_finger_extended"
            ],
            "surrogates": "🖕",
            "diversityChildren": {
                "1f3fb": {
                    "name": "middle_finger_tone1",
                    "names": [
                        "middle_finger_tone1",
                        "reversed_hand_with_middle_finger_extended_tone1"
                    ],
                    "surrogates": "🖕🏻"
                },
                "1f3fc": {
                    "name": "middle_finger_tone2",
                    "names": [
                        "middle_finger_tone2",
                        "reversed_hand_with_middle_finger_extended_tone2"
                    ],
                    "surrogates": "🖕🏼"
                },
                "1f3fd": {
                    "name": "middle_finger_tone3",
                    "names": [
                        "middle_finger_tone3",
                        "reversed_hand_with_middle_finger_extended_tone3"
                    ],
                    "surrogates": "🖕🏽"
                },
                "1f3fe": {
                    "name": "middle_finger_tone4",
                    "names": [
                        "middle_finger_tone4",
                        "reversed_hand_with_middle_finger_extended_tone4"
                    ],
                    "surrogates": "🖕🏾"
                },
                "1f3ff": {
                    "name": "middle_finger_tone5",
                    "names": [
                        "middle_finger_tone5",
                        "reversed_hand_with_middle_finger_extended_tone5"
                    ],
                    "surrogates": "🖕🏿"
                }
            }
        },
        "writing_hand": {
            "name": "writing_hand",
            "names": [
                "writing_hand"
            ],
            "surrogates": "✍️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "writing_hand_tone1",
                    "names": [
                        "writing_hand_tone1"
                    ],
                    "surrogates": "✍🏻"
                },
                "1f3fc": {
                    "name": "writing_hand_tone2",
                    "names": [
                        "writing_hand_tone2"
                    ],
                    "surrogates": "✍🏼"
                },
                "1f3fd": {
                    "name": "writing_hand_tone3",
                    "names": [
                        "writing_hand_tone3"
                    ],
                    "surrogates": "✍🏽"
                },
                "1f3fe": {
                    "name": "writing_hand_tone4",
                    "names": [
                        "writing_hand_tone4"
                    ],
                    "surrogates": "✍🏾"
                },
                "1f3ff": {
                    "name": "writing_hand_tone5",
                    "names": [
                        "writing_hand_tone5"
                    ],
                    "surrogates": "✍🏿"
                }
            }
        },
        "pray": {
            "name": "pray",
            "names": [
                "pray",
                "folded_hands"
            ],
            "surrogates": "🙏",
            "diversityChildren": {
                "1f3fb": {
                    "name": "pray_tone1",
                    "names": [
                        "pray_tone1"
                    ],
                    "surrogates": "🙏🏻"
                },
                "1f3fc": {
                    "name": "pray_tone2",
                    "names": [
                        "pray_tone2"
                    ],
                    "surrogates": "🙏🏼"
                },
                "1f3fd": {
                    "name": "pray_tone3",
                    "names": [
                        "pray_tone3"
                    ],
                    "surrogates": "🙏🏽"
                },
                "1f3fe": {
                    "name": "pray_tone4",
                    "names": [
                        "pray_tone4"
                    ],
                    "surrogates": "🙏🏾"
                },
                "1f3ff": {
                    "name": "pray_tone5",
                    "names": [
                        "pray_tone5"
                    ],
                    "surrogates": "🙏🏿"
                }
            }
        },
        "index_pointing_at_the_viewer": {
            "name": "index_pointing_at_the_viewer",
            "names": [
                "index_pointing_at_the_viewer"
            ],
            "surrogates": "🫵",
            "diversityChildren": {
                "1f3fb": {
                    "name": "index_pointing_at_the_viewer_tone1",
                    "names": [
                        "index_pointing_at_the_viewer_tone1",
                        "index_pointing_at_the_viewer_light_skin_tone"
                    ],
                    "surrogates": "🫵🏻"
                },
                "1f3fc": {
                    "name": "index_pointing_at_the_viewer_tone2",
                    "names": [
                        "index_pointing_at_the_viewer_tone2",
                        "index_pointing_at_the_viewer_medium_light_skin_tone"
                    ],
                    "surrogates": "🫵🏼"
                },
                "1f3fd": {
                    "name": "index_pointing_at_the_viewer_tone3",
                    "names": [
                        "index_pointing_at_the_viewer_tone3",
                        "index_pointing_at_the_viewer_medium_skin_tone"
                    ],
                    "surrogates": "🫵🏽"
                },
                "1f3fe": {
                    "name": "index_pointing_at_the_viewer_tone4",
                    "names": [
                        "index_pointing_at_the_viewer_tone4",
                        "index_pointing_at_the_viewer_medium_dark_skin_tone"
                    ],
                    "surrogates": "🫵🏾"
                },
                "1f3ff": {
                    "name": "index_pointing_at_the_viewer_tone5",
                    "names": [
                        "index_pointing_at_the_viewer_tone5",
                        "index_pointing_at_the_viewer_dark_skin_tone"
                    ],
                    "surrogates": "🫵🏿"
                }
            }
        },
        "foot": {
            "name": "foot",
            "names": [
                "foot"
            ],
            "surrogates": "🦶",
            "diversityChildren": {
                "1f3fb": {
                    "name": "foot_tone1",
                    "names": [
                        "foot_tone1",
                        "foot_light_skin_tone"
                    ],
                    "surrogates": "🦶🏻"
                },
                "1f3fc": {
                    "name": "foot_tone2",
                    "names": [
                        "foot_tone2",
                        "foot_medium_light_skin_tone"
                    ],
                    "surrogates": "🦶🏼"
                },
                "1f3fd": {
                    "name": "foot_tone3",
                    "names": [
                        "foot_tone3",
                        "foot_medium_skin_tone"
                    ],
                    "surrogates": "🦶🏽"
                },
                "1f3fe": {
                    "name": "foot_tone4",
                    "names": [
                        "foot_tone4",
                        "foot_medium_dark_skin_tone"
                    ],
                    "surrogates": "🦶🏾"
                },
                "1f3ff": {
                    "name": "foot_tone5",
                    "names": [
                        "foot_tone5",
                        "foot_dark_skin_tone"
                    ],
                    "surrogates": "🦶🏿"
                }
            }
        },
        "leg": {
            "name": "leg",
            "names": [
                "leg"
            ],
            "surrogates": "🦵",
            "diversityChildren": {
                "1f3fb": {
                    "name": "leg_tone1",
                    "names": [
                        "leg_tone1",
                        "leg_light_skin_tone"
                    ],
                    "surrogates": "🦵🏻"
                },
                "1f3fc": {
                    "name": "leg_tone2",
                    "names": [
                        "leg_tone2",
                        "leg_medium_light_skin_tone"
                    ],
                    "surrogates": "🦵🏼"
                },
                "1f3fd": {
                    "name": "leg_tone3",
                    "names": [
                        "leg_tone3",
                        "leg_medium_skin_tone"
                    ],
                    "surrogates": "🦵🏽"
                },
                "1f3fe": {
                    "name": "leg_tone4",
                    "names": [
                        "leg_tone4",
                        "leg_medium_dark_skin_tone"
                    ],
                    "surrogates": "🦵🏾"
                },
                "1f3ff": {
                    "name": "leg_tone5",
                    "names": [
                        "leg_tone5",
                        "leg_dark_skin_tone"
                    ],
                    "surrogates": "🦵🏿"
                }
            }
        },
        "mechanical_leg": {
            "name": "mechanical_leg",
            "names": [
                "mechanical_leg"
            ],
            "surrogates": "🦿"
        },
        "lipstick": {
            "name": "lipstick",
            "names": [
                "lipstick"
            ],
            "surrogates": "💄"
        },
        "kiss": {
            "name": "kiss",
            "names": [
                "kiss",
                "kiss_mark"
            ],
            "surrogates": "💋"
        },
        "lips": {
            "name": "lips",
            "names": [
                "lips",
                "mouth"
            ],
            "surrogates": "👄"
        },
        "biting_lip": {
            "name": "biting_lip",
            "names": [
                "biting_lip"
            ],
            "surrogates": "🫦"
        },
        "tooth": {
            "name": "tooth",
            "names": [
                "tooth"
            ],
            "surrogates": "🦷"
        },
        "tongue": {
            "name": "tongue",
            "names": [
                "tongue"
            ],
            "surrogates": "👅"
        },
        "ear": {
            "name": "ear",
            "names": [
                "ear"
            ],
            "surrogates": "👂",
            "diversityChildren": {
                "1f3fb": {
                    "name": "ear_tone1",
                    "names": [
                        "ear_tone1"
                    ],
                    "surrogates": "👂🏻"
                },
                "1f3fc": {
                    "name": "ear_tone2",
                    "names": [
                        "ear_tone2"
                    ],
                    "surrogates": "👂🏼"
                },
                "1f3fd": {
                    "name": "ear_tone3",
                    "names": [
                        "ear_tone3"
                    ],
                    "surrogates": "👂🏽"
                },
                "1f3fe": {
                    "name": "ear_tone4",
                    "names": [
                        "ear_tone4"
                    ],
                    "surrogates": "👂🏾"
                },
                "1f3ff": {
                    "name": "ear_tone5",
                    "names": [
                        "ear_tone5"
                    ],
                    "surrogates": "👂🏿"
                }
            }
        },
        "ear_with_hearing_aid": {
            "name": "ear_with_hearing_aid",
            "names": [
                "ear_with_hearing_aid"
            ],
            "surrogates": "🦻",
            "diversityChildren": {
                "1f3fb": {
                    "name": "ear_with_hearing_aid_tone1",
                    "names": [
                        "ear_with_hearing_aid_tone1",
                        "ear_with_hearing_aid_light_skin_tone"
                    ],
                    "surrogates": "🦻🏻"
                },
                "1f3fc": {
                    "name": "ear_with_hearing_aid_tone2",
                    "names": [
                        "ear_with_hearing_aid_tone2",
                        "ear_with_hearing_aid_medium_light_skin_tone"
                    ],
                    "surrogates": "🦻🏼"
                },
                "1f3fd": {
                    "name": "ear_with_hearing_aid_tone3",
                    "names": [
                        "ear_with_hearing_aid_tone3",
                        "ear_with_hearing_aid_medium_skin_tone"
                    ],
                    "surrogates": "🦻🏽"
                },
                "1f3fe": {
                    "name": "ear_with_hearing_aid_tone4",
                    "names": [
                        "ear_with_hearing_aid_tone4",
                        "ear_with_hearing_aid_medium_dark_skin_tone"
                    ],
                    "surrogates": "🦻🏾"
                },
                "1f3ff": {
                    "name": "ear_with_hearing_aid_tone5",
                    "names": [
                        "ear_with_hearing_aid_tone5",
                        "ear_with_hearing_aid_dark_skin_tone"
                    ],
                    "surrogates": "🦻🏿"
                }
            }
        },
        "nose": {
            "name": "nose",
            "names": [
                "nose"
            ],
            "surrogates": "👃",
            "diversityChildren": {
                "1f3fb": {
                    "name": "nose_tone1",
                    "names": [
                        "nose_tone1"
                    ],
                    "surrogates": "👃🏻"
                },
                "1f3fc": {
                    "name": "nose_tone2",
                    "names": [
                        "nose_tone2"
                    ],
                    "surrogates": "👃🏼"
                },
                "1f3fd": {
                    "name": "nose_tone3",
                    "names": [
                        "nose_tone3"
                    ],
                    "surrogates": "👃🏽"
                },
                "1f3fe": {
                    "name": "nose_tone4",
                    "names": [
                        "nose_tone4"
                    ],
                    "surrogates": "👃🏾"
                },
                "1f3ff": {
                    "name": "nose_tone5",
                    "names": [
                        "nose_tone5"
                    ],
                    "surrogates": "👃🏿"
                }
            }
        },
        "footprints": {
            "name": "footprints",
            "names": [
                "footprints"
            ],
            "surrogates": "👣"
        },
        "eye": {
            "name": "eye",
            "names": [
                "eye"
            ],
            "surrogates": "👁️"
        },
        "eyes": {
            "name": "eyes",
            "names": [
                "eyes"
            ],
            "surrogates": "👀"
        },
        "anatomical_heart": {
            "name": "anatomical_heart",
            "names": [
                "anatomical_heart"
            ],
            "surrogates": "🫀"
        },
        "lungs": {
            "name": "lungs",
            "names": [
                "lungs"
            ],
            "surrogates": "🫁"
        },
        "brain": {
            "name": "brain",
            "names": [
                "brain"
            ],
            "surrogates": "🧠"
        },
        "speaking_head": {
            "name": "speaking_head",
            "names": [
                "speaking_head",
                "speaking_head_in_silhouette"
            ],
            "surrogates": "🗣️"
        },
        "bust_in_silhouette": {
            "name": "bust_in_silhouette",
            "names": [
                "bust_in_silhouette"
            ],
            "surrogates": "👤"
        },
        "busts_in_silhouette": {
            "name": "busts_in_silhouette",
            "names": [
                "busts_in_silhouette"
            ],
            "surrogates": "👥"
        },
        "people_hugging": {
            "name": "people_hugging",
            "names": [
                "people_hugging"
            ],
            "surrogates": "🫂"
        },
        "baby": {
            "name": "baby",
            "names": [
                "baby"
            ],
            "surrogates": "👶",
            "diversityChildren": {
                "1f3fb": {
                    "name": "baby_tone1",
                    "names": [
                        "baby_tone1"
                    ],
                    "surrogates": "👶🏻"
                },
                "1f3fc": {
                    "name": "baby_tone2",
                    "names": [
                        "baby_tone2"
                    ],
                    "surrogates": "👶🏼"
                },
                "1f3fd": {
                    "name": "baby_tone3",
                    "names": [
                        "baby_tone3"
                    ],
                    "surrogates": "👶🏽"
                },
                "1f3fe": {
                    "name": "baby_tone4",
                    "names": [
                        "baby_tone4"
                    ],
                    "surrogates": "👶🏾"
                },
                "1f3ff": {
                    "name": "baby_tone5",
                    "names": [
                        "baby_tone5"
                    ],
                    "surrogates": "👶🏿"
                }
            }
        },
        "child": {
            "name": "child",
            "names": [
                "child"
            ],
            "surrogates": "🧒",
            "diversityChildren": {
                "1f3fb": {
                    "name": "child_tone1",
                    "names": [
                        "child_tone1",
                        "child_light_skin_tone"
                    ],
                    "surrogates": "🧒🏻"
                },
                "1f3fc": {
                    "name": "child_tone2",
                    "names": [
                        "child_tone2",
                        "child_medium_light_skin_tone"
                    ],
                    "surrogates": "🧒🏼"
                },
                "1f3fd": {
                    "name": "child_tone3",
                    "names": [
                        "child_tone3",
                        "child_medium_skin_tone"
                    ],
                    "surrogates": "🧒🏽"
                },
                "1f3fe": {
                    "name": "child_tone4",
                    "names": [
                        "child_tone4",
                        "child_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧒🏾"
                },
                "1f3ff": {
                    "name": "child_tone5",
                    "names": [
                        "child_tone5",
                        "child_dark_skin_tone"
                    ],
                    "surrogates": "🧒🏿"
                }
            }
        },
        "girl": {
            "name": "girl",
            "names": [
                "girl"
            ],
            "surrogates": "👧",
            "diversityChildren": {
                "1f3fb": {
                    "name": "girl_tone1",
                    "names": [
                        "girl_tone1"
                    ],
                    "surrogates": "👧🏻"
                },
                "1f3fc": {
                    "name": "girl_tone2",
                    "names": [
                        "girl_tone2"
                    ],
                    "surrogates": "👧🏼"
                },
                "1f3fd": {
                    "name": "girl_tone3",
                    "names": [
                        "girl_tone3"
                    ],
                    "surrogates": "👧🏽"
                },
                "1f3fe": {
                    "name": "girl_tone4",
                    "names": [
                        "girl_tone4"
                    ],
                    "surrogates": "👧🏾"
                },
                "1f3ff": {
                    "name": "girl_tone5",
                    "names": [
                        "girl_tone5"
                    ],
                    "surrogates": "👧🏿"
                }
            }
        },
        "boy": {
            "name": "boy",
            "names": [
                "boy"
            ],
            "surrogates": "👦",
            "diversityChildren": {
                "1f3fb": {
                    "name": "boy_tone1",
                    "names": [
                        "boy_tone1"
                    ],
                    "surrogates": "👦🏻"
                },
                "1f3fc": {
                    "name": "boy_tone2",
                    "names": [
                        "boy_tone2"
                    ],
                    "surrogates": "👦🏼"
                },
                "1f3fd": {
                    "name": "boy_tone3",
                    "names": [
                        "boy_tone3"
                    ],
                    "surrogates": "👦🏽"
                },
                "1f3fe": {
                    "name": "boy_tone4",
                    "names": [
                        "boy_tone4"
                    ],
                    "surrogates": "👦🏾"
                },
                "1f3ff": {
                    "name": "boy_tone5",
                    "names": [
                        "boy_tone5"
                    ],
                    "surrogates": "👦🏿"
                }
            }
        },
        "adult": {
            "name": "adult",
            "names": [
                "adult",
                "person"
            ],
            "surrogates": "🧑",
            "diversityChildren": {
                "1f3fb": {
                    "name": "adult_tone1",
                    "names": [
                        "adult_tone1",
                        "adult_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻"
                },
                "1f3fc": {
                    "name": "adult_tone2",
                    "names": [
                        "adult_tone2",
                        "adult_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼"
                },
                "1f3fd": {
                    "name": "adult_tone3",
                    "names": [
                        "adult_tone3",
                        "adult_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽"
                },
                "1f3fe": {
                    "name": "adult_tone4",
                    "names": [
                        "adult_tone4",
                        "adult_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾"
                },
                "1f3ff": {
                    "name": "adult_tone5",
                    "names": [
                        "adult_tone5",
                        "adult_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿"
                }
            }
        },
        "woman": {
            "name": "woman",
            "names": [
                "woman"
            ],
            "surrogates": "👩",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_tone1",
                    "names": [
                        "woman_tone1"
                    ],
                    "surrogates": "👩🏻"
                },
                "1f3fc": {
                    "name": "woman_tone2",
                    "names": [
                        "woman_tone2"
                    ],
                    "surrogates": "👩🏼"
                },
                "1f3fd": {
                    "name": "woman_tone3",
                    "names": [
                        "woman_tone3"
                    ],
                    "surrogates": "👩🏽"
                },
                "1f3fe": {
                    "name": "woman_tone4",
                    "names": [
                        "woman_tone4"
                    ],
                    "surrogates": "👩🏾"
                },
                "1f3ff": {
                    "name": "woman_tone5",
                    "names": [
                        "woman_tone5"
                    ],
                    "surrogates": "👩🏿"
                }
            }
        },
        "man": {
            "name": "man",
            "names": [
                "man"
            ],
            "surrogates": "👨",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_tone1",
                    "names": [
                        "man_tone1"
                    ],
                    "surrogates": "👨🏻"
                },
                "1f3fc": {
                    "name": "man_tone2",
                    "names": [
                        "man_tone2"
                    ],
                    "surrogates": "👨🏼"
                },
                "1f3fd": {
                    "name": "man_tone3",
                    "names": [
                        "man_tone3"
                    ],
                    "surrogates": "👨🏽"
                },
                "1f3fe": {
                    "name": "man_tone4",
                    "names": [
                        "man_tone4"
                    ],
                    "surrogates": "👨🏾"
                },
                "1f3ff": {
                    "name": "man_tone5",
                    "names": [
                        "man_tone5"
                    ],
                    "surrogates": "👨🏿"
                }
            }
        },
        "person_curly_hair": {
            "name": "person_curly_hair",
            "names": [
                "person_curly_hair"
            ],
            "surrogates": "🧑‍🦱",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_tone1_curly_hair",
                    "names": [
                        "person_tone1_curly_hair",
                        "person_light_skin_tone_curly_hair"
                    ],
                    "surrogates": "🧑🏻‍🦱"
                },
                "1f3fc": {
                    "name": "person_tone2_curly_hair",
                    "names": [
                        "person_tone2_curly_hair",
                        "person_medium_light_skin_tone_curly_hair"
                    ],
                    "surrogates": "🧑🏼‍🦱"
                },
                "1f3fd": {
                    "name": "person_tone3_curly_hair",
                    "names": [
                        "person_tone3_curly_hair",
                        "person_medium_skin_tone_curly_hair"
                    ],
                    "surrogates": "🧑🏽‍🦱"
                },
                "1f3fe": {
                    "name": "person_tone4_curly_hair",
                    "names": [
                        "person_tone4_curly_hair",
                        "person_medium_dark_skin_tone_curly_hair"
                    ],
                    "surrogates": "🧑🏾‍🦱"
                },
                "1f3ff": {
                    "name": "person_tone5_curly_hair",
                    "names": [
                        "person_tone5_curly_hair",
                        "person_dark_skin_tone_curly_hair"
                    ],
                    "surrogates": "🧑🏿‍🦱"
                }
            }
        },
        "woman_curly_haired": {
            "name": "woman_curly_haired",
            "names": [
                "woman_curly_haired"
            ],
            "surrogates": "👩‍🦱",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_curly_haired_tone1",
                    "names": [
                        "woman_curly_haired_tone1",
                        "woman_curly_haired_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🦱"
                },
                "1f3fc": {
                    "name": "woman_curly_haired_tone2",
                    "names": [
                        "woman_curly_haired_tone2",
                        "woman_curly_haired_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🦱"
                },
                "1f3fd": {
                    "name": "woman_curly_haired_tone3",
                    "names": [
                        "woman_curly_haired_tone3",
                        "woman_curly_haired_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🦱"
                },
                "1f3fe": {
                    "name": "woman_curly_haired_tone4",
                    "names": [
                        "woman_curly_haired_tone4",
                        "woman_curly_haired_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🦱"
                },
                "1f3ff": {
                    "name": "woman_curly_haired_tone5",
                    "names": [
                        "woman_curly_haired_tone5",
                        "woman_curly_haired_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🦱"
                }
            }
        },
        "man_curly_haired": {
            "name": "man_curly_haired",
            "names": [
                "man_curly_haired"
            ],
            "surrogates": "👨‍🦱",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_curly_haired_tone1",
                    "names": [
                        "man_curly_haired_tone1",
                        "man_curly_haired_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🦱"
                },
                "1f3fc": {
                    "name": "man_curly_haired_tone2",
                    "names": [
                        "man_curly_haired_tone2",
                        "man_curly_haired_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🦱"
                },
                "1f3fd": {
                    "name": "man_curly_haired_tone3",
                    "names": [
                        "man_curly_haired_tone3",
                        "man_curly_haired_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🦱"
                },
                "1f3fe": {
                    "name": "man_curly_haired_tone4",
                    "names": [
                        "man_curly_haired_tone4",
                        "man_curly_haired_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🦱"
                },
                "1f3ff": {
                    "name": "man_curly_haired_tone5",
                    "names": [
                        "man_curly_haired_tone5",
                        "man_curly_haired_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🦱"
                }
            }
        },
        "person_red_hair": {
            "name": "person_red_hair",
            "names": [
                "person_red_hair"
            ],
            "surrogates": "🧑‍🦰",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_tone1_red_hair",
                    "names": [
                        "person_tone1_red_hair",
                        "person_light_skin_tone_red_hair"
                    ],
                    "surrogates": "🧑🏻‍🦰"
                },
                "1f3fc": {
                    "name": "person_tone2_red_hair",
                    "names": [
                        "person_tone2_red_hair",
                        "person_medium_light_skin_tone_red_hair"
                    ],
                    "surrogates": "🧑🏼‍🦰"
                },
                "1f3fd": {
                    "name": "person_tone3_red_hair",
                    "names": [
                        "person_tone3_red_hair",
                        "person_medium_skin_tone_red_hair"
                    ],
                    "surrogates": "🧑🏽‍🦰"
                },
                "1f3fe": {
                    "name": "person_tone4_red_hair",
                    "names": [
                        "person_tone4_red_hair",
                        "person_medium_dark_skin_tone_red_hair"
                    ],
                    "surrogates": "🧑🏾‍🦰"
                },
                "1f3ff": {
                    "name": "person_tone5_red_hair",
                    "names": [
                        "person_tone5_red_hair",
                        "person_dark_skin_tone_red_hair"
                    ],
                    "surrogates": "🧑🏿‍🦰"
                }
            }
        },
        "woman_red_haired": {
            "name": "woman_red_haired",
            "names": [
                "woman_red_haired"
            ],
            "surrogates": "👩‍🦰",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_red_haired_tone1",
                    "names": [
                        "woman_red_haired_tone1",
                        "woman_red_haired_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🦰"
                },
                "1f3fc": {
                    "name": "woman_red_haired_tone2",
                    "names": [
                        "woman_red_haired_tone2",
                        "woman_red_haired_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🦰"
                },
                "1f3fd": {
                    "name": "woman_red_haired_tone3",
                    "names": [
                        "woman_red_haired_tone3",
                        "woman_red_haired_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🦰"
                },
                "1f3fe": {
                    "name": "woman_red_haired_tone4",
                    "names": [
                        "woman_red_haired_tone4",
                        "woman_red_haired_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🦰"
                },
                "1f3ff": {
                    "name": "woman_red_haired_tone5",
                    "names": [
                        "woman_red_haired_tone5",
                        "woman_red_haired_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🦰"
                }
            }
        },
        "man_red_haired": {
            "name": "man_red_haired",
            "names": [
                "man_red_haired",
                "man_red_hair"
            ],
            "surrogates": "👨‍🦰",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_red_haired_tone1",
                    "names": [
                        "man_red_haired_tone1",
                        "man_red_haired_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🦰"
                },
                "1f3fc": {
                    "name": "man_red_haired_tone2",
                    "names": [
                        "man_red_haired_tone2",
                        "man_red_haired_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🦰"
                },
                "1f3fd": {
                    "name": "man_red_haired_tone3",
                    "names": [
                        "man_red_haired_tone3",
                        "man_red_haired_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🦰"
                },
                "1f3fe": {
                    "name": "man_red_haired_tone4",
                    "names": [
                        "man_red_haired_tone4",
                        "man_red_haired_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🦰"
                },
                "1f3ff": {
                    "name": "man_red_haired_tone5",
                    "names": [
                        "man_red_haired_tone5",
                        "man_red_haired_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🦰"
                }
            }
        },
        "blond_haired_person": {
            "name": "blond_haired_person",
            "names": [
                "blond_haired_person",
                "person_with_blond_hair"
            ],
            "surrogates": "👱",
            "diversityChildren": {
                "1f3fb": {
                    "name": "blond_haired_person_tone1",
                    "names": [
                        "blond_haired_person_tone1",
                        "person_with_blond_hair_tone1"
                    ],
                    "surrogates": "👱🏻"
                },
                "1f3fc": {
                    "name": "blond_haired_person_tone2",
                    "names": [
                        "blond_haired_person_tone2",
                        "person_with_blond_hair_tone2"
                    ],
                    "surrogates": "👱🏼"
                },
                "1f3fd": {
                    "name": "blond_haired_person_tone3",
                    "names": [
                        "blond_haired_person_tone3",
                        "person_with_blond_hair_tone3"
                    ],
                    "surrogates": "👱🏽"
                },
                "1f3fe": {
                    "name": "blond_haired_person_tone4",
                    "names": [
                        "blond_haired_person_tone4",
                        "person_with_blond_hair_tone4"
                    ],
                    "surrogates": "👱🏾"
                },
                "1f3ff": {
                    "name": "blond_haired_person_tone5",
                    "names": [
                        "blond_haired_person_tone5",
                        "person_with_blond_hair_tone5"
                    ],
                    "surrogates": "👱🏿"
                }
            }
        },
        "blond_haired_woman": {
            "name": "blond_haired_woman",
            "names": [
                "blond_haired_woman"
            ],
            "surrogates": "👱‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "blond_haired_woman_tone1",
                    "names": [
                        "blond_haired_woman_tone1",
                        "blond_haired_woman_light_skin_tone"
                    ],
                    "surrogates": "👱🏻‍♀️"
                },
                "1f3fc": {
                    "name": "blond_haired_woman_tone2",
                    "names": [
                        "blond_haired_woman_tone2",
                        "blond_haired_woman_medium_light_skin_tone"
                    ],
                    "surrogates": "👱🏼‍♀️"
                },
                "1f3fd": {
                    "name": "blond_haired_woman_tone3",
                    "names": [
                        "blond_haired_woman_tone3",
                        "blond_haired_woman_medium_skin_tone"
                    ],
                    "surrogates": "👱🏽‍♀️"
                },
                "1f3fe": {
                    "name": "blond_haired_woman_tone4",
                    "names": [
                        "blond_haired_woman_tone4",
                        "blond_haired_woman_medium_dark_skin_tone"
                    ],
                    "surrogates": "👱🏾‍♀️"
                },
                "1f3ff": {
                    "name": "blond_haired_woman_tone5",
                    "names": [
                        "blond_haired_woman_tone5",
                        "blond_haired_woman_dark_skin_tone"
                    ],
                    "surrogates": "👱🏿‍♀️"
                }
            }
        },
        "blond_haired_man": {
            "name": "blond_haired_man",
            "names": [
                "blond_haired_man"
            ],
            "surrogates": "👱‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "blond_haired_man_tone1",
                    "names": [
                        "blond_haired_man_tone1",
                        "blond_haired_man_light_skin_tone"
                    ],
                    "surrogates": "👱🏻‍♂️"
                },
                "1f3fc": {
                    "name": "blond_haired_man_tone2",
                    "names": [
                        "blond_haired_man_tone2",
                        "blond_haired_man_medium_light_skin_tone"
                    ],
                    "surrogates": "👱🏼‍♂️"
                },
                "1f3fd": {
                    "name": "blond_haired_man_tone3",
                    "names": [
                        "blond_haired_man_tone3",
                        "blond_haired_man_medium_skin_tone"
                    ],
                    "surrogates": "👱🏽‍♂️"
                },
                "1f3fe": {
                    "name": "blond_haired_man_tone4",
                    "names": [
                        "blond_haired_man_tone4",
                        "blond_haired_man_medium_dark_skin_tone"
                    ],
                    "surrogates": "👱🏾‍♂️"
                },
                "1f3ff": {
                    "name": "blond_haired_man_tone5",
                    "names": [
                        "blond_haired_man_tone5",
                        "blond_haired_man_dark_skin_tone"
                    ],
                    "surrogates": "👱🏿‍♂️"
                }
            }
        },
        "person_white_hair": {
            "name": "person_white_hair",
            "names": [
                "person_white_hair"
            ],
            "surrogates": "🧑‍🦳",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_tone1_white_hair",
                    "names": [
                        "person_tone1_white_hair",
                        "person_light_skin_tone_white_hair"
                    ],
                    "surrogates": "🧑🏻‍🦳"
                },
                "1f3fc": {
                    "name": "person_tone2_white_hair",
                    "names": [
                        "person_tone2_white_hair",
                        "person_medium_light_skin_tone_white_hair"
                    ],
                    "surrogates": "🧑🏼‍🦳"
                },
                "1f3fd": {
                    "name": "person_tone3_white_hair",
                    "names": [
                        "person_tone3_white_hair",
                        "person_medium_skin_tone_white_hair"
                    ],
                    "surrogates": "🧑🏽‍🦳"
                },
                "1f3fe": {
                    "name": "person_tone4_white_hair",
                    "names": [
                        "person_tone4_white_hair",
                        "person_medium_dark_skin_tone_white_hair"
                    ],
                    "surrogates": "🧑🏾‍🦳"
                },
                "1f3ff": {
                    "name": "person_tone5_white_hair",
                    "names": [
                        "person_tone5_white_hair",
                        "person_dark_skin_tone_white_hair"
                    ],
                    "surrogates": "🧑🏿‍🦳"
                }
            }
        },
        "woman_white_haired": {
            "name": "woman_white_haired",
            "names": [
                "woman_white_haired"
            ],
            "surrogates": "👩‍🦳",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_white_haired_tone1",
                    "names": [
                        "woman_white_haired_tone1",
                        "woman_white_haired_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🦳"
                },
                "1f3fc": {
                    "name": "woman_white_haired_tone2",
                    "names": [
                        "woman_white_haired_tone2",
                        "woman_white_haired_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🦳"
                },
                "1f3fd": {
                    "name": "woman_white_haired_tone3",
                    "names": [
                        "woman_white_haired_tone3",
                        "woman_white_haired_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🦳"
                },
                "1f3fe": {
                    "name": "woman_white_haired_tone4",
                    "names": [
                        "woman_white_haired_tone4",
                        "woman_white_haired_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🦳"
                },
                "1f3ff": {
                    "name": "woman_white_haired_tone5",
                    "names": [
                        "woman_white_haired_tone5",
                        "woman_white_haired_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🦳"
                }
            }
        },
        "man_white_haired": {
            "name": "man_white_haired",
            "names": [
                "man_white_haired"
            ],
            "surrogates": "👨‍🦳",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_white_haired_tone1",
                    "names": [
                        "man_white_haired_tone1",
                        "man_white_haired_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🦳"
                },
                "1f3fc": {
                    "name": "man_white_haired_tone2",
                    "names": [
                        "man_white_haired_tone2",
                        "man_white_haired_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🦳"
                },
                "1f3fd": {
                    "name": "man_white_haired_tone3",
                    "names": [
                        "man_white_haired_tone3",
                        "man_white_haired_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🦳"
                },
                "1f3fe": {
                    "name": "man_white_haired_tone4",
                    "names": [
                        "man_white_haired_tone4",
                        "man_white_haired_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🦳"
                },
                "1f3ff": {
                    "name": "man_white_haired_tone5",
                    "names": [
                        "man_white_haired_tone5",
                        "man_white_haired_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🦳"
                }
            }
        },
        "person_bald": {
            "name": "person_bald",
            "names": [
                "person_bald"
            ],
            "surrogates": "🧑‍🦲",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_tone1_bald",
                    "names": [
                        "person_tone1_bald",
                        "person_light_skin_tone_bald"
                    ],
                    "surrogates": "🧑🏻‍🦲"
                },
                "1f3fc": {
                    "name": "person_tone2_bald",
                    "names": [
                        "person_tone2_bald",
                        "person_medium_light_skin_tone_bald"
                    ],
                    "surrogates": "🧑🏼‍🦲"
                },
                "1f3fd": {
                    "name": "person_tone3_bald",
                    "names": [
                        "person_tone3_bald",
                        "person_medium_skin_tone_bald"
                    ],
                    "surrogates": "🧑🏽‍🦲"
                },
                "1f3fe": {
                    "name": "person_tone4_bald",
                    "names": [
                        "person_tone4_bald",
                        "person_medium_dark_skin_tone_bald"
                    ],
                    "surrogates": "🧑🏾‍🦲"
                },
                "1f3ff": {
                    "name": "person_tone5_bald",
                    "names": [
                        "person_tone5_bald",
                        "person_dark_skin_tone_bald"
                    ],
                    "surrogates": "🧑🏿‍🦲"
                }
            }
        },
        "woman_bald": {
            "name": "woman_bald",
            "names": [
                "woman_bald"
            ],
            "surrogates": "👩‍🦲",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_bald_tone1",
                    "names": [
                        "woman_bald_tone1",
                        "woman_bald_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🦲"
                },
                "1f3fc": {
                    "name": "woman_bald_tone2",
                    "names": [
                        "woman_bald_tone2",
                        "woman_bald_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🦲"
                },
                "1f3fd": {
                    "name": "woman_bald_tone3",
                    "names": [
                        "woman_bald_tone3",
                        "woman_bald_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🦲"
                },
                "1f3fe": {
                    "name": "woman_bald_tone4",
                    "names": [
                        "woman_bald_tone4",
                        "woman_bald_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🦲"
                },
                "1f3ff": {
                    "name": "woman_bald_tone5",
                    "names": [
                        "woman_bald_tone5",
                        "woman_bald_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🦲"
                }
            }
        },
        "man_bald": {
            "name": "man_bald",
            "names": [
                "man_bald"
            ],
            "surrogates": "👨‍🦲",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_bald_tone1",
                    "names": [
                        "man_bald_tone1",
                        "man_bald_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🦲"
                },
                "1f3fc": {
                    "name": "man_bald_tone2",
                    "names": [
                        "man_bald_tone2",
                        "man_bald_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🦲"
                },
                "1f3fd": {
                    "name": "man_bald_tone3",
                    "names": [
                        "man_bald_tone3",
                        "man_bald_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🦲"
                },
                "1f3fe": {
                    "name": "man_bald_tone4",
                    "names": [
                        "man_bald_tone4",
                        "man_bald_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🦲"
                },
                "1f3ff": {
                    "name": "man_bald_tone5",
                    "names": [
                        "man_bald_tone5",
                        "man_bald_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🦲"
                }
            }
        },
        "bearded_person": {
            "name": "bearded_person",
            "names": [
                "bearded_person",
                "person_beard"
            ],
            "surrogates": "🧔",
            "diversityChildren": {
                "1f3fb": {
                    "name": "bearded_person_tone1",
                    "names": [
                        "bearded_person_tone1",
                        "bearded_person_light_skin_tone"
                    ],
                    "surrogates": "🧔🏻"
                },
                "1f3fc": {
                    "name": "bearded_person_tone2",
                    "names": [
                        "bearded_person_tone2",
                        "bearded_person_medium_light_skin_tone"
                    ],
                    "surrogates": "🧔🏼"
                },
                "1f3fd": {
                    "name": "bearded_person_tone3",
                    "names": [
                        "bearded_person_tone3",
                        "bearded_person_medium_skin_tone"
                    ],
                    "surrogates": "🧔🏽"
                },
                "1f3fe": {
                    "name": "bearded_person_tone4",
                    "names": [
                        "bearded_person_tone4",
                        "bearded_person_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧔🏾"
                },
                "1f3ff": {
                    "name": "bearded_person_tone5",
                    "names": [
                        "bearded_person_tone5",
                        "bearded_person_dark_skin_tone"
                    ],
                    "surrogates": "🧔🏿"
                }
            }
        },
        "woman_beard": {
            "name": "woman_beard",
            "names": [
                "woman_beard"
            ],
            "surrogates": "🧔‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_tone1_beard",
                    "names": [
                        "woman_tone1_beard",
                        "woman_light_skin_tone_beard"
                    ],
                    "surrogates": "🧔🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_tone2_beard",
                    "names": [
                        "woman_tone2_beard",
                        "woman_medium_light_skin_tone_beard"
                    ],
                    "surrogates": "🧔🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_tone3_beard",
                    "names": [
                        "woman_tone3_beard",
                        "woman_medium_skin_tone_beard"
                    ],
                    "surrogates": "🧔🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_tone4_beard",
                    "names": [
                        "woman_tone4_beard",
                        "woman_medium_dark_skin_tone_beard"
                    ],
                    "surrogates": "🧔🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_tone5_beard",
                    "names": [
                        "woman_tone5_beard",
                        "woman_dark_skin_tone_beard"
                    ],
                    "surrogates": "🧔🏿‍♀️"
                }
            }
        },
        "man_beard": {
            "name": "man_beard",
            "names": [
                "man_beard"
            ],
            "surrogates": "🧔‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_tone1_beard",
                    "names": [
                        "man_tone1_beard",
                        "man_light_skin_tone_beard"
                    ],
                    "surrogates": "🧔🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_tone2_beard",
                    "names": [
                        "man_tone2_beard",
                        "man_medium_light_skin_tone_beard"
                    ],
                    "surrogates": "🧔🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_tone3_beard",
                    "names": [
                        "man_tone3_beard",
                        "man_medium_skin_tone_beard"
                    ],
                    "surrogates": "🧔🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_tone4_beard",
                    "names": [
                        "man_tone4_beard",
                        "man_medium_dark_skin_tone_beard"
                    ],
                    "surrogates": "🧔🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_tone5_beard",
                    "names": [
                        "man_tone5_beard",
                        "man_dark_skin_tone_beard"
                    ],
                    "surrogates": "🧔🏿‍♂️"
                }
            }
        },
        "older_adult": {
            "name": "older_adult",
            "names": [
                "older_adult",
                "older_person"
            ],
            "surrogates": "🧓",
            "diversityChildren": {
                "1f3fb": {
                    "name": "older_adult_tone1",
                    "names": [
                        "older_adult_tone1",
                        "older_adult_light_skin_tone"
                    ],
                    "surrogates": "🧓🏻"
                },
                "1f3fc": {
                    "name": "older_adult_tone2",
                    "names": [
                        "older_adult_tone2",
                        "older_adult_medium_light_skin_tone"
                    ],
                    "surrogates": "🧓🏼"
                },
                "1f3fd": {
                    "name": "older_adult_tone3",
                    "names": [
                        "older_adult_tone3",
                        "older_adult_medium_skin_tone"
                    ],
                    "surrogates": "🧓🏽"
                },
                "1f3fe": {
                    "name": "older_adult_tone4",
                    "names": [
                        "older_adult_tone4",
                        "older_adult_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧓🏾"
                },
                "1f3ff": {
                    "name": "older_adult_tone5",
                    "names": [
                        "older_adult_tone5",
                        "older_adult_dark_skin_tone"
                    ],
                    "surrogates": "🧓🏿"
                }
            }
        },
        "older_woman": {
            "name": "older_woman",
            "names": [
                "older_woman",
                "grandma",
                "old_woman"
            ],
            "surrogates": "👵",
            "diversityChildren": {
                "1f3fb": {
                    "name": "older_woman_tone1",
                    "names": [
                        "older_woman_tone1",
                        "grandma_tone1"
                    ],
                    "surrogates": "👵🏻"
                },
                "1f3fc": {
                    "name": "older_woman_tone2",
                    "names": [
                        "older_woman_tone2",
                        "grandma_tone2"
                    ],
                    "surrogates": "👵🏼"
                },
                "1f3fd": {
                    "name": "older_woman_tone3",
                    "names": [
                        "older_woman_tone3",
                        "grandma_tone3"
                    ],
                    "surrogates": "👵🏽"
                },
                "1f3fe": {
                    "name": "older_woman_tone4",
                    "names": [
                        "older_woman_tone4",
                        "grandma_tone4"
                    ],
                    "surrogates": "👵🏾"
                },
                "1f3ff": {
                    "name": "older_woman_tone5",
                    "names": [
                        "older_woman_tone5",
                        "grandma_tone5"
                    ],
                    "surrogates": "👵🏿"
                }
            }
        },
        "older_man": {
            "name": "older_man",
            "names": [
                "older_man",
                "old_man"
            ],
            "surrogates": "👴",
            "diversityChildren": {
                "1f3fb": {
                    "name": "older_man_tone1",
                    "names": [
                        "older_man_tone1"
                    ],
                    "surrogates": "👴🏻"
                },
                "1f3fc": {
                    "name": "older_man_tone2",
                    "names": [
                        "older_man_tone2"
                    ],
                    "surrogates": "👴🏼"
                },
                "1f3fd": {
                    "name": "older_man_tone3",
                    "names": [
                        "older_man_tone3"
                    ],
                    "surrogates": "👴🏽"
                },
                "1f3fe": {
                    "name": "older_man_tone4",
                    "names": [
                        "older_man_tone4"
                    ],
                    "surrogates": "👴🏾"
                },
                "1f3ff": {
                    "name": "older_man_tone5",
                    "names": [
                        "older_man_tone5"
                    ],
                    "surrogates": "👴🏿"
                }
            }
        },
        "man_with_chinese_cap": {
            "name": "man_with_chinese_cap",
            "names": [
                "man_with_chinese_cap",
                "man_with_gua_pi_mao"
            ],
            "surrogates": "👲",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_with_chinese_cap_tone1",
                    "names": [
                        "man_with_chinese_cap_tone1",
                        "man_with_gua_pi_mao_tone1"
                    ],
                    "surrogates": "👲🏻"
                },
                "1f3fc": {
                    "name": "man_with_chinese_cap_tone2",
                    "names": [
                        "man_with_chinese_cap_tone2",
                        "man_with_gua_pi_mao_tone2"
                    ],
                    "surrogates": "👲🏼"
                },
                "1f3fd": {
                    "name": "man_with_chinese_cap_tone3",
                    "names": [
                        "man_with_chinese_cap_tone3",
                        "man_with_gua_pi_mao_tone3"
                    ],
                    "surrogates": "👲🏽"
                },
                "1f3fe": {
                    "name": "man_with_chinese_cap_tone4",
                    "names": [
                        "man_with_chinese_cap_tone4",
                        "man_with_gua_pi_mao_tone4"
                    ],
                    "surrogates": "👲🏾"
                },
                "1f3ff": {
                    "name": "man_with_chinese_cap_tone5",
                    "names": [
                        "man_with_chinese_cap_tone5",
                        "man_with_gua_pi_mao_tone5"
                    ],
                    "surrogates": "👲🏿"
                }
            }
        },
        "person_wearing_turban": {
            "name": "person_wearing_turban",
            "names": [
                "person_wearing_turban",
                "man_with_turban"
            ],
            "surrogates": "👳",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_wearing_turban_tone1",
                    "names": [
                        "person_wearing_turban_tone1",
                        "man_with_turban_tone1"
                    ],
                    "surrogates": "👳🏻"
                },
                "1f3fc": {
                    "name": "person_wearing_turban_tone2",
                    "names": [
                        "person_wearing_turban_tone2",
                        "man_with_turban_tone2"
                    ],
                    "surrogates": "👳🏼"
                },
                "1f3fd": {
                    "name": "person_wearing_turban_tone3",
                    "names": [
                        "person_wearing_turban_tone3",
                        "man_with_turban_tone3"
                    ],
                    "surrogates": "👳🏽"
                },
                "1f3fe": {
                    "name": "person_wearing_turban_tone4",
                    "names": [
                        "person_wearing_turban_tone4",
                        "man_with_turban_tone4"
                    ],
                    "surrogates": "👳🏾"
                },
                "1f3ff": {
                    "name": "person_wearing_turban_tone5",
                    "names": [
                        "person_wearing_turban_tone5",
                        "man_with_turban_tone5"
                    ],
                    "surrogates": "👳🏿"
                }
            }
        },
        "woman_wearing_turban": {
            "name": "woman_wearing_turban",
            "names": [
                "woman_wearing_turban"
            ],
            "surrogates": "👳‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_wearing_turban_tone1",
                    "names": [
                        "woman_wearing_turban_tone1",
                        "woman_wearing_turban_light_skin_tone"
                    ],
                    "surrogates": "👳🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_wearing_turban_tone2",
                    "names": [
                        "woman_wearing_turban_tone2",
                        "woman_wearing_turban_medium_light_skin_tone"
                    ],
                    "surrogates": "👳🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_wearing_turban_tone3",
                    "names": [
                        "woman_wearing_turban_tone3",
                        "woman_wearing_turban_medium_skin_tone"
                    ],
                    "surrogates": "👳🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_wearing_turban_tone4",
                    "names": [
                        "woman_wearing_turban_tone4",
                        "woman_wearing_turban_medium_dark_skin_tone"
                    ],
                    "surrogates": "👳🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_wearing_turban_tone5",
                    "names": [
                        "woman_wearing_turban_tone5",
                        "woman_wearing_turban_dark_skin_tone"
                    ],
                    "surrogates": "👳🏿‍♀️"
                }
            }
        },
        "man_wearing_turban": {
            "name": "man_wearing_turban",
            "names": [
                "man_wearing_turban"
            ],
            "surrogates": "👳‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_wearing_turban_tone1",
                    "names": [
                        "man_wearing_turban_tone1",
                        "man_wearing_turban_light_skin_tone"
                    ],
                    "surrogates": "👳🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_wearing_turban_tone2",
                    "names": [
                        "man_wearing_turban_tone2",
                        "man_wearing_turban_medium_light_skin_tone"
                    ],
                    "surrogates": "👳🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_wearing_turban_tone3",
                    "names": [
                        "man_wearing_turban_tone3",
                        "man_wearing_turban_medium_skin_tone"
                    ],
                    "surrogates": "👳🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_wearing_turban_tone4",
                    "names": [
                        "man_wearing_turban_tone4",
                        "man_wearing_turban_medium_dark_skin_tone"
                    ],
                    "surrogates": "👳🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_wearing_turban_tone5",
                    "names": [
                        "man_wearing_turban_tone5",
                        "man_wearing_turban_dark_skin_tone"
                    ],
                    "surrogates": "👳🏿‍♂️"
                }
            }
        },
        "woman_with_headscarf": {
            "name": "woman_with_headscarf",
            "names": [
                "woman_with_headscarf"
            ],
            "surrogates": "🧕",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_with_headscarf_tone1",
                    "names": [
                        "woman_with_headscarf_tone1",
                        "woman_with_headscarf_light_skin_tone"
                    ],
                    "surrogates": "🧕🏻"
                },
                "1f3fc": {
                    "name": "woman_with_headscarf_tone2",
                    "names": [
                        "woman_with_headscarf_tone2",
                        "woman_with_headscarf_medium_light_skin_tone"
                    ],
                    "surrogates": "🧕🏼"
                },
                "1f3fd": {
                    "name": "woman_with_headscarf_tone3",
                    "names": [
                        "woman_with_headscarf_tone3",
                        "woman_with_headscarf_medium_skin_tone"
                    ],
                    "surrogates": "🧕🏽"
                },
                "1f3fe": {
                    "name": "woman_with_headscarf_tone4",
                    "names": [
                        "woman_with_headscarf_tone4",
                        "woman_with_headscarf_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧕🏾"
                },
                "1f3ff": {
                    "name": "woman_with_headscarf_tone5",
                    "names": [
                        "woman_with_headscarf_tone5",
                        "woman_with_headscarf_dark_skin_tone"
                    ],
                    "surrogates": "🧕🏿"
                }
            }
        },
        "police_officer": {
            "name": "police_officer",
            "names": [
                "police_officer",
                "cop"
            ],
            "surrogates": "👮",
            "diversityChildren": {
                "1f3fb": {
                    "name": "police_officer_tone1",
                    "names": [
                        "police_officer_tone1",
                        "cop_tone1"
                    ],
                    "surrogates": "👮🏻"
                },
                "1f3fc": {
                    "name": "police_officer_tone2",
                    "names": [
                        "police_officer_tone2",
                        "cop_tone2"
                    ],
                    "surrogates": "👮🏼"
                },
                "1f3fd": {
                    "name": "police_officer_tone3",
                    "names": [
                        "police_officer_tone3",
                        "cop_tone3"
                    ],
                    "surrogates": "👮🏽"
                },
                "1f3fe": {
                    "name": "police_officer_tone4",
                    "names": [
                        "police_officer_tone4",
                        "cop_tone4"
                    ],
                    "surrogates": "👮🏾"
                },
                "1f3ff": {
                    "name": "police_officer_tone5",
                    "names": [
                        "police_officer_tone5",
                        "cop_tone5"
                    ],
                    "surrogates": "👮🏿"
                }
            }
        },
        "woman_police_officer": {
            "name": "woman_police_officer",
            "names": [
                "woman_police_officer"
            ],
            "surrogates": "👮‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_police_officer_tone1",
                    "names": [
                        "woman_police_officer_tone1",
                        "woman_police_officer_light_skin_tone"
                    ],
                    "surrogates": "👮🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_police_officer_tone2",
                    "names": [
                        "woman_police_officer_tone2",
                        "woman_police_officer_medium_light_skin_tone"
                    ],
                    "surrogates": "👮🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_police_officer_tone3",
                    "names": [
                        "woman_police_officer_tone3",
                        "woman_police_officer_medium_skin_tone"
                    ],
                    "surrogates": "👮🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_police_officer_tone4",
                    "names": [
                        "woman_police_officer_tone4",
                        "woman_police_officer_medium_dark_skin_tone"
                    ],
                    "surrogates": "👮🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_police_officer_tone5",
                    "names": [
                        "woman_police_officer_tone5",
                        "woman_police_officer_dark_skin_tone"
                    ],
                    "surrogates": "👮🏿‍♀️"
                }
            }
        },
        "man_police_officer": {
            "name": "man_police_officer",
            "names": [
                "man_police_officer"
            ],
            "surrogates": "👮‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_police_officer_tone1",
                    "names": [
                        "man_police_officer_tone1",
                        "man_police_officer_light_skin_tone"
                    ],
                    "surrogates": "👮🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_police_officer_tone2",
                    "names": [
                        "man_police_officer_tone2",
                        "man_police_officer_medium_light_skin_tone"
                    ],
                    "surrogates": "👮🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_police_officer_tone3",
                    "names": [
                        "man_police_officer_tone3",
                        "man_police_officer_medium_skin_tone"
                    ],
                    "surrogates": "👮🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_police_officer_tone4",
                    "names": [
                        "man_police_officer_tone4",
                        "man_police_officer_medium_dark_skin_tone"
                    ],
                    "surrogates": "👮🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_police_officer_tone5",
                    "names": [
                        "man_police_officer_tone5",
                        "man_police_officer_dark_skin_tone"
                    ],
                    "surrogates": "👮🏿‍♂️"
                }
            }
        },
        "construction_worker": {
            "name": "construction_worker",
            "names": [
                "construction_worker"
            ],
            "surrogates": "👷",
            "diversityChildren": {
                "1f3fb": {
                    "name": "construction_worker_tone1",
                    "names": [
                        "construction_worker_tone1"
                    ],
                    "surrogates": "👷🏻"
                },
                "1f3fc": {
                    "name": "construction_worker_tone2",
                    "names": [
                        "construction_worker_tone2"
                    ],
                    "surrogates": "👷🏼"
                },
                "1f3fd": {
                    "name": "construction_worker_tone3",
                    "names": [
                        "construction_worker_tone3"
                    ],
                    "surrogates": "👷🏽"
                },
                "1f3fe": {
                    "name": "construction_worker_tone4",
                    "names": [
                        "construction_worker_tone4"
                    ],
                    "surrogates": "👷🏾"
                },
                "1f3ff": {
                    "name": "construction_worker_tone5",
                    "names": [
                        "construction_worker_tone5"
                    ],
                    "surrogates": "👷🏿"
                }
            }
        },
        "woman_construction_worker": {
            "name": "woman_construction_worker",
            "names": [
                "woman_construction_worker"
            ],
            "surrogates": "👷‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_construction_worker_tone1",
                    "names": [
                        "woman_construction_worker_tone1",
                        "woman_construction_worker_light_skin_tone"
                    ],
                    "surrogates": "👷🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_construction_worker_tone2",
                    "names": [
                        "woman_construction_worker_tone2",
                        "woman_construction_worker_medium_light_skin_tone"
                    ],
                    "surrogates": "👷🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_construction_worker_tone3",
                    "names": [
                        "woman_construction_worker_tone3",
                        "woman_construction_worker_medium_skin_tone"
                    ],
                    "surrogates": "👷🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_construction_worker_tone4",
                    "names": [
                        "woman_construction_worker_tone4",
                        "woman_construction_worker_medium_dark_skin_tone"
                    ],
                    "surrogates": "👷🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_construction_worker_tone5",
                    "names": [
                        "woman_construction_worker_tone5",
                        "woman_construction_worker_dark_skin_tone"
                    ],
                    "surrogates": "👷🏿‍♀️"
                }
            }
        },
        "man_construction_worker": {
            "name": "man_construction_worker",
            "names": [
                "man_construction_worker"
            ],
            "surrogates": "👷‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_construction_worker_tone1",
                    "names": [
                        "man_construction_worker_tone1",
                        "man_construction_worker_light_skin_tone"
                    ],
                    "surrogates": "👷🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_construction_worker_tone2",
                    "names": [
                        "man_construction_worker_tone2",
                        "man_construction_worker_medium_light_skin_tone"
                    ],
                    "surrogates": "👷🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_construction_worker_tone3",
                    "names": [
                        "man_construction_worker_tone3",
                        "man_construction_worker_medium_skin_tone"
                    ],
                    "surrogates": "👷🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_construction_worker_tone4",
                    "names": [
                        "man_construction_worker_tone4",
                        "man_construction_worker_medium_dark_skin_tone"
                    ],
                    "surrogates": "👷🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_construction_worker_tone5",
                    "names": [
                        "man_construction_worker_tone5",
                        "man_construction_worker_dark_skin_tone"
                    ],
                    "surrogates": "👷🏿‍♂️"
                }
            }
        },
        "guard": {
            "name": "guard",
            "names": [
                "guard",
                "guardsman"
            ],
            "surrogates": "💂",
            "diversityChildren": {
                "1f3fb": {
                    "name": "guard_tone1",
                    "names": [
                        "guard_tone1",
                        "guardsman_tone1"
                    ],
                    "surrogates": "💂🏻"
                },
                "1f3fc": {
                    "name": "guard_tone2",
                    "names": [
                        "guard_tone2",
                        "guardsman_tone2"
                    ],
                    "surrogates": "💂🏼"
                },
                "1f3fd": {
                    "name": "guard_tone3",
                    "names": [
                        "guard_tone3",
                        "guardsman_tone3"
                    ],
                    "surrogates": "💂🏽"
                },
                "1f3fe": {
                    "name": "guard_tone4",
                    "names": [
                        "guard_tone4",
                        "guardsman_tone4"
                    ],
                    "surrogates": "💂🏾"
                },
                "1f3ff": {
                    "name": "guard_tone5",
                    "names": [
                        "guard_tone5",
                        "guardsman_tone5"
                    ],
                    "surrogates": "💂🏿"
                }
            }
        },
        "woman_guard": {
            "name": "woman_guard",
            "names": [
                "woman_guard"
            ],
            "surrogates": "💂‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_guard_tone1",
                    "names": [
                        "woman_guard_tone1",
                        "woman_guard_light_skin_tone"
                    ],
                    "surrogates": "💂🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_guard_tone2",
                    "names": [
                        "woman_guard_tone2",
                        "woman_guard_medium_light_skin_tone"
                    ],
                    "surrogates": "💂🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_guard_tone3",
                    "names": [
                        "woman_guard_tone3",
                        "woman_guard_medium_skin_tone"
                    ],
                    "surrogates": "💂🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_guard_tone4",
                    "names": [
                        "woman_guard_tone4",
                        "woman_guard_medium_dark_skin_tone"
                    ],
                    "surrogates": "💂🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_guard_tone5",
                    "names": [
                        "woman_guard_tone5",
                        "woman_guard_dark_skin_tone"
                    ],
                    "surrogates": "💂🏿‍♀️"
                }
            }
        },
        "man_guard": {
            "name": "man_guard",
            "names": [
                "man_guard"
            ],
            "surrogates": "💂‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_guard_tone1",
                    "names": [
                        "man_guard_tone1",
                        "man_guard_light_skin_tone"
                    ],
                    "surrogates": "💂🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_guard_tone2",
                    "names": [
                        "man_guard_tone2",
                        "man_guard_medium_light_skin_tone"
                    ],
                    "surrogates": "💂🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_guard_tone3",
                    "names": [
                        "man_guard_tone3",
                        "man_guard_medium_skin_tone"
                    ],
                    "surrogates": "💂🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_guard_tone4",
                    "names": [
                        "man_guard_tone4",
                        "man_guard_medium_dark_skin_tone"
                    ],
                    "surrogates": "💂🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_guard_tone5",
                    "names": [
                        "man_guard_tone5",
                        "man_guard_dark_skin_tone"
                    ],
                    "surrogates": "💂🏿‍♂️"
                }
            }
        },
        "detective": {
            "name": "detective",
            "names": [
                "detective",
                "spy",
                "sleuth_or_spy"
            ],
            "surrogates": "🕵️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "detective_tone1",
                    "names": [
                        "detective_tone1",
                        "spy_tone1",
                        "sleuth_or_spy_tone1"
                    ],
                    "surrogates": "🕵🏻"
                },
                "1f3fc": {
                    "name": "detective_tone2",
                    "names": [
                        "detective_tone2",
                        "spy_tone2",
                        "sleuth_or_spy_tone2"
                    ],
                    "surrogates": "🕵🏼"
                },
                "1f3fd": {
                    "name": "detective_tone3",
                    "names": [
                        "detective_tone3",
                        "spy_tone3",
                        "sleuth_or_spy_tone3"
                    ],
                    "surrogates": "🕵🏽"
                },
                "1f3fe": {
                    "name": "detective_tone4",
                    "names": [
                        "detective_tone4",
                        "spy_tone4",
                        "sleuth_or_spy_tone4"
                    ],
                    "surrogates": "🕵🏾"
                },
                "1f3ff": {
                    "name": "detective_tone5",
                    "names": [
                        "detective_tone5",
                        "spy_tone5",
                        "sleuth_or_spy_tone5"
                    ],
                    "surrogates": "🕵🏿"
                }
            }
        },
        "woman_detective": {
            "name": "woman_detective",
            "names": [
                "woman_detective"
            ],
            "surrogates": "🕵️‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_detective_tone1",
                    "names": [
                        "woman_detective_tone1",
                        "woman_detective_light_skin_tone"
                    ],
                    "surrogates": "🕵🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_detective_tone2",
                    "names": [
                        "woman_detective_tone2",
                        "woman_detective_medium_light_skin_tone"
                    ],
                    "surrogates": "🕵🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_detective_tone3",
                    "names": [
                        "woman_detective_tone3",
                        "woman_detective_medium_skin_tone"
                    ],
                    "surrogates": "🕵🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_detective_tone4",
                    "names": [
                        "woman_detective_tone4",
                        "woman_detective_medium_dark_skin_tone"
                    ],
                    "surrogates": "🕵🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_detective_tone5",
                    "names": [
                        "woman_detective_tone5",
                        "woman_detective_dark_skin_tone"
                    ],
                    "surrogates": "🕵🏿‍♀️"
                }
            }
        },
        "man_detective": {
            "name": "man_detective",
            "names": [
                "man_detective"
            ],
            "surrogates": "🕵️‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_detective_tone1",
                    "names": [
                        "man_detective_tone1",
                        "man_detective_light_skin_tone"
                    ],
                    "surrogates": "🕵🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_detective_tone2",
                    "names": [
                        "man_detective_tone2",
                        "man_detective_medium_light_skin_tone"
                    ],
                    "surrogates": "🕵🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_detective_tone3",
                    "names": [
                        "man_detective_tone3",
                        "man_detective_medium_skin_tone"
                    ],
                    "surrogates": "🕵🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_detective_tone4",
                    "names": [
                        "man_detective_tone4",
                        "man_detective_medium_dark_skin_tone"
                    ],
                    "surrogates": "🕵🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_detective_tone5",
                    "names": [
                        "man_detective_tone5",
                        "man_detective_dark_skin_tone"
                    ],
                    "surrogates": "🕵🏿‍♂️"
                }
            }
        },
        "health_worker": {
            "name": "health_worker",
            "names": [
                "health_worker"
            ],
            "surrogates": "🧑‍⚕️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "health_worker_tone1",
                    "names": [
                        "health_worker_tone1",
                        "health_worker_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍⚕️"
                },
                "1f3fc": {
                    "name": "health_worker_tone2",
                    "names": [
                        "health_worker_tone2",
                        "health_worker_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍⚕️"
                },
                "1f3fd": {
                    "name": "health_worker_tone3",
                    "names": [
                        "health_worker_tone3",
                        "health_worker_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍⚕️"
                },
                "1f3fe": {
                    "name": "health_worker_tone4",
                    "names": [
                        "health_worker_tone4",
                        "health_worker_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍⚕️"
                },
                "1f3ff": {
                    "name": "health_worker_tone5",
                    "names": [
                        "health_worker_tone5",
                        "health_worker_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍⚕️"
                }
            }
        },
        "woman_health_worker": {
            "name": "woman_health_worker",
            "names": [
                "woman_health_worker"
            ],
            "surrogates": "👩‍⚕️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_health_worker_tone1",
                    "names": [
                        "woman_health_worker_tone1",
                        "woman_health_worker_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍⚕️"
                },
                "1f3fc": {
                    "name": "woman_health_worker_tone2",
                    "names": [
                        "woman_health_worker_tone2",
                        "woman_health_worker_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍⚕️"
                },
                "1f3fd": {
                    "name": "woman_health_worker_tone3",
                    "names": [
                        "woman_health_worker_tone3",
                        "woman_health_worker_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍⚕️"
                },
                "1f3fe": {
                    "name": "woman_health_worker_tone4",
                    "names": [
                        "woman_health_worker_tone4",
                        "woman_health_worker_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍⚕️"
                },
                "1f3ff": {
                    "name": "woman_health_worker_tone5",
                    "names": [
                        "woman_health_worker_tone5",
                        "woman_health_worker_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍⚕️"
                }
            }
        },
        "man_health_worker": {
            "name": "man_health_worker",
            "names": [
                "man_health_worker"
            ],
            "surrogates": "👨‍⚕️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_health_worker_tone1",
                    "names": [
                        "man_health_worker_tone1",
                        "man_health_worker_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍⚕️"
                },
                "1f3fc": {
                    "name": "man_health_worker_tone2",
                    "names": [
                        "man_health_worker_tone2",
                        "man_health_worker_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍⚕️"
                },
                "1f3fd": {
                    "name": "man_health_worker_tone3",
                    "names": [
                        "man_health_worker_tone3",
                        "man_health_worker_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍⚕️"
                },
                "1f3fe": {
                    "name": "man_health_worker_tone4",
                    "names": [
                        "man_health_worker_tone4",
                        "man_health_worker_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍⚕️"
                },
                "1f3ff": {
                    "name": "man_health_worker_tone5",
                    "names": [
                        "man_health_worker_tone5",
                        "man_health_worker_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍⚕️"
                }
            }
        },
        "farmer": {
            "name": "farmer",
            "names": [
                "farmer"
            ],
            "surrogates": "🧑‍🌾",
            "diversityChildren": {
                "1f3fb": {
                    "name": "farmer_tone1",
                    "names": [
                        "farmer_tone1",
                        "farmer_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🌾"
                },
                "1f3fc": {
                    "name": "farmer_tone2",
                    "names": [
                        "farmer_tone2",
                        "farmer_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🌾"
                },
                "1f3fd": {
                    "name": "farmer_tone3",
                    "names": [
                        "farmer_tone3",
                        "farmer_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🌾"
                },
                "1f3fe": {
                    "name": "farmer_tone4",
                    "names": [
                        "farmer_tone4",
                        "farmer_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🌾"
                },
                "1f3ff": {
                    "name": "farmer_tone5",
                    "names": [
                        "farmer_tone5",
                        "farmer_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🌾"
                }
            }
        },
        "woman_farmer": {
            "name": "woman_farmer",
            "names": [
                "woman_farmer"
            ],
            "surrogates": "👩‍🌾",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_farmer_tone1",
                    "names": [
                        "woman_farmer_tone1",
                        "woman_farmer_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🌾"
                },
                "1f3fc": {
                    "name": "woman_farmer_tone2",
                    "names": [
                        "woman_farmer_tone2",
                        "woman_farmer_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🌾"
                },
                "1f3fd": {
                    "name": "woman_farmer_tone3",
                    "names": [
                        "woman_farmer_tone3",
                        "woman_farmer_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🌾"
                },
                "1f3fe": {
                    "name": "woman_farmer_tone4",
                    "names": [
                        "woman_farmer_tone4",
                        "woman_farmer_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🌾"
                },
                "1f3ff": {
                    "name": "woman_farmer_tone5",
                    "names": [
                        "woman_farmer_tone5",
                        "woman_farmer_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🌾"
                }
            }
        },
        "man_farmer": {
            "name": "man_farmer",
            "names": [
                "man_farmer"
            ],
            "surrogates": "👨‍🌾",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_farmer_tone1",
                    "names": [
                        "man_farmer_tone1",
                        "man_farmer_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🌾"
                },
                "1f3fc": {
                    "name": "man_farmer_tone2",
                    "names": [
                        "man_farmer_tone2",
                        "man_farmer_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🌾"
                },
                "1f3fd": {
                    "name": "man_farmer_tone3",
                    "names": [
                        "man_farmer_tone3",
                        "man_farmer_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🌾"
                },
                "1f3fe": {
                    "name": "man_farmer_tone4",
                    "names": [
                        "man_farmer_tone4",
                        "man_farmer_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🌾"
                },
                "1f3ff": {
                    "name": "man_farmer_tone5",
                    "names": [
                        "man_farmer_tone5",
                        "man_farmer_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🌾"
                }
            }
        },
        "cook": {
            "name": "cook",
            "names": [
                "cook"
            ],
            "surrogates": "🧑‍🍳",
            "diversityChildren": {
                "1f3fb": {
                    "name": "cook_tone1",
                    "names": [
                        "cook_tone1",
                        "cook_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🍳"
                },
                "1f3fc": {
                    "name": "cook_tone2",
                    "names": [
                        "cook_tone2",
                        "cook_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🍳"
                },
                "1f3fd": {
                    "name": "cook_tone3",
                    "names": [
                        "cook_tone3",
                        "cook_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🍳"
                },
                "1f3fe": {
                    "name": "cook_tone4",
                    "names": [
                        "cook_tone4",
                        "cook_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🍳"
                },
                "1f3ff": {
                    "name": "cook_tone5",
                    "names": [
                        "cook_tone5",
                        "cook_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🍳"
                }
            }
        },
        "woman_cook": {
            "name": "woman_cook",
            "names": [
                "woman_cook"
            ],
            "surrogates": "👩‍🍳",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_cook_tone1",
                    "names": [
                        "woman_cook_tone1",
                        "woman_cook_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🍳"
                },
                "1f3fc": {
                    "name": "woman_cook_tone2",
                    "names": [
                        "woman_cook_tone2",
                        "woman_cook_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🍳"
                },
                "1f3fd": {
                    "name": "woman_cook_tone3",
                    "names": [
                        "woman_cook_tone3",
                        "woman_cook_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🍳"
                },
                "1f3fe": {
                    "name": "woman_cook_tone4",
                    "names": [
                        "woman_cook_tone4",
                        "woman_cook_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🍳"
                },
                "1f3ff": {
                    "name": "woman_cook_tone5",
                    "names": [
                        "woman_cook_tone5",
                        "woman_cook_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🍳"
                }
            }
        },
        "man_cook": {
            "name": "man_cook",
            "names": [
                "man_cook"
            ],
            "surrogates": "👨‍🍳",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_cook_tone1",
                    "names": [
                        "man_cook_tone1",
                        "man_cook_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🍳"
                },
                "1f3fc": {
                    "name": "man_cook_tone2",
                    "names": [
                        "man_cook_tone2",
                        "man_cook_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🍳"
                },
                "1f3fd": {
                    "name": "man_cook_tone3",
                    "names": [
                        "man_cook_tone3",
                        "man_cook_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🍳"
                },
                "1f3fe": {
                    "name": "man_cook_tone4",
                    "names": [
                        "man_cook_tone4",
                        "man_cook_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🍳"
                },
                "1f3ff": {
                    "name": "man_cook_tone5",
                    "names": [
                        "man_cook_tone5",
                        "man_cook_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🍳"
                }
            }
        },
        "student": {
            "name": "student",
            "names": [
                "student"
            ],
            "surrogates": "🧑‍🎓",
            "diversityChildren": {
                "1f3fb": {
                    "name": "student_tone1",
                    "names": [
                        "student_tone1",
                        "student_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🎓"
                },
                "1f3fc": {
                    "name": "student_tone2",
                    "names": [
                        "student_tone2",
                        "student_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🎓"
                },
                "1f3fd": {
                    "name": "student_tone3",
                    "names": [
                        "student_tone3",
                        "student_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🎓"
                },
                "1f3fe": {
                    "name": "student_tone4",
                    "names": [
                        "student_tone4",
                        "student_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🎓"
                },
                "1f3ff": {
                    "name": "student_tone5",
                    "names": [
                        "student_tone5",
                        "student_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🎓"
                }
            }
        },
        "woman_student": {
            "name": "woman_student",
            "names": [
                "woman_student"
            ],
            "surrogates": "👩‍🎓",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_student_tone1",
                    "names": [
                        "woman_student_tone1",
                        "woman_student_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🎓"
                },
                "1f3fc": {
                    "name": "woman_student_tone2",
                    "names": [
                        "woman_student_tone2",
                        "woman_student_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🎓"
                },
                "1f3fd": {
                    "name": "woman_student_tone3",
                    "names": [
                        "woman_student_tone3",
                        "woman_student_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🎓"
                },
                "1f3fe": {
                    "name": "woman_student_tone4",
                    "names": [
                        "woman_student_tone4",
                        "woman_student_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🎓"
                },
                "1f3ff": {
                    "name": "woman_student_tone5",
                    "names": [
                        "woman_student_tone5",
                        "woman_student_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🎓"
                }
            }
        },
        "man_student": {
            "name": "man_student",
            "names": [
                "man_student"
            ],
            "surrogates": "👨‍🎓",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_student_tone1",
                    "names": [
                        "man_student_tone1",
                        "man_student_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🎓"
                },
                "1f3fc": {
                    "name": "man_student_tone2",
                    "names": [
                        "man_student_tone2",
                        "man_student_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🎓"
                },
                "1f3fd": {
                    "name": "man_student_tone3",
                    "names": [
                        "man_student_tone3",
                        "man_student_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🎓"
                },
                "1f3fe": {
                    "name": "man_student_tone4",
                    "names": [
                        "man_student_tone4",
                        "man_student_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🎓"
                },
                "1f3ff": {
                    "name": "man_student_tone5",
                    "names": [
                        "man_student_tone5",
                        "man_student_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🎓"
                }
            }
        },
        "singer": {
            "name": "singer",
            "names": [
                "singer"
            ],
            "surrogates": "🧑‍🎤",
            "diversityChildren": {
                "1f3fb": {
                    "name": "singer_tone1",
                    "names": [
                        "singer_tone1",
                        "singer_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🎤"
                },
                "1f3fc": {
                    "name": "singer_tone2",
                    "names": [
                        "singer_tone2",
                        "singer_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🎤"
                },
                "1f3fd": {
                    "name": "singer_tone3",
                    "names": [
                        "singer_tone3",
                        "singer_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🎤"
                },
                "1f3fe": {
                    "name": "singer_tone4",
                    "names": [
                        "singer_tone4",
                        "singer_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🎤"
                },
                "1f3ff": {
                    "name": "singer_tone5",
                    "names": [
                        "singer_tone5",
                        "singer_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🎤"
                }
            }
        },
        "woman_singer": {
            "name": "woman_singer",
            "names": [
                "woman_singer"
            ],
            "surrogates": "👩‍🎤",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_singer_tone1",
                    "names": [
                        "woman_singer_tone1",
                        "woman_singer_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🎤"
                },
                "1f3fc": {
                    "name": "woman_singer_tone2",
                    "names": [
                        "woman_singer_tone2",
                        "woman_singer_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🎤"
                },
                "1f3fd": {
                    "name": "woman_singer_tone3",
                    "names": [
                        "woman_singer_tone3",
                        "woman_singer_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🎤"
                },
                "1f3fe": {
                    "name": "woman_singer_tone4",
                    "names": [
                        "woman_singer_tone4",
                        "woman_singer_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🎤"
                },
                "1f3ff": {
                    "name": "woman_singer_tone5",
                    "names": [
                        "woman_singer_tone5",
                        "woman_singer_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🎤"
                }
            }
        },
        "man_singer": {
            "name": "man_singer",
            "names": [
                "man_singer"
            ],
            "surrogates": "👨‍🎤",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_singer_tone1",
                    "names": [
                        "man_singer_tone1",
                        "man_singer_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🎤"
                },
                "1f3fc": {
                    "name": "man_singer_tone2",
                    "names": [
                        "man_singer_tone2",
                        "man_singer_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🎤"
                },
                "1f3fd": {
                    "name": "man_singer_tone3",
                    "names": [
                        "man_singer_tone3",
                        "man_singer_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🎤"
                },
                "1f3fe": {
                    "name": "man_singer_tone4",
                    "names": [
                        "man_singer_tone4",
                        "man_singer_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🎤"
                },
                "1f3ff": {
                    "name": "man_singer_tone5",
                    "names": [
                        "man_singer_tone5",
                        "man_singer_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🎤"
                }
            }
        },
        "teacher": {
            "name": "teacher",
            "names": [
                "teacher"
            ],
            "surrogates": "🧑‍🏫",
            "diversityChildren": {
                "1f3fb": {
                    "name": "teacher_tone1",
                    "names": [
                        "teacher_tone1",
                        "teacher_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🏫"
                },
                "1f3fc": {
                    "name": "teacher_tone2",
                    "names": [
                        "teacher_tone2",
                        "teacher_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🏫"
                },
                "1f3fd": {
                    "name": "teacher_tone3",
                    "names": [
                        "teacher_tone3",
                        "teacher_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🏫"
                },
                "1f3fe": {
                    "name": "teacher_tone4",
                    "names": [
                        "teacher_tone4",
                        "teacher_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🏫"
                },
                "1f3ff": {
                    "name": "teacher_tone5",
                    "names": [
                        "teacher_tone5",
                        "teacher_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🏫"
                }
            }
        },
        "woman_teacher": {
            "name": "woman_teacher",
            "names": [
                "woman_teacher"
            ],
            "surrogates": "👩‍🏫",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_teacher_tone1",
                    "names": [
                        "woman_teacher_tone1",
                        "woman_teacher_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🏫"
                },
                "1f3fc": {
                    "name": "woman_teacher_tone2",
                    "names": [
                        "woman_teacher_tone2",
                        "woman_teacher_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🏫"
                },
                "1f3fd": {
                    "name": "woman_teacher_tone3",
                    "names": [
                        "woman_teacher_tone3",
                        "woman_teacher_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🏫"
                },
                "1f3fe": {
                    "name": "woman_teacher_tone4",
                    "names": [
                        "woman_teacher_tone4",
                        "woman_teacher_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🏫"
                },
                "1f3ff": {
                    "name": "woman_teacher_tone5",
                    "names": [
                        "woman_teacher_tone5",
                        "woman_teacher_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🏫"
                }
            }
        },
        "man_teacher": {
            "name": "man_teacher",
            "names": [
                "man_teacher"
            ],
            "surrogates": "👨‍🏫",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_teacher_tone1",
                    "names": [
                        "man_teacher_tone1",
                        "man_teacher_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🏫"
                },
                "1f3fc": {
                    "name": "man_teacher_tone2",
                    "names": [
                        "man_teacher_tone2",
                        "man_teacher_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🏫"
                },
                "1f3fd": {
                    "name": "man_teacher_tone3",
                    "names": [
                        "man_teacher_tone3",
                        "man_teacher_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🏫"
                },
                "1f3fe": {
                    "name": "man_teacher_tone4",
                    "names": [
                        "man_teacher_tone4",
                        "man_teacher_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🏫"
                },
                "1f3ff": {
                    "name": "man_teacher_tone5",
                    "names": [
                        "man_teacher_tone5",
                        "man_teacher_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🏫"
                }
            }
        },
        "factory_worker": {
            "name": "factory_worker",
            "names": [
                "factory_worker"
            ],
            "surrogates": "🧑‍🏭",
            "diversityChildren": {
                "1f3fb": {
                    "name": "factory_worker_tone1",
                    "names": [
                        "factory_worker_tone1",
                        "factory_worker_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🏭"
                },
                "1f3fc": {
                    "name": "factory_worker_tone2",
                    "names": [
                        "factory_worker_tone2",
                        "factory_worker_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🏭"
                },
                "1f3fd": {
                    "name": "factory_worker_tone3",
                    "names": [
                        "factory_worker_tone3",
                        "factory_worker_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🏭"
                },
                "1f3fe": {
                    "name": "factory_worker_tone4",
                    "names": [
                        "factory_worker_tone4",
                        "factory_worker_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🏭"
                },
                "1f3ff": {
                    "name": "factory_worker_tone5",
                    "names": [
                        "factory_worker_tone5",
                        "factory_worker_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🏭"
                }
            }
        },
        "woman_factory_worker": {
            "name": "woman_factory_worker",
            "names": [
                "woman_factory_worker"
            ],
            "surrogates": "👩‍🏭",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_factory_worker_tone1",
                    "names": [
                        "woman_factory_worker_tone1",
                        "woman_factory_worker_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🏭"
                },
                "1f3fc": {
                    "name": "woman_factory_worker_tone2",
                    "names": [
                        "woman_factory_worker_tone2",
                        "woman_factory_worker_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🏭"
                },
                "1f3fd": {
                    "name": "woman_factory_worker_tone3",
                    "names": [
                        "woman_factory_worker_tone3",
                        "woman_factory_worker_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🏭"
                },
                "1f3fe": {
                    "name": "woman_factory_worker_tone4",
                    "names": [
                        "woman_factory_worker_tone4",
                        "woman_factory_worker_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🏭"
                },
                "1f3ff": {
                    "name": "woman_factory_worker_tone5",
                    "names": [
                        "woman_factory_worker_tone5",
                        "woman_factory_worker_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🏭"
                }
            }
        },
        "man_factory_worker": {
            "name": "man_factory_worker",
            "names": [
                "man_factory_worker"
            ],
            "surrogates": "👨‍🏭",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_factory_worker_tone1",
                    "names": [
                        "man_factory_worker_tone1",
                        "man_factory_worker_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🏭"
                },
                "1f3fc": {
                    "name": "man_factory_worker_tone2",
                    "names": [
                        "man_factory_worker_tone2",
                        "man_factory_worker_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🏭"
                },
                "1f3fd": {
                    "name": "man_factory_worker_tone3",
                    "names": [
                        "man_factory_worker_tone3",
                        "man_factory_worker_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🏭"
                },
                "1f3fe": {
                    "name": "man_factory_worker_tone4",
                    "names": [
                        "man_factory_worker_tone4",
                        "man_factory_worker_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🏭"
                },
                "1f3ff": {
                    "name": "man_factory_worker_tone5",
                    "names": [
                        "man_factory_worker_tone5",
                        "man_factory_worker_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🏭"
                }
            }
        },
        "technologist": {
            "name": "technologist",
            "names": [
                "technologist"
            ],
            "surrogates": "🧑‍💻",
            "diversityChildren": {
                "1f3fb": {
                    "name": "technologist_tone1",
                    "names": [
                        "technologist_tone1",
                        "technologist_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍💻"
                },
                "1f3fc": {
                    "name": "technologist_tone2",
                    "names": [
                        "technologist_tone2",
                        "technologist_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍💻"
                },
                "1f3fd": {
                    "name": "technologist_tone3",
                    "names": [
                        "technologist_tone3",
                        "technologist_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍💻"
                },
                "1f3fe": {
                    "name": "technologist_tone4",
                    "names": [
                        "technologist_tone4",
                        "technologist_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍💻"
                },
                "1f3ff": {
                    "name": "technologist_tone5",
                    "names": [
                        "technologist_tone5",
                        "technologist_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍💻"
                }
            }
        },
        "woman_technologist": {
            "name": "woman_technologist",
            "names": [
                "woman_technologist"
            ],
            "surrogates": "👩‍💻",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_technologist_tone1",
                    "names": [
                        "woman_technologist_tone1",
                        "woman_technologist_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍💻"
                },
                "1f3fc": {
                    "name": "woman_technologist_tone2",
                    "names": [
                        "woman_technologist_tone2",
                        "woman_technologist_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍💻"
                },
                "1f3fd": {
                    "name": "woman_technologist_tone3",
                    "names": [
                        "woman_technologist_tone3",
                        "woman_technologist_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍💻"
                },
                "1f3fe": {
                    "name": "woman_technologist_tone4",
                    "names": [
                        "woman_technologist_tone4",
                        "woman_technologist_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍💻"
                },
                "1f3ff": {
                    "name": "woman_technologist_tone5",
                    "names": [
                        "woman_technologist_tone5",
                        "woman_technologist_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍💻"
                }
            }
        },
        "man_technologist": {
            "name": "man_technologist",
            "names": [
                "man_technologist"
            ],
            "surrogates": "👨‍💻",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_technologist_tone1",
                    "names": [
                        "man_technologist_tone1",
                        "man_technologist_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍💻"
                },
                "1f3fc": {
                    "name": "man_technologist_tone2",
                    "names": [
                        "man_technologist_tone2",
                        "man_technologist_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍💻"
                },
                "1f3fd": {
                    "name": "man_technologist_tone3",
                    "names": [
                        "man_technologist_tone3",
                        "man_technologist_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍💻"
                },
                "1f3fe": {
                    "name": "man_technologist_tone4",
                    "names": [
                        "man_technologist_tone4",
                        "man_technologist_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍💻"
                },
                "1f3ff": {
                    "name": "man_technologist_tone5",
                    "names": [
                        "man_technologist_tone5",
                        "man_technologist_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍💻"
                }
            }
        },
        "office_worker": {
            "name": "office_worker",
            "names": [
                "office_worker"
            ],
            "surrogates": "🧑‍💼",
            "diversityChildren": {
                "1f3fb": {
                    "name": "office_worker_tone1",
                    "names": [
                        "office_worker_tone1",
                        "office_worker_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍💼"
                },
                "1f3fc": {
                    "name": "office_worker_tone2",
                    "names": [
                        "office_worker_tone2",
                        "office_worker_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍💼"
                },
                "1f3fd": {
                    "name": "office_worker_tone3",
                    "names": [
                        "office_worker_tone3",
                        "office_worker_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍💼"
                },
                "1f3fe": {
                    "name": "office_worker_tone4",
                    "names": [
                        "office_worker_tone4",
                        "office_worker_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍💼"
                },
                "1f3ff": {
                    "name": "office_worker_tone5",
                    "names": [
                        "office_worker_tone5",
                        "office_worker_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍💼"
                }
            }
        },
        "woman_office_worker": {
            "name": "woman_office_worker",
            "names": [
                "woman_office_worker"
            ],
            "surrogates": "👩‍💼",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_office_worker_tone1",
                    "names": [
                        "woman_office_worker_tone1",
                        "woman_office_worker_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍💼"
                },
                "1f3fc": {
                    "name": "woman_office_worker_tone2",
                    "names": [
                        "woman_office_worker_tone2",
                        "woman_office_worker_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍💼"
                },
                "1f3fd": {
                    "name": "woman_office_worker_tone3",
                    "names": [
                        "woman_office_worker_tone3",
                        "woman_office_worker_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍💼"
                },
                "1f3fe": {
                    "name": "woman_office_worker_tone4",
                    "names": [
                        "woman_office_worker_tone4",
                        "woman_office_worker_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍💼"
                },
                "1f3ff": {
                    "name": "woman_office_worker_tone5",
                    "names": [
                        "woman_office_worker_tone5",
                        "woman_office_worker_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍💼"
                }
            }
        },
        "man_office_worker": {
            "name": "man_office_worker",
            "names": [
                "man_office_worker"
            ],
            "surrogates": "👨‍💼",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_office_worker_tone1",
                    "names": [
                        "man_office_worker_tone1",
                        "man_office_worker_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍💼"
                },
                "1f3fc": {
                    "name": "man_office_worker_tone2",
                    "names": [
                        "man_office_worker_tone2",
                        "man_office_worker_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍💼"
                },
                "1f3fd": {
                    "name": "man_office_worker_tone3",
                    "names": [
                        "man_office_worker_tone3",
                        "man_office_worker_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍💼"
                },
                "1f3fe": {
                    "name": "man_office_worker_tone4",
                    "names": [
                        "man_office_worker_tone4",
                        "man_office_worker_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍💼"
                },
                "1f3ff": {
                    "name": "man_office_worker_tone5",
                    "names": [
                        "man_office_worker_tone5",
                        "man_office_worker_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍💼"
                }
            }
        },
        "mechanic": {
            "name": "mechanic",
            "names": [
                "mechanic"
            ],
            "surrogates": "🧑‍🔧",
            "diversityChildren": {
                "1f3fb": {
                    "name": "mechanic_tone1",
                    "names": [
                        "mechanic_tone1",
                        "mechanic_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🔧"
                },
                "1f3fc": {
                    "name": "mechanic_tone2",
                    "names": [
                        "mechanic_tone2",
                        "mechanic_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🔧"
                },
                "1f3fd": {
                    "name": "mechanic_tone3",
                    "names": [
                        "mechanic_tone3",
                        "mechanic_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🔧"
                },
                "1f3fe": {
                    "name": "mechanic_tone4",
                    "names": [
                        "mechanic_tone4",
                        "mechanic_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🔧"
                },
                "1f3ff": {
                    "name": "mechanic_tone5",
                    "names": [
                        "mechanic_tone5",
                        "mechanic_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🔧"
                }
            }
        },
        "woman_mechanic": {
            "name": "woman_mechanic",
            "names": [
                "woman_mechanic"
            ],
            "surrogates": "👩‍🔧",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_mechanic_tone1",
                    "names": [
                        "woman_mechanic_tone1",
                        "woman_mechanic_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🔧"
                },
                "1f3fc": {
                    "name": "woman_mechanic_tone2",
                    "names": [
                        "woman_mechanic_tone2",
                        "woman_mechanic_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🔧"
                },
                "1f3fd": {
                    "name": "woman_mechanic_tone3",
                    "names": [
                        "woman_mechanic_tone3",
                        "woman_mechanic_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🔧"
                },
                "1f3fe": {
                    "name": "woman_mechanic_tone4",
                    "names": [
                        "woman_mechanic_tone4",
                        "woman_mechanic_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🔧"
                },
                "1f3ff": {
                    "name": "woman_mechanic_tone5",
                    "names": [
                        "woman_mechanic_tone5",
                        "woman_mechanic_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🔧"
                }
            }
        },
        "man_mechanic": {
            "name": "man_mechanic",
            "names": [
                "man_mechanic"
            ],
            "surrogates": "👨‍🔧",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_mechanic_tone1",
                    "names": [
                        "man_mechanic_tone1",
                        "man_mechanic_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🔧"
                },
                "1f3fc": {
                    "name": "man_mechanic_tone2",
                    "names": [
                        "man_mechanic_tone2",
                        "man_mechanic_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🔧"
                },
                "1f3fd": {
                    "name": "man_mechanic_tone3",
                    "names": [
                        "man_mechanic_tone3",
                        "man_mechanic_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🔧"
                },
                "1f3fe": {
                    "name": "man_mechanic_tone4",
                    "names": [
                        "man_mechanic_tone4",
                        "man_mechanic_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🔧"
                },
                "1f3ff": {
                    "name": "man_mechanic_tone5",
                    "names": [
                        "man_mechanic_tone5",
                        "man_mechanic_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🔧"
                }
            }
        },
        "scientist": {
            "name": "scientist",
            "names": [
                "scientist"
            ],
            "surrogates": "🧑‍🔬",
            "diversityChildren": {
                "1f3fb": {
                    "name": "scientist_tone1",
                    "names": [
                        "scientist_tone1",
                        "scientist_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🔬"
                },
                "1f3fc": {
                    "name": "scientist_tone2",
                    "names": [
                        "scientist_tone2",
                        "scientist_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🔬"
                },
                "1f3fd": {
                    "name": "scientist_tone3",
                    "names": [
                        "scientist_tone3",
                        "scientist_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🔬"
                },
                "1f3fe": {
                    "name": "scientist_tone4",
                    "names": [
                        "scientist_tone4",
                        "scientist_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🔬"
                },
                "1f3ff": {
                    "name": "scientist_tone5",
                    "names": [
                        "scientist_tone5",
                        "scientist_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🔬"
                }
            }
        },
        "woman_scientist": {
            "name": "woman_scientist",
            "names": [
                "woman_scientist"
            ],
            "surrogates": "👩‍🔬",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_scientist_tone1",
                    "names": [
                        "woman_scientist_tone1",
                        "woman_scientist_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🔬"
                },
                "1f3fc": {
                    "name": "woman_scientist_tone2",
                    "names": [
                        "woman_scientist_tone2",
                        "woman_scientist_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🔬"
                },
                "1f3fd": {
                    "name": "woman_scientist_tone3",
                    "names": [
                        "woman_scientist_tone3",
                        "woman_scientist_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🔬"
                },
                "1f3fe": {
                    "name": "woman_scientist_tone4",
                    "names": [
                        "woman_scientist_tone4",
                        "woman_scientist_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🔬"
                },
                "1f3ff": {
                    "name": "woman_scientist_tone5",
                    "names": [
                        "woman_scientist_tone5",
                        "woman_scientist_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🔬"
                }
            }
        },
        "man_scientist": {
            "name": "man_scientist",
            "names": [
                "man_scientist"
            ],
            "surrogates": "👨‍🔬",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_scientist_tone1",
                    "names": [
                        "man_scientist_tone1",
                        "man_scientist_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🔬"
                },
                "1f3fc": {
                    "name": "man_scientist_tone2",
                    "names": [
                        "man_scientist_tone2",
                        "man_scientist_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🔬"
                },
                "1f3fd": {
                    "name": "man_scientist_tone3",
                    "names": [
                        "man_scientist_tone3",
                        "man_scientist_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🔬"
                },
                "1f3fe": {
                    "name": "man_scientist_tone4",
                    "names": [
                        "man_scientist_tone4",
                        "man_scientist_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🔬"
                },
                "1f3ff": {
                    "name": "man_scientist_tone5",
                    "names": [
                        "man_scientist_tone5",
                        "man_scientist_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🔬"
                }
            }
        },
        "artist": {
            "name": "artist",
            "names": [
                "artist"
            ],
            "surrogates": "🧑‍🎨",
            "diversityChildren": {
                "1f3fb": {
                    "name": "artist_tone1",
                    "names": [
                        "artist_tone1",
                        "artist_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🎨"
                },
                "1f3fc": {
                    "name": "artist_tone2",
                    "names": [
                        "artist_tone2",
                        "artist_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🎨"
                },
                "1f3fd": {
                    "name": "artist_tone3",
                    "names": [
                        "artist_tone3",
                        "artist_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🎨"
                },
                "1f3fe": {
                    "name": "artist_tone4",
                    "names": [
                        "artist_tone4",
                        "artist_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🎨"
                },
                "1f3ff": {
                    "name": "artist_tone5",
                    "names": [
                        "artist_tone5",
                        "artist_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🎨"
                }
            }
        },
        "woman_artist": {
            "name": "woman_artist",
            "names": [
                "woman_artist"
            ],
            "surrogates": "👩‍🎨",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_artist_tone1",
                    "names": [
                        "woman_artist_tone1",
                        "woman_artist_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🎨"
                },
                "1f3fc": {
                    "name": "woman_artist_tone2",
                    "names": [
                        "woman_artist_tone2",
                        "woman_artist_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🎨"
                },
                "1f3fd": {
                    "name": "woman_artist_tone3",
                    "names": [
                        "woman_artist_tone3",
                        "woman_artist_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🎨"
                },
                "1f3fe": {
                    "name": "woman_artist_tone4",
                    "names": [
                        "woman_artist_tone4",
                        "woman_artist_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🎨"
                },
                "1f3ff": {
                    "name": "woman_artist_tone5",
                    "names": [
                        "woman_artist_tone5",
                        "woman_artist_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🎨"
                }
            }
        },
        "man_artist": {
            "name": "man_artist",
            "names": [
                "man_artist"
            ],
            "surrogates": "👨‍🎨",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_artist_tone1",
                    "names": [
                        "man_artist_tone1",
                        "man_artist_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🎨"
                },
                "1f3fc": {
                    "name": "man_artist_tone2",
                    "names": [
                        "man_artist_tone2",
                        "man_artist_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🎨"
                },
                "1f3fd": {
                    "name": "man_artist_tone3",
                    "names": [
                        "man_artist_tone3",
                        "man_artist_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🎨"
                },
                "1f3fe": {
                    "name": "man_artist_tone4",
                    "names": [
                        "man_artist_tone4",
                        "man_artist_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🎨"
                },
                "1f3ff": {
                    "name": "man_artist_tone5",
                    "names": [
                        "man_artist_tone5",
                        "man_artist_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🎨"
                }
            }
        },
        "firefighter": {
            "name": "firefighter",
            "names": [
                "firefighter"
            ],
            "surrogates": "🧑‍🚒",
            "diversityChildren": {
                "1f3fb": {
                    "name": "firefighter_tone1",
                    "names": [
                        "firefighter_tone1",
                        "firefighter_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🚒"
                },
                "1f3fc": {
                    "name": "firefighter_tone2",
                    "names": [
                        "firefighter_tone2",
                        "firefighter_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🚒"
                },
                "1f3fd": {
                    "name": "firefighter_tone3",
                    "names": [
                        "firefighter_tone3",
                        "firefighter_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🚒"
                },
                "1f3fe": {
                    "name": "firefighter_tone4",
                    "names": [
                        "firefighter_tone4",
                        "firefighter_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🚒"
                },
                "1f3ff": {
                    "name": "firefighter_tone5",
                    "names": [
                        "firefighter_tone5",
                        "firefighter_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🚒"
                }
            }
        },
        "woman_firefighter": {
            "name": "woman_firefighter",
            "names": [
                "woman_firefighter"
            ],
            "surrogates": "👩‍🚒",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_firefighter_tone1",
                    "names": [
                        "woman_firefighter_tone1",
                        "woman_firefighter_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🚒"
                },
                "1f3fc": {
                    "name": "woman_firefighter_tone2",
                    "names": [
                        "woman_firefighter_tone2",
                        "woman_firefighter_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🚒"
                },
                "1f3fd": {
                    "name": "woman_firefighter_tone3",
                    "names": [
                        "woman_firefighter_tone3",
                        "woman_firefighter_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🚒"
                },
                "1f3fe": {
                    "name": "woman_firefighter_tone4",
                    "names": [
                        "woman_firefighter_tone4",
                        "woman_firefighter_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🚒"
                },
                "1f3ff": {
                    "name": "woman_firefighter_tone5",
                    "names": [
                        "woman_firefighter_tone5",
                        "woman_firefighter_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🚒"
                }
            }
        },
        "man_firefighter": {
            "name": "man_firefighter",
            "names": [
                "man_firefighter"
            ],
            "surrogates": "👨‍🚒",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_firefighter_tone1",
                    "names": [
                        "man_firefighter_tone1",
                        "man_firefighter_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🚒"
                },
                "1f3fc": {
                    "name": "man_firefighter_tone2",
                    "names": [
                        "man_firefighter_tone2",
                        "man_firefighter_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🚒"
                },
                "1f3fd": {
                    "name": "man_firefighter_tone3",
                    "names": [
                        "man_firefighter_tone3",
                        "man_firefighter_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🚒"
                },
                "1f3fe": {
                    "name": "man_firefighter_tone4",
                    "names": [
                        "man_firefighter_tone4",
                        "man_firefighter_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🚒"
                },
                "1f3ff": {
                    "name": "man_firefighter_tone5",
                    "names": [
                        "man_firefighter_tone5",
                        "man_firefighter_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🚒"
                }
            }
        },
        "pilot": {
            "name": "pilot",
            "names": [
                "pilot"
            ],
            "surrogates": "🧑‍✈️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "pilot_tone1",
                    "names": [
                        "pilot_tone1",
                        "pilot_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍✈️"
                },
                "1f3fc": {
                    "name": "pilot_tone2",
                    "names": [
                        "pilot_tone2",
                        "pilot_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍✈️"
                },
                "1f3fd": {
                    "name": "pilot_tone3",
                    "names": [
                        "pilot_tone3",
                        "pilot_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍✈️"
                },
                "1f3fe": {
                    "name": "pilot_tone4",
                    "names": [
                        "pilot_tone4",
                        "pilot_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍✈️"
                },
                "1f3ff": {
                    "name": "pilot_tone5",
                    "names": [
                        "pilot_tone5",
                        "pilot_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍✈️"
                }
            }
        },
        "woman_pilot": {
            "name": "woman_pilot",
            "names": [
                "woman_pilot"
            ],
            "surrogates": "👩‍✈️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_pilot_tone1",
                    "names": [
                        "woman_pilot_tone1",
                        "woman_pilot_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍✈️"
                },
                "1f3fc": {
                    "name": "woman_pilot_tone2",
                    "names": [
                        "woman_pilot_tone2",
                        "woman_pilot_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍✈️"
                },
                "1f3fd": {
                    "name": "woman_pilot_tone3",
                    "names": [
                        "woman_pilot_tone3",
                        "woman_pilot_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍✈️"
                },
                "1f3fe": {
                    "name": "woman_pilot_tone4",
                    "names": [
                        "woman_pilot_tone4",
                        "woman_pilot_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍✈️"
                },
                "1f3ff": {
                    "name": "woman_pilot_tone5",
                    "names": [
                        "woman_pilot_tone5",
                        "woman_pilot_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍✈️"
                }
            }
        },
        "man_pilot": {
            "name": "man_pilot",
            "names": [
                "man_pilot"
            ],
            "surrogates": "👨‍✈️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_pilot_tone1",
                    "names": [
                        "man_pilot_tone1",
                        "man_pilot_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍✈️"
                },
                "1f3fc": {
                    "name": "man_pilot_tone2",
                    "names": [
                        "man_pilot_tone2",
                        "man_pilot_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍✈️"
                },
                "1f3fd": {
                    "name": "man_pilot_tone3",
                    "names": [
                        "man_pilot_tone3",
                        "man_pilot_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍✈️"
                },
                "1f3fe": {
                    "name": "man_pilot_tone4",
                    "names": [
                        "man_pilot_tone4",
                        "man_pilot_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍✈️"
                },
                "1f3ff": {
                    "name": "man_pilot_tone5",
                    "names": [
                        "man_pilot_tone5",
                        "man_pilot_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍✈️"
                }
            }
        },
        "astronaut": {
            "name": "astronaut",
            "names": [
                "astronaut"
            ],
            "surrogates": "🧑‍🚀",
            "diversityChildren": {
                "1f3fb": {
                    "name": "astronaut_tone1",
                    "names": [
                        "astronaut_tone1",
                        "astronaut_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🚀"
                },
                "1f3fc": {
                    "name": "astronaut_tone2",
                    "names": [
                        "astronaut_tone2",
                        "astronaut_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🚀"
                },
                "1f3fd": {
                    "name": "astronaut_tone3",
                    "names": [
                        "astronaut_tone3",
                        "astronaut_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🚀"
                },
                "1f3fe": {
                    "name": "astronaut_tone4",
                    "names": [
                        "astronaut_tone4",
                        "astronaut_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🚀"
                },
                "1f3ff": {
                    "name": "astronaut_tone5",
                    "names": [
                        "astronaut_tone5",
                        "astronaut_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🚀"
                }
            }
        },
        "woman_astronaut": {
            "name": "woman_astronaut",
            "names": [
                "woman_astronaut"
            ],
            "surrogates": "👩‍🚀",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_astronaut_tone1",
                    "names": [
                        "woman_astronaut_tone1",
                        "woman_astronaut_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🚀"
                },
                "1f3fc": {
                    "name": "woman_astronaut_tone2",
                    "names": [
                        "woman_astronaut_tone2",
                        "woman_astronaut_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🚀"
                },
                "1f3fd": {
                    "name": "woman_astronaut_tone3",
                    "names": [
                        "woman_astronaut_tone3",
                        "woman_astronaut_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🚀"
                },
                "1f3fe": {
                    "name": "woman_astronaut_tone4",
                    "names": [
                        "woman_astronaut_tone4",
                        "woman_astronaut_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🚀"
                },
                "1f3ff": {
                    "name": "woman_astronaut_tone5",
                    "names": [
                        "woman_astronaut_tone5",
                        "woman_astronaut_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🚀"
                }
            }
        },
        "man_astronaut": {
            "name": "man_astronaut",
            "names": [
                "man_astronaut"
            ],
            "surrogates": "👨‍🚀",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_astronaut_tone1",
                    "names": [
                        "man_astronaut_tone1",
                        "man_astronaut_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🚀"
                },
                "1f3fc": {
                    "name": "man_astronaut_tone2",
                    "names": [
                        "man_astronaut_tone2",
                        "man_astronaut_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🚀"
                },
                "1f3fd": {
                    "name": "man_astronaut_tone3",
                    "names": [
                        "man_astronaut_tone3",
                        "man_astronaut_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🚀"
                },
                "1f3fe": {
                    "name": "man_astronaut_tone4",
                    "names": [
                        "man_astronaut_tone4",
                        "man_astronaut_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🚀"
                },
                "1f3ff": {
                    "name": "man_astronaut_tone5",
                    "names": [
                        "man_astronaut_tone5",
                        "man_astronaut_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🚀"
                }
            }
        },
        "judge": {
            "name": "judge",
            "names": [
                "judge"
            ],
            "surrogates": "🧑‍⚖️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "judge_tone1",
                    "names": [
                        "judge_tone1",
                        "judge_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍⚖️"
                },
                "1f3fc": {
                    "name": "judge_tone2",
                    "names": [
                        "judge_tone2",
                        "judge_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍⚖️"
                },
                "1f3fd": {
                    "name": "judge_tone3",
                    "names": [
                        "judge_tone3",
                        "judge_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍⚖️"
                },
                "1f3fe": {
                    "name": "judge_tone4",
                    "names": [
                        "judge_tone4",
                        "judge_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍⚖️"
                },
                "1f3ff": {
                    "name": "judge_tone5",
                    "names": [
                        "judge_tone5",
                        "judge_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍⚖️"
                }
            }
        },
        "woman_judge": {
            "name": "woman_judge",
            "names": [
                "woman_judge"
            ],
            "surrogates": "👩‍⚖️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_judge_tone1",
                    "names": [
                        "woman_judge_tone1",
                        "woman_judge_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍⚖️"
                },
                "1f3fc": {
                    "name": "woman_judge_tone2",
                    "names": [
                        "woman_judge_tone2",
                        "woman_judge_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍⚖️"
                },
                "1f3fd": {
                    "name": "woman_judge_tone3",
                    "names": [
                        "woman_judge_tone3",
                        "woman_judge_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍⚖️"
                },
                "1f3fe": {
                    "name": "woman_judge_tone4",
                    "names": [
                        "woman_judge_tone4",
                        "woman_judge_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍⚖️"
                },
                "1f3ff": {
                    "name": "woman_judge_tone5",
                    "names": [
                        "woman_judge_tone5",
                        "woman_judge_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍⚖️"
                }
            }
        },
        "man_judge": {
            "name": "man_judge",
            "names": [
                "man_judge"
            ],
            "surrogates": "👨‍⚖️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_judge_tone1",
                    "names": [
                        "man_judge_tone1",
                        "man_judge_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍⚖️"
                },
                "1f3fc": {
                    "name": "man_judge_tone2",
                    "names": [
                        "man_judge_tone2",
                        "man_judge_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍⚖️"
                },
                "1f3fd": {
                    "name": "man_judge_tone3",
                    "names": [
                        "man_judge_tone3",
                        "man_judge_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍⚖️"
                },
                "1f3fe": {
                    "name": "man_judge_tone4",
                    "names": [
                        "man_judge_tone4",
                        "man_judge_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍⚖️"
                },
                "1f3ff": {
                    "name": "man_judge_tone5",
                    "names": [
                        "man_judge_tone5",
                        "man_judge_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍⚖️"
                }
            }
        },
        "person_with_veil": {
            "name": "person_with_veil",
            "names": [
                "person_with_veil"
            ],
            "surrogates": "👰",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_with_veil_tone1",
                    "names": [
                        "person_with_veil_tone1"
                    ],
                    "surrogates": "👰🏻"
                },
                "1f3fc": {
                    "name": "person_with_veil_tone2",
                    "names": [
                        "person_with_veil_tone2"
                    ],
                    "surrogates": "👰🏼"
                },
                "1f3fd": {
                    "name": "person_with_veil_tone3",
                    "names": [
                        "person_with_veil_tone3"
                    ],
                    "surrogates": "👰🏽"
                },
                "1f3fe": {
                    "name": "person_with_veil_tone4",
                    "names": [
                        "person_with_veil_tone4"
                    ],
                    "surrogates": "👰🏾"
                },
                "1f3ff": {
                    "name": "person_with_veil_tone5",
                    "names": [
                        "person_with_veil_tone5"
                    ],
                    "surrogates": "👰🏿"
                }
            }
        },
        "woman_with_veil": {
            "name": "woman_with_veil",
            "names": [
                "woman_with_veil",
                "bride_with_veil"
            ],
            "surrogates": "👰‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_with_veil_tone1",
                    "names": [
                        "woman_with_veil_tone1",
                        "woman_with_veil_light_skin_tone"
                    ],
                    "surrogates": "👰🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_with_veil_tone2",
                    "names": [
                        "woman_with_veil_tone2",
                        "woman_with_veil_medium_light_skin_tone"
                    ],
                    "surrogates": "👰🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_with_veil_tone3",
                    "names": [
                        "woman_with_veil_tone3",
                        "woman_with_veil_medium_skin_tone"
                    ],
                    "surrogates": "👰🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_with_veil_tone4",
                    "names": [
                        "woman_with_veil_tone4",
                        "woman_with_veil_medium_dark_skin_tone"
                    ],
                    "surrogates": "👰🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_with_veil_tone5",
                    "names": [
                        "woman_with_veil_tone5",
                        "woman_with_veil_dark_skin_tone"
                    ],
                    "surrogates": "👰🏿‍♀️"
                }
            }
        },
        "man_with_veil": {
            "name": "man_with_veil",
            "names": [
                "man_with_veil"
            ],
            "surrogates": "👰‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_with_veil_tone1",
                    "names": [
                        "man_with_veil_tone1",
                        "man_with_veil_light_skin_tone"
                    ],
                    "surrogates": "👰🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_with_veil_tone2",
                    "names": [
                        "man_with_veil_tone2",
                        "man_with_veil_medium_light_skin_tone"
                    ],
                    "surrogates": "👰🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_with_veil_tone3",
                    "names": [
                        "man_with_veil_tone3",
                        "man_with_veil_medium_skin_tone"
                    ],
                    "surrogates": "👰🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_with_veil_tone4",
                    "names": [
                        "man_with_veil_tone4",
                        "man_with_veil_medium_dark_skin_tone"
                    ],
                    "surrogates": "👰🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_with_veil_tone5",
                    "names": [
                        "man_with_veil_tone5",
                        "man_with_veil_dark_skin_tone"
                    ],
                    "surrogates": "👰🏿‍♂️"
                }
            }
        },
        "person_in_tuxedo": {
            "name": "person_in_tuxedo",
            "names": [
                "person_in_tuxedo"
            ],
            "surrogates": "🤵",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_in_tuxedo_tone1",
                    "names": [
                        "person_in_tuxedo_tone1",
                        "tuxedo_tone1"
                    ],
                    "surrogates": "🤵🏻"
                },
                "1f3fc": {
                    "name": "person_in_tuxedo_tone2",
                    "names": [
                        "person_in_tuxedo_tone2",
                        "tuxedo_tone2"
                    ],
                    "surrogates": "🤵🏼"
                },
                "1f3fd": {
                    "name": "person_in_tuxedo_tone3",
                    "names": [
                        "person_in_tuxedo_tone3",
                        "tuxedo_tone3"
                    ],
                    "surrogates": "🤵🏽"
                },
                "1f3fe": {
                    "name": "person_in_tuxedo_tone4",
                    "names": [
                        "person_in_tuxedo_tone4",
                        "tuxedo_tone4"
                    ],
                    "surrogates": "🤵🏾"
                },
                "1f3ff": {
                    "name": "person_in_tuxedo_tone5",
                    "names": [
                        "person_in_tuxedo_tone5",
                        "tuxedo_tone5"
                    ],
                    "surrogates": "🤵🏿"
                }
            }
        },
        "woman_in_tuxedo": {
            "name": "woman_in_tuxedo",
            "names": [
                "woman_in_tuxedo"
            ],
            "surrogates": "🤵‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_in_tuxedo_tone1",
                    "names": [
                        "woman_in_tuxedo_tone1",
                        "woman_in_tuxedo_light_skin_tone"
                    ],
                    "surrogates": "🤵🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_in_tuxedo_tone2",
                    "names": [
                        "woman_in_tuxedo_tone2",
                        "woman_in_tuxedo_medium_light_skin_tone"
                    ],
                    "surrogates": "🤵🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_in_tuxedo_tone3",
                    "names": [
                        "woman_in_tuxedo_tone3",
                        "woman_in_tuxedo_medium_skin_tone"
                    ],
                    "surrogates": "🤵🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_in_tuxedo_tone4",
                    "names": [
                        "woman_in_tuxedo_tone4",
                        "woman_in_tuxedo_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤵🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_in_tuxedo_tone5",
                    "names": [
                        "woman_in_tuxedo_tone5",
                        "woman_in_tuxedo_dark_skin_tone"
                    ],
                    "surrogates": "🤵🏿‍♀️"
                }
            }
        },
        "man_in_tuxedo": {
            "name": "man_in_tuxedo",
            "names": [
                "man_in_tuxedo"
            ],
            "surrogates": "🤵‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_in_tuxedo_tone1",
                    "names": [
                        "man_in_tuxedo_tone1",
                        "man_in_tuxedo_light_skin_tone"
                    ],
                    "surrogates": "🤵🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_in_tuxedo_tone2",
                    "names": [
                        "man_in_tuxedo_tone2",
                        "man_in_tuxedo_medium_light_skin_tone"
                    ],
                    "surrogates": "🤵🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_in_tuxedo_tone3",
                    "names": [
                        "man_in_tuxedo_tone3",
                        "man_in_tuxedo_medium_skin_tone"
                    ],
                    "surrogates": "🤵🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_in_tuxedo_tone4",
                    "names": [
                        "man_in_tuxedo_tone4",
                        "man_in_tuxedo_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤵🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_in_tuxedo_tone5",
                    "names": [
                        "man_in_tuxedo_tone5",
                        "man_in_tuxedo_dark_skin_tone"
                    ],
                    "surrogates": "🤵🏿‍♂️"
                }
            }
        },
        "person_with_crown": {
            "name": "person_with_crown",
            "names": [
                "person_with_crown"
            ],
            "surrogates": "🫅",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_with_crown_tone1",
                    "names": [
                        "person_with_crown_tone1",
                        "person_with_crown_light_skin_tone"
                    ],
                    "surrogates": "🫅🏻"
                },
                "1f3fc": {
                    "name": "person_with_crown_tone2",
                    "names": [
                        "person_with_crown_tone2",
                        "person_with_crown_medium_light_skin_tone"
                    ],
                    "surrogates": "🫅🏼"
                },
                "1f3fd": {
                    "name": "person_with_crown_tone3",
                    "names": [
                        "person_with_crown_tone3",
                        "person_with_crown_medium_skin_tone"
                    ],
                    "surrogates": "🫅🏽"
                },
                "1f3fe": {
                    "name": "person_with_crown_tone4",
                    "names": [
                        "person_with_crown_tone4",
                        "person_with_crown_medium_dark_skin_tone"
                    ],
                    "surrogates": "🫅🏾"
                },
                "1f3ff": {
                    "name": "person_with_crown_tone5",
                    "names": [
                        "person_with_crown_tone5",
                        "person_with_crown_dark_skin_tone"
                    ],
                    "surrogates": "🫅🏿"
                }
            }
        },
        "princess": {
            "name": "princess",
            "names": [
                "princess"
            ],
            "surrogates": "👸",
            "diversityChildren": {
                "1f3fb": {
                    "name": "princess_tone1",
                    "names": [
                        "princess_tone1"
                    ],
                    "surrogates": "👸🏻"
                },
                "1f3fc": {
                    "name": "princess_tone2",
                    "names": [
                        "princess_tone2"
                    ],
                    "surrogates": "👸🏼"
                },
                "1f3fd": {
                    "name": "princess_tone3",
                    "names": [
                        "princess_tone3"
                    ],
                    "surrogates": "👸🏽"
                },
                "1f3fe": {
                    "name": "princess_tone4",
                    "names": [
                        "princess_tone4"
                    ],
                    "surrogates": "👸🏾"
                },
                "1f3ff": {
                    "name": "princess_tone5",
                    "names": [
                        "princess_tone5"
                    ],
                    "surrogates": "👸🏿"
                }
            }
        },
        "prince": {
            "name": "prince",
            "names": [
                "prince"
            ],
            "surrogates": "🤴",
            "diversityChildren": {
                "1f3fb": {
                    "name": "prince_tone1",
                    "names": [
                        "prince_tone1"
                    ],
                    "surrogates": "🤴🏻"
                },
                "1f3fc": {
                    "name": "prince_tone2",
                    "names": [
                        "prince_tone2"
                    ],
                    "surrogates": "🤴🏼"
                },
                "1f3fd": {
                    "name": "prince_tone3",
                    "names": [
                        "prince_tone3"
                    ],
                    "surrogates": "🤴🏽"
                },
                "1f3fe": {
                    "name": "prince_tone4",
                    "names": [
                        "prince_tone4"
                    ],
                    "surrogates": "🤴🏾"
                },
                "1f3ff": {
                    "name": "prince_tone5",
                    "names": [
                        "prince_tone5"
                    ],
                    "surrogates": "🤴🏿"
                }
            }
        },
        "superhero": {
            "name": "superhero",
            "names": [
                "superhero"
            ],
            "surrogates": "🦸",
            "diversityChildren": {
                "1f3fb": {
                    "name": "superhero_tone1",
                    "names": [
                        "superhero_tone1",
                        "superhero_light_skin_tone"
                    ],
                    "surrogates": "🦸🏻"
                },
                "1f3fc": {
                    "name": "superhero_tone2",
                    "names": [
                        "superhero_tone2",
                        "superhero_medium_light_skin_tone"
                    ],
                    "surrogates": "🦸🏼"
                },
                "1f3fd": {
                    "name": "superhero_tone3",
                    "names": [
                        "superhero_tone3",
                        "superhero_medium_skin_tone"
                    ],
                    "surrogates": "🦸🏽"
                },
                "1f3fe": {
                    "name": "superhero_tone4",
                    "names": [
                        "superhero_tone4",
                        "superhero_medium_dark_skin_tone"
                    ],
                    "surrogates": "🦸🏾"
                },
                "1f3ff": {
                    "name": "superhero_tone5",
                    "names": [
                        "superhero_tone5",
                        "superhero_dark_skin_tone"
                    ],
                    "surrogates": "🦸🏿"
                }
            }
        },
        "woman_superhero": {
            "name": "woman_superhero",
            "names": [
                "woman_superhero"
            ],
            "surrogates": "🦸‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_superhero_tone1",
                    "names": [
                        "woman_superhero_tone1",
                        "woman_superhero_light_skin_tone"
                    ],
                    "surrogates": "🦸🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_superhero_tone2",
                    "names": [
                        "woman_superhero_tone2",
                        "woman_superhero_medium_light_skin_tone"
                    ],
                    "surrogates": "🦸🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_superhero_tone3",
                    "names": [
                        "woman_superhero_tone3",
                        "woman_superhero_medium_skin_tone"
                    ],
                    "surrogates": "🦸🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_superhero_tone4",
                    "names": [
                        "woman_superhero_tone4",
                        "woman_superhero_medium_dark_skin_tone"
                    ],
                    "surrogates": "🦸🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_superhero_tone5",
                    "names": [
                        "woman_superhero_tone5",
                        "woman_superhero_dark_skin_tone"
                    ],
                    "surrogates": "🦸🏿‍♀️"
                }
            }
        },
        "man_superhero": {
            "name": "man_superhero",
            "names": [
                "man_superhero"
            ],
            "surrogates": "🦸‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_superhero_tone1",
                    "names": [
                        "man_superhero_tone1",
                        "man_superhero_light_skin_tone"
                    ],
                    "surrogates": "🦸🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_superhero_tone2",
                    "names": [
                        "man_superhero_tone2",
                        "man_superhero_medium_light_skin_tone"
                    ],
                    "surrogates": "🦸🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_superhero_tone3",
                    "names": [
                        "man_superhero_tone3",
                        "man_superhero_medium_skin_tone"
                    ],
                    "surrogates": "🦸🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_superhero_tone4",
                    "names": [
                        "man_superhero_tone4",
                        "man_superhero_medium_dark_skin_tone"
                    ],
                    "surrogates": "🦸🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_superhero_tone5",
                    "names": [
                        "man_superhero_tone5",
                        "man_superhero_dark_skin_tone"
                    ],
                    "surrogates": "🦸🏿‍♂️"
                }
            }
        },
        "supervillain": {
            "name": "supervillain",
            "names": [
                "supervillain"
            ],
            "surrogates": "🦹",
            "diversityChildren": {
                "1f3fb": {
                    "name": "supervillain_tone1",
                    "names": [
                        "supervillain_tone1",
                        "supervillain_light_skin_tone"
                    ],
                    "surrogates": "🦹🏻"
                },
                "1f3fc": {
                    "name": "supervillain_tone2",
                    "names": [
                        "supervillain_tone2",
                        "supervillain_medium_light_skin_tone"
                    ],
                    "surrogates": "🦹🏼"
                },
                "1f3fd": {
                    "name": "supervillain_tone3",
                    "names": [
                        "supervillain_tone3",
                        "supervillain_medium_skin_tone"
                    ],
                    "surrogates": "🦹🏽"
                },
                "1f3fe": {
                    "name": "supervillain_tone4",
                    "names": [
                        "supervillain_tone4",
                        "supervillain_medium_dark_skin_tone"
                    ],
                    "surrogates": "🦹🏾"
                },
                "1f3ff": {
                    "name": "supervillain_tone5",
                    "names": [
                        "supervillain_tone5",
                        "supervillain_dark_skin_tone"
                    ],
                    "surrogates": "🦹🏿"
                }
            }
        },
        "woman_supervillain": {
            "name": "woman_supervillain",
            "names": [
                "woman_supervillain"
            ],
            "surrogates": "🦹‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_supervillain_tone1",
                    "names": [
                        "woman_supervillain_tone1",
                        "woman_supervillain_light_skin_tone"
                    ],
                    "surrogates": "🦹🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_supervillain_tone2",
                    "names": [
                        "woman_supervillain_tone2",
                        "woman_supervillain_medium_light_skin_tone"
                    ],
                    "surrogates": "🦹🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_supervillain_tone3",
                    "names": [
                        "woman_supervillain_tone3",
                        "woman_supervillain_medium_skin_tone"
                    ],
                    "surrogates": "🦹🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_supervillain_tone4",
                    "names": [
                        "woman_supervillain_tone4",
                        "woman_supervillain_medium_dark_skin_tone"
                    ],
                    "surrogates": "🦹🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_supervillain_tone5",
                    "names": [
                        "woman_supervillain_tone5",
                        "woman_supervillain_dark_skin_tone"
                    ],
                    "surrogates": "🦹🏿‍♀️"
                }
            }
        },
        "man_supervillain": {
            "name": "man_supervillain",
            "names": [
                "man_supervillain"
            ],
            "surrogates": "🦹‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_supervillain_tone1",
                    "names": [
                        "man_supervillain_tone1",
                        "man_supervillain_light_skin_tone"
                    ],
                    "surrogates": "🦹🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_supervillain_tone2",
                    "names": [
                        "man_supervillain_tone2",
                        "man_supervillain_medium_light_skin_tone"
                    ],
                    "surrogates": "🦹🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_supervillain_tone3",
                    "names": [
                        "man_supervillain_tone3",
                        "man_supervillain_medium_skin_tone"
                    ],
                    "surrogates": "🦹🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_supervillain_tone4",
                    "names": [
                        "man_supervillain_tone4",
                        "man_supervillain_medium_dark_skin_tone"
                    ],
                    "surrogates": "🦹🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_supervillain_tone5",
                    "names": [
                        "man_supervillain_tone5",
                        "man_supervillain_dark_skin_tone"
                    ],
                    "surrogates": "🦹🏿‍♂️"
                }
            }
        },
        "ninja": {
            "name": "ninja",
            "names": [
                "ninja"
            ],
            "surrogates": "🥷",
            "diversityChildren": {
                "1f3fb": {
                    "name": "ninja_tone1",
                    "names": [
                        "ninja_tone1",
                        "ninja_light_skin_tone"
                    ],
                    "surrogates": "🥷🏻"
                },
                "1f3fc": {
                    "name": "ninja_tone2",
                    "names": [
                        "ninja_tone2",
                        "ninja_medium_light_skin_tone"
                    ],
                    "surrogates": "🥷🏼"
                },
                "1f3fd": {
                    "name": "ninja_tone3",
                    "names": [
                        "ninja_tone3",
                        "ninja_medium_skin_tone"
                    ],
                    "surrogates": "🥷🏽"
                },
                "1f3fe": {
                    "name": "ninja_tone4",
                    "names": [
                        "ninja_tone4",
                        "ninja_medium_dark_skin_tone"
                    ],
                    "surrogates": "🥷🏾"
                },
                "1f3ff": {
                    "name": "ninja_tone5",
                    "names": [
                        "ninja_tone5",
                        "ninja_dark_skin_tone"
                    ],
                    "surrogates": "🥷🏿"
                }
            }
        },
        "mx_claus": {
            "name": "mx_claus",
            "names": [
                "mx_claus"
            ],
            "surrogates": "🧑‍🎄",
            "diversityChildren": {
                "1f3fb": {
                    "name": "mx_claus_tone1",
                    "names": [
                        "mx_claus_tone1",
                        "mx_claus_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🎄"
                },
                "1f3fc": {
                    "name": "mx_claus_tone2",
                    "names": [
                        "mx_claus_tone2",
                        "mx_claus_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🎄"
                },
                "1f3fd": {
                    "name": "mx_claus_tone3",
                    "names": [
                        "mx_claus_tone3",
                        "mx_claus_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🎄"
                },
                "1f3fe": {
                    "name": "mx_claus_tone4",
                    "names": [
                        "mx_claus_tone4",
                        "mx_claus_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🎄"
                },
                "1f3ff": {
                    "name": "mx_claus_tone5",
                    "names": [
                        "mx_claus_tone5",
                        "mx_claus_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🎄"
                }
            }
        },
        "mrs_claus": {
            "name": "mrs_claus",
            "names": [
                "mrs_claus",
                "mother_christmas"
            ],
            "surrogates": "🤶",
            "diversityChildren": {
                "1f3fb": {
                    "name": "mrs_claus_tone1",
                    "names": [
                        "mrs_claus_tone1",
                        "mother_christmas_tone1"
                    ],
                    "surrogates": "🤶🏻"
                },
                "1f3fc": {
                    "name": "mrs_claus_tone2",
                    "names": [
                        "mrs_claus_tone2",
                        "mother_christmas_tone2"
                    ],
                    "surrogates": "🤶🏼"
                },
                "1f3fd": {
                    "name": "mrs_claus_tone3",
                    "names": [
                        "mrs_claus_tone3",
                        "mother_christmas_tone3"
                    ],
                    "surrogates": "🤶🏽"
                },
                "1f3fe": {
                    "name": "mrs_claus_tone4",
                    "names": [
                        "mrs_claus_tone4",
                        "mother_christmas_tone4"
                    ],
                    "surrogates": "🤶🏾"
                },
                "1f3ff": {
                    "name": "mrs_claus_tone5",
                    "names": [
                        "mrs_claus_tone5",
                        "mother_christmas_tone5"
                    ],
                    "surrogates": "🤶🏿"
                }
            }
        },
        "santa": {
            "name": "santa",
            "names": [
                "santa",
                "santa_claus"
            ],
            "surrogates": "🎅",
            "diversityChildren": {
                "1f3fb": {
                    "name": "santa_tone1",
                    "names": [
                        "santa_tone1"
                    ],
                    "surrogates": "🎅🏻"
                },
                "1f3fc": {
                    "name": "santa_tone2",
                    "names": [
                        "santa_tone2"
                    ],
                    "surrogates": "🎅🏼"
                },
                "1f3fd": {
                    "name": "santa_tone3",
                    "names": [
                        "santa_tone3"
                    ],
                    "surrogates": "🎅🏽"
                },
                "1f3fe": {
                    "name": "santa_tone4",
                    "names": [
                        "santa_tone4"
                    ],
                    "surrogates": "🎅🏾"
                },
                "1f3ff": {
                    "name": "santa_tone5",
                    "names": [
                        "santa_tone5"
                    ],
                    "surrogates": "🎅🏿"
                }
            }
        },
        "mage": {
            "name": "mage",
            "names": [
                "mage"
            ],
            "surrogates": "🧙",
            "diversityChildren": {
                "1f3fb": {
                    "name": "mage_tone1",
                    "names": [
                        "mage_tone1",
                        "mage_light_skin_tone"
                    ],
                    "surrogates": "🧙🏻"
                },
                "1f3fc": {
                    "name": "mage_tone2",
                    "names": [
                        "mage_tone2",
                        "mage_medium_light_skin_tone"
                    ],
                    "surrogates": "🧙🏼"
                },
                "1f3fd": {
                    "name": "mage_tone3",
                    "names": [
                        "mage_tone3",
                        "mage_medium_skin_tone"
                    ],
                    "surrogates": "🧙🏽"
                },
                "1f3fe": {
                    "name": "mage_tone4",
                    "names": [
                        "mage_tone4",
                        "mage_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧙🏾"
                },
                "1f3ff": {
                    "name": "mage_tone5",
                    "names": [
                        "mage_tone5",
                        "mage_dark_skin_tone"
                    ],
                    "surrogates": "🧙🏿"
                }
            }
        },
        "woman_mage": {
            "name": "woman_mage",
            "names": [
                "woman_mage"
            ],
            "surrogates": "🧙‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_mage_tone1",
                    "names": [
                        "woman_mage_tone1",
                        "woman_mage_light_skin_tone"
                    ],
                    "surrogates": "🧙🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_mage_tone2",
                    "names": [
                        "woman_mage_tone2",
                        "woman_mage_medium_light_skin_tone"
                    ],
                    "surrogates": "🧙🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_mage_tone3",
                    "names": [
                        "woman_mage_tone3",
                        "woman_mage_medium_skin_tone"
                    ],
                    "surrogates": "🧙🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_mage_tone4",
                    "names": [
                        "woman_mage_tone4",
                        "woman_mage_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧙🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_mage_tone5",
                    "names": [
                        "woman_mage_tone5",
                        "woman_mage_dark_skin_tone"
                    ],
                    "surrogates": "🧙🏿‍♀️"
                }
            }
        },
        "man_mage": {
            "name": "man_mage",
            "names": [
                "man_mage"
            ],
            "surrogates": "🧙‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_mage_tone1",
                    "names": [
                        "man_mage_tone1",
                        "man_mage_light_skin_tone"
                    ],
                    "surrogates": "🧙🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_mage_tone2",
                    "names": [
                        "man_mage_tone2",
                        "man_mage_medium_light_skin_tone"
                    ],
                    "surrogates": "🧙🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_mage_tone3",
                    "names": [
                        "man_mage_tone3",
                        "man_mage_medium_skin_tone"
                    ],
                    "surrogates": "🧙🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_mage_tone4",
                    "names": [
                        "man_mage_tone4",
                        "man_mage_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧙🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_mage_tone5",
                    "names": [
                        "man_mage_tone5",
                        "man_mage_dark_skin_tone"
                    ],
                    "surrogates": "🧙🏿‍♂️"
                }
            }
        },
        "elf": {
            "name": "elf",
            "names": [
                "elf"
            ],
            "surrogates": "🧝",
            "diversityChildren": {
                "1f3fb": {
                    "name": "elf_tone1",
                    "names": [
                        "elf_tone1",
                        "elf_light_skin_tone"
                    ],
                    "surrogates": "🧝🏻"
                },
                "1f3fc": {
                    "name": "elf_tone2",
                    "names": [
                        "elf_tone2",
                        "elf_medium_light_skin_tone"
                    ],
                    "surrogates": "🧝🏼"
                },
                "1f3fd": {
                    "name": "elf_tone3",
                    "names": [
                        "elf_tone3",
                        "elf_medium_skin_tone"
                    ],
                    "surrogates": "🧝🏽"
                },
                "1f3fe": {
                    "name": "elf_tone4",
                    "names": [
                        "elf_tone4",
                        "elf_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧝🏾"
                },
                "1f3ff": {
                    "name": "elf_tone5",
                    "names": [
                        "elf_tone5",
                        "elf_dark_skin_tone"
                    ],
                    "surrogates": "🧝🏿"
                }
            }
        },
        "woman_elf": {
            "name": "woman_elf",
            "names": [
                "woman_elf"
            ],
            "surrogates": "🧝‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_elf_tone1",
                    "names": [
                        "woman_elf_tone1",
                        "woman_elf_light_skin_tone"
                    ],
                    "surrogates": "🧝🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_elf_tone2",
                    "names": [
                        "woman_elf_tone2",
                        "woman_elf_medium_light_skin_tone"
                    ],
                    "surrogates": "🧝🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_elf_tone3",
                    "names": [
                        "woman_elf_tone3",
                        "woman_elf_medium_skin_tone"
                    ],
                    "surrogates": "🧝🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_elf_tone4",
                    "names": [
                        "woman_elf_tone4",
                        "woman_elf_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧝🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_elf_tone5",
                    "names": [
                        "woman_elf_tone5",
                        "woman_elf_dark_skin_tone"
                    ],
                    "surrogates": "🧝🏿‍♀️"
                }
            }
        },
        "man_elf": {
            "name": "man_elf",
            "names": [
                "man_elf"
            ],
            "surrogates": "🧝‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_elf_tone1",
                    "names": [
                        "man_elf_tone1",
                        "man_elf_light_skin_tone"
                    ],
                    "surrogates": "🧝🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_elf_tone2",
                    "names": [
                        "man_elf_tone2",
                        "man_elf_medium_light_skin_tone"
                    ],
                    "surrogates": "🧝🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_elf_tone3",
                    "names": [
                        "man_elf_tone3",
                        "man_elf_medium_skin_tone"
                    ],
                    "surrogates": "🧝🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_elf_tone4",
                    "names": [
                        "man_elf_tone4",
                        "man_elf_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧝🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_elf_tone5",
                    "names": [
                        "man_elf_tone5",
                        "man_elf_dark_skin_tone"
                    ],
                    "surrogates": "🧝🏿‍♂️"
                }
            }
        },
        "troll": {
            "name": "troll",
            "names": [
                "troll"
            ],
            "surrogates": "🧌"
        },
        "vampire": {
            "name": "vampire",
            "names": [
                "vampire"
            ],
            "surrogates": "🧛",
            "diversityChildren": {
                "1f3fb": {
                    "name": "vampire_tone1",
                    "names": [
                        "vampire_tone1",
                        "vampire_light_skin_tone"
                    ],
                    "surrogates": "🧛🏻"
                },
                "1f3fc": {
                    "name": "vampire_tone2",
                    "names": [
                        "vampire_tone2",
                        "vampire_medium_light_skin_tone"
                    ],
                    "surrogates": "🧛🏼"
                },
                "1f3fd": {
                    "name": "vampire_tone3",
                    "names": [
                        "vampire_tone3",
                        "vampire_medium_skin_tone"
                    ],
                    "surrogates": "🧛🏽"
                },
                "1f3fe": {
                    "name": "vampire_tone4",
                    "names": [
                        "vampire_tone4",
                        "vampire_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧛🏾"
                },
                "1f3ff": {
                    "name": "vampire_tone5",
                    "names": [
                        "vampire_tone5",
                        "vampire_dark_skin_tone"
                    ],
                    "surrogates": "🧛🏿"
                }
            }
        },
        "woman_vampire": {
            "name": "woman_vampire",
            "names": [
                "woman_vampire"
            ],
            "surrogates": "🧛‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_vampire_tone1",
                    "names": [
                        "woman_vampire_tone1",
                        "woman_vampire_light_skin_tone"
                    ],
                    "surrogates": "🧛🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_vampire_tone2",
                    "names": [
                        "woman_vampire_tone2",
                        "woman_vampire_medium_light_skin_tone"
                    ],
                    "surrogates": "🧛🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_vampire_tone3",
                    "names": [
                        "woman_vampire_tone3",
                        "woman_vampire_medium_skin_tone"
                    ],
                    "surrogates": "🧛🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_vampire_tone4",
                    "names": [
                        "woman_vampire_tone4",
                        "woman_vampire_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧛🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_vampire_tone5",
                    "names": [
                        "woman_vampire_tone5",
                        "woman_vampire_dark_skin_tone"
                    ],
                    "surrogates": "🧛🏿‍♀️"
                }
            }
        },
        "man_vampire": {
            "name": "man_vampire",
            "names": [
                "man_vampire"
            ],
            "surrogates": "🧛‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_vampire_tone1",
                    "names": [
                        "man_vampire_tone1",
                        "man_vampire_light_skin_tone"
                    ],
                    "surrogates": "🧛🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_vampire_tone2",
                    "names": [
                        "man_vampire_tone2",
                        "man_vampire_medium_light_skin_tone"
                    ],
                    "surrogates": "🧛🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_vampire_tone3",
                    "names": [
                        "man_vampire_tone3",
                        "man_vampire_medium_skin_tone"
                    ],
                    "surrogates": "🧛🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_vampire_tone4",
                    "names": [
                        "man_vampire_tone4",
                        "man_vampire_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧛🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_vampire_tone5",
                    "names": [
                        "man_vampire_tone5",
                        "man_vampire_dark_skin_tone"
                    ],
                    "surrogates": "🧛🏿‍♂️"
                }
            }
        },
        "zombie": {
            "name": "zombie",
            "names": [
                "zombie"
            ],
            "surrogates": "🧟"
        },
        "woman_zombie": {
            "name": "woman_zombie",
            "names": [
                "woman_zombie"
            ],
            "surrogates": "🧟‍♀️"
        },
        "man_zombie": {
            "name": "man_zombie",
            "names": [
                "man_zombie"
            ],
            "surrogates": "🧟‍♂️"
        },
        "genie": {
            "name": "genie",
            "names": [
                "genie"
            ],
            "surrogates": "🧞"
        },
        "woman_genie": {
            "name": "woman_genie",
            "names": [
                "woman_genie"
            ],
            "surrogates": "🧞‍♀️"
        },
        "man_genie": {
            "name": "man_genie",
            "names": [
                "man_genie"
            ],
            "surrogates": "🧞‍♂️"
        },
        "merperson": {
            "name": "merperson",
            "names": [
                "merperson"
            ],
            "surrogates": "🧜",
            "diversityChildren": {
                "1f3fb": {
                    "name": "merperson_tone1",
                    "names": [
                        "merperson_tone1",
                        "merperson_light_skin_tone"
                    ],
                    "surrogates": "🧜🏻"
                },
                "1f3fc": {
                    "name": "merperson_tone2",
                    "names": [
                        "merperson_tone2",
                        "merperson_medium_light_skin_tone"
                    ],
                    "surrogates": "🧜🏼"
                },
                "1f3fd": {
                    "name": "merperson_tone3",
                    "names": [
                        "merperson_tone3",
                        "merperson_medium_skin_tone"
                    ],
                    "surrogates": "🧜🏽"
                },
                "1f3fe": {
                    "name": "merperson_tone4",
                    "names": [
                        "merperson_tone4",
                        "merperson_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧜🏾"
                },
                "1f3ff": {
                    "name": "merperson_tone5",
                    "names": [
                        "merperson_tone5",
                        "merperson_dark_skin_tone"
                    ],
                    "surrogates": "🧜🏿"
                }
            }
        },
        "mermaid": {
            "name": "mermaid",
            "names": [
                "mermaid"
            ],
            "surrogates": "🧜‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "mermaid_tone1",
                    "names": [
                        "mermaid_tone1",
                        "mermaid_light_skin_tone"
                    ],
                    "surrogates": "🧜🏻‍♀️"
                },
                "1f3fc": {
                    "name": "mermaid_tone2",
                    "names": [
                        "mermaid_tone2",
                        "mermaid_medium_light_skin_tone"
                    ],
                    "surrogates": "🧜🏼‍♀️"
                },
                "1f3fd": {
                    "name": "mermaid_tone3",
                    "names": [
                        "mermaid_tone3",
                        "mermaid_medium_skin_tone"
                    ],
                    "surrogates": "🧜🏽‍♀️"
                },
                "1f3fe": {
                    "name": "mermaid_tone4",
                    "names": [
                        "mermaid_tone4",
                        "mermaid_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧜🏾‍♀️"
                },
                "1f3ff": {
                    "name": "mermaid_tone5",
                    "names": [
                        "mermaid_tone5",
                        "mermaid_dark_skin_tone"
                    ],
                    "surrogates": "🧜🏿‍♀️"
                }
            }
        },
        "merman": {
            "name": "merman",
            "names": [
                "merman"
            ],
            "surrogates": "🧜‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "merman_tone1",
                    "names": [
                        "merman_tone1",
                        "merman_light_skin_tone"
                    ],
                    "surrogates": "🧜🏻‍♂️"
                },
                "1f3fc": {
                    "name": "merman_tone2",
                    "names": [
                        "merman_tone2",
                        "merman_medium_light_skin_tone"
                    ],
                    "surrogates": "🧜🏼‍♂️"
                },
                "1f3fd": {
                    "name": "merman_tone3",
                    "names": [
                        "merman_tone3",
                        "merman_medium_skin_tone"
                    ],
                    "surrogates": "🧜🏽‍♂️"
                },
                "1f3fe": {
                    "name": "merman_tone4",
                    "names": [
                        "merman_tone4",
                        "merman_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧜🏾‍♂️"
                },
                "1f3ff": {
                    "name": "merman_tone5",
                    "names": [
                        "merman_tone5",
                        "merman_dark_skin_tone"
                    ],
                    "surrogates": "🧜🏿‍♂️"
                }
            }
        },
        "fairy": {
            "name": "fairy",
            "names": [
                "fairy"
            ],
            "surrogates": "🧚",
            "diversityChildren": {
                "1f3fb": {
                    "name": "fairy_tone1",
                    "names": [
                        "fairy_tone1",
                        "fairy_light_skin_tone"
                    ],
                    "surrogates": "🧚🏻"
                },
                "1f3fc": {
                    "name": "fairy_tone2",
                    "names": [
                        "fairy_tone2",
                        "fairy_medium_light_skin_tone"
                    ],
                    "surrogates": "🧚🏼"
                },
                "1f3fd": {
                    "name": "fairy_tone3",
                    "names": [
                        "fairy_tone3",
                        "fairy_medium_skin_tone"
                    ],
                    "surrogates": "🧚🏽"
                },
                "1f3fe": {
                    "name": "fairy_tone4",
                    "names": [
                        "fairy_tone4",
                        "fairy_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧚🏾"
                },
                "1f3ff": {
                    "name": "fairy_tone5",
                    "names": [
                        "fairy_tone5",
                        "fairy_dark_skin_tone"
                    ],
                    "surrogates": "🧚🏿"
                }
            }
        },
        "woman_fairy": {
            "name": "woman_fairy",
            "names": [
                "woman_fairy"
            ],
            "surrogates": "🧚‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_fairy_tone1",
                    "names": [
                        "woman_fairy_tone1",
                        "woman_fairy_light_skin_tone"
                    ],
                    "surrogates": "🧚🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_fairy_tone2",
                    "names": [
                        "woman_fairy_tone2",
                        "woman_fairy_medium_light_skin_tone"
                    ],
                    "surrogates": "🧚🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_fairy_tone3",
                    "names": [
                        "woman_fairy_tone3",
                        "woman_fairy_medium_skin_tone"
                    ],
                    "surrogates": "🧚🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_fairy_tone4",
                    "names": [
                        "woman_fairy_tone4",
                        "woman_fairy_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧚🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_fairy_tone5",
                    "names": [
                        "woman_fairy_tone5",
                        "woman_fairy_dark_skin_tone"
                    ],
                    "surrogates": "🧚🏿‍♀️"
                }
            }
        },
        "man_fairy": {
            "name": "man_fairy",
            "names": [
                "man_fairy"
            ],
            "surrogates": "🧚‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_fairy_tone1",
                    "names": [
                        "man_fairy_tone1",
                        "man_fairy_light_skin_tone"
                    ],
                    "surrogates": "🧚🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_fairy_tone2",
                    "names": [
                        "man_fairy_tone2",
                        "man_fairy_medium_light_skin_tone"
                    ],
                    "surrogates": "🧚🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_fairy_tone3",
                    "names": [
                        "man_fairy_tone3",
                        "man_fairy_medium_skin_tone"
                    ],
                    "surrogates": "🧚🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_fairy_tone4",
                    "names": [
                        "man_fairy_tone4",
                        "man_fairy_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧚🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_fairy_tone5",
                    "names": [
                        "man_fairy_tone5",
                        "man_fairy_dark_skin_tone"
                    ],
                    "surrogates": "🧚🏿‍♂️"
                }
            }
        },
        "angel": {
            "name": "angel",
            "names": [
                "angel",
                "baby_angel"
            ],
            "surrogates": "👼",
            "diversityChildren": {
                "1f3fb": {
                    "name": "angel_tone1",
                    "names": [
                        "angel_tone1"
                    ],
                    "surrogates": "👼🏻"
                },
                "1f3fc": {
                    "name": "angel_tone2",
                    "names": [
                        "angel_tone2"
                    ],
                    "surrogates": "👼🏼"
                },
                "1f3fd": {
                    "name": "angel_tone3",
                    "names": [
                        "angel_tone3"
                    ],
                    "surrogates": "👼🏽"
                },
                "1f3fe": {
                    "name": "angel_tone4",
                    "names": [
                        "angel_tone4"
                    ],
                    "surrogates": "👼🏾"
                },
                "1f3ff": {
                    "name": "angel_tone5",
                    "names": [
                        "angel_tone5"
                    ],
                    "surrogates": "👼🏿"
                }
            }
        },
        "pregnant_person": {
            "name": "pregnant_person",
            "names": [
                "pregnant_person"
            ],
            "surrogates": "🫄",
            "diversityChildren": {
                "1f3fb": {
                    "name": "pregnant_person_tone1",
                    "names": [
                        "pregnant_person_tone1",
                        "pregnant_person_light_skin_tone"
                    ],
                    "surrogates": "🫄🏻"
                },
                "1f3fc": {
                    "name": "pregnant_person_tone2",
                    "names": [
                        "pregnant_person_tone2",
                        "pregnant_person_medium_light_skin_tone"
                    ],
                    "surrogates": "🫄🏼"
                },
                "1f3fd": {
                    "name": "pregnant_person_tone3",
                    "names": [
                        "pregnant_person_tone3",
                        "pregnant_person_medium_skin_tone"
                    ],
                    "surrogates": "🫄🏽"
                },
                "1f3fe": {
                    "name": "pregnant_person_tone4",
                    "names": [
                        "pregnant_person_tone4",
                        "pregnant_person_medium_dark_skin_tone"
                    ],
                    "surrogates": "🫄🏾"
                },
                "1f3ff": {
                    "name": "pregnant_person_tone5",
                    "names": [
                        "pregnant_person_tone5",
                        "pregnant_person_dark_skin_tone"
                    ],
                    "surrogates": "🫄🏿"
                }
            }
        },
        "pregnant_woman": {
            "name": "pregnant_woman",
            "names": [
                "pregnant_woman",
                "expecting_woman"
            ],
            "surrogates": "🤰",
            "diversityChildren": {
                "1f3fb": {
                    "name": "pregnant_woman_tone1",
                    "names": [
                        "pregnant_woman_tone1",
                        "expecting_woman_tone1"
                    ],
                    "surrogates": "🤰🏻"
                },
                "1f3fc": {
                    "name": "pregnant_woman_tone2",
                    "names": [
                        "pregnant_woman_tone2",
                        "expecting_woman_tone2"
                    ],
                    "surrogates": "🤰🏼"
                },
                "1f3fd": {
                    "name": "pregnant_woman_tone3",
                    "names": [
                        "pregnant_woman_tone3",
                        "expecting_woman_tone3"
                    ],
                    "surrogates": "🤰🏽"
                },
                "1f3fe": {
                    "name": "pregnant_woman_tone4",
                    "names": [
                        "pregnant_woman_tone4",
                        "expecting_woman_tone4"
                    ],
                    "surrogates": "🤰🏾"
                },
                "1f3ff": {
                    "name": "pregnant_woman_tone5",
                    "names": [
                        "pregnant_woman_tone5",
                        "expecting_woman_tone5"
                    ],
                    "surrogates": "🤰🏿"
                }
            }
        },
        "pregnant_man": {
            "name": "pregnant_man",
            "names": [
                "pregnant_man"
            ],
            "surrogates": "🫃",
            "diversityChildren": {
                "1f3fb": {
                    "name": "pregnant_man_tone1",
                    "names": [
                        "pregnant_man_tone1",
                        "pregnant_man_light_skin_tone"
                    ],
                    "surrogates": "🫃🏻"
                },
                "1f3fc": {
                    "name": "pregnant_man_tone2",
                    "names": [
                        "pregnant_man_tone2",
                        "pregnant_man_medium_light_skin_tone"
                    ],
                    "surrogates": "🫃🏼"
                },
                "1f3fd": {
                    "name": "pregnant_man_tone3",
                    "names": [
                        "pregnant_man_tone3",
                        "pregnant_man_medium_skin_tone"
                    ],
                    "surrogates": "🫃🏽"
                },
                "1f3fe": {
                    "name": "pregnant_man_tone4",
                    "names": [
                        "pregnant_man_tone4",
                        "pregnant_man_medium_dark_skin_tone"
                    ],
                    "surrogates": "🫃🏾"
                },
                "1f3ff": {
                    "name": "pregnant_man_tone5",
                    "names": [
                        "pregnant_man_tone5",
                        "pregnant_man_dark_skin_tone"
                    ],
                    "surrogates": "🫃🏿"
                }
            }
        },
        "breast_feeding": {
            "name": "breast_feeding",
            "names": [
                "breast_feeding"
            ],
            "surrogates": "🤱",
            "diversityChildren": {
                "1f3fb": {
                    "name": "breast_feeding_tone1",
                    "names": [
                        "breast_feeding_tone1",
                        "breast_feeding_light_skin_tone"
                    ],
                    "surrogates": "🤱🏻"
                },
                "1f3fc": {
                    "name": "breast_feeding_tone2",
                    "names": [
                        "breast_feeding_tone2",
                        "breast_feeding_medium_light_skin_tone"
                    ],
                    "surrogates": "🤱🏼"
                },
                "1f3fd": {
                    "name": "breast_feeding_tone3",
                    "names": [
                        "breast_feeding_tone3",
                        "breast_feeding_medium_skin_tone"
                    ],
                    "surrogates": "🤱🏽"
                },
                "1f3fe": {
                    "name": "breast_feeding_tone4",
                    "names": [
                        "breast_feeding_tone4",
                        "breast_feeding_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤱🏾"
                },
                "1f3ff": {
                    "name": "breast_feeding_tone5",
                    "names": [
                        "breast_feeding_tone5",
                        "breast_feeding_dark_skin_tone"
                    ],
                    "surrogates": "🤱🏿"
                }
            }
        },
        "person_feeding_baby": {
            "name": "person_feeding_baby",
            "names": [
                "person_feeding_baby"
            ],
            "surrogates": "🧑‍🍼",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_feeding_baby_tone1",
                    "names": [
                        "person_feeding_baby_tone1",
                        "person_feeding_baby_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🍼"
                },
                "1f3fc": {
                    "name": "person_feeding_baby_tone2",
                    "names": [
                        "person_feeding_baby_tone2",
                        "person_feeding_baby_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🍼"
                },
                "1f3fd": {
                    "name": "person_feeding_baby_tone3",
                    "names": [
                        "person_feeding_baby_tone3",
                        "person_feeding_baby_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🍼"
                },
                "1f3fe": {
                    "name": "person_feeding_baby_tone4",
                    "names": [
                        "person_feeding_baby_tone4",
                        "person_feeding_baby_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🍼"
                },
                "1f3ff": {
                    "name": "person_feeding_baby_tone5",
                    "names": [
                        "person_feeding_baby_tone5",
                        "person_feeding_baby_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🍼"
                }
            }
        },
        "woman_feeding_baby": {
            "name": "woman_feeding_baby",
            "names": [
                "woman_feeding_baby"
            ],
            "surrogates": "👩‍🍼",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_feeding_baby_tone1",
                    "names": [
                        "woman_feeding_baby_tone1",
                        "woman_feeding_baby_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🍼"
                },
                "1f3fc": {
                    "name": "woman_feeding_baby_tone2",
                    "names": [
                        "woman_feeding_baby_tone2",
                        "woman_feeding_baby_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🍼"
                },
                "1f3fd": {
                    "name": "woman_feeding_baby_tone3",
                    "names": [
                        "woman_feeding_baby_tone3",
                        "woman_feeding_baby_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🍼"
                },
                "1f3fe": {
                    "name": "woman_feeding_baby_tone4",
                    "names": [
                        "woman_feeding_baby_tone4",
                        "woman_feeding_baby_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🍼"
                },
                "1f3ff": {
                    "name": "woman_feeding_baby_tone5",
                    "names": [
                        "woman_feeding_baby_tone5",
                        "woman_feeding_baby_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🍼"
                }
            }
        },
        "man_feeding_baby": {
            "name": "man_feeding_baby",
            "names": [
                "man_feeding_baby"
            ],
            "surrogates": "👨‍🍼",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_feeding_baby_tone1",
                    "names": [
                        "man_feeding_baby_tone1",
                        "man_feeding_baby_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🍼"
                },
                "1f3fc": {
                    "name": "man_feeding_baby_tone2",
                    "names": [
                        "man_feeding_baby_tone2",
                        "man_feeding_baby_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🍼"
                },
                "1f3fd": {
                    "name": "man_feeding_baby_tone3",
                    "names": [
                        "man_feeding_baby_tone3",
                        "man_feeding_baby_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🍼"
                },
                "1f3fe": {
                    "name": "man_feeding_baby_tone4",
                    "names": [
                        "man_feeding_baby_tone4",
                        "man_feeding_baby_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🍼"
                },
                "1f3ff": {
                    "name": "man_feeding_baby_tone5",
                    "names": [
                        "man_feeding_baby_tone5",
                        "man_feeding_baby_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🍼"
                }
            }
        },
        "person_bowing": {
            "name": "person_bowing",
            "names": [
                "person_bowing",
                "bow"
            ],
            "surrogates": "🙇",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_bowing_tone1",
                    "names": [
                        "person_bowing_tone1",
                        "bow_tone1"
                    ],
                    "surrogates": "🙇🏻"
                },
                "1f3fc": {
                    "name": "person_bowing_tone2",
                    "names": [
                        "person_bowing_tone2",
                        "bow_tone2"
                    ],
                    "surrogates": "🙇🏼"
                },
                "1f3fd": {
                    "name": "person_bowing_tone3",
                    "names": [
                        "person_bowing_tone3",
                        "bow_tone3"
                    ],
                    "surrogates": "🙇🏽"
                },
                "1f3fe": {
                    "name": "person_bowing_tone4",
                    "names": [
                        "person_bowing_tone4",
                        "bow_tone4"
                    ],
                    "surrogates": "🙇🏾"
                },
                "1f3ff": {
                    "name": "person_bowing_tone5",
                    "names": [
                        "person_bowing_tone5",
                        "bow_tone5"
                    ],
                    "surrogates": "🙇🏿"
                }
            }
        },
        "woman_bowing": {
            "name": "woman_bowing",
            "names": [
                "woman_bowing"
            ],
            "surrogates": "🙇‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_bowing_tone1",
                    "names": [
                        "woman_bowing_tone1",
                        "woman_bowing_light_skin_tone"
                    ],
                    "surrogates": "🙇🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_bowing_tone2",
                    "names": [
                        "woman_bowing_tone2",
                        "woman_bowing_medium_light_skin_tone"
                    ],
                    "surrogates": "🙇🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_bowing_tone3",
                    "names": [
                        "woman_bowing_tone3",
                        "woman_bowing_medium_skin_tone"
                    ],
                    "surrogates": "🙇🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_bowing_tone4",
                    "names": [
                        "woman_bowing_tone4",
                        "woman_bowing_medium_dark_skin_tone"
                    ],
                    "surrogates": "🙇🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_bowing_tone5",
                    "names": [
                        "woman_bowing_tone5",
                        "woman_bowing_dark_skin_tone"
                    ],
                    "surrogates": "🙇🏿‍♀️"
                }
            }
        },
        "man_bowing": {
            "name": "man_bowing",
            "names": [
                "man_bowing"
            ],
            "surrogates": "🙇‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_bowing_tone1",
                    "names": [
                        "man_bowing_tone1",
                        "man_bowing_light_skin_tone"
                    ],
                    "surrogates": "🙇🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_bowing_tone2",
                    "names": [
                        "man_bowing_tone2",
                        "man_bowing_medium_light_skin_tone"
                    ],
                    "surrogates": "🙇🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_bowing_tone3",
                    "names": [
                        "man_bowing_tone3",
                        "man_bowing_medium_skin_tone"
                    ],
                    "surrogates": "🙇🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_bowing_tone4",
                    "names": [
                        "man_bowing_tone4",
                        "man_bowing_medium_dark_skin_tone"
                    ],
                    "surrogates": "🙇🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_bowing_tone5",
                    "names": [
                        "man_bowing_tone5",
                        "man_bowing_dark_skin_tone"
                    ],
                    "surrogates": "🙇🏿‍♂️"
                }
            }
        },
        "person_tipping_hand": {
            "name": "person_tipping_hand",
            "names": [
                "person_tipping_hand",
                "information_desk_person"
            ],
            "surrogates": "💁",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_tipping_hand_tone1",
                    "names": [
                        "person_tipping_hand_tone1",
                        "information_desk_person_tone1"
                    ],
                    "surrogates": "💁🏻"
                },
                "1f3fc": {
                    "name": "person_tipping_hand_tone2",
                    "names": [
                        "person_tipping_hand_tone2",
                        "information_desk_person_tone2"
                    ],
                    "surrogates": "💁🏼"
                },
                "1f3fd": {
                    "name": "person_tipping_hand_tone3",
                    "names": [
                        "person_tipping_hand_tone3",
                        "information_desk_person_tone3"
                    ],
                    "surrogates": "💁🏽"
                },
                "1f3fe": {
                    "name": "person_tipping_hand_tone4",
                    "names": [
                        "person_tipping_hand_tone4",
                        "information_desk_person_tone4"
                    ],
                    "surrogates": "💁🏾"
                },
                "1f3ff": {
                    "name": "person_tipping_hand_tone5",
                    "names": [
                        "person_tipping_hand_tone5",
                        "information_desk_person_tone5"
                    ],
                    "surrogates": "💁🏿"
                }
            }
        },
        "woman_tipping_hand": {
            "name": "woman_tipping_hand",
            "names": [
                "woman_tipping_hand"
            ],
            "surrogates": "💁‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_tipping_hand_tone1",
                    "names": [
                        "woman_tipping_hand_tone1",
                        "woman_tipping_hand_light_skin_tone"
                    ],
                    "surrogates": "💁🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_tipping_hand_tone2",
                    "names": [
                        "woman_tipping_hand_tone2",
                        "woman_tipping_hand_medium_light_skin_tone"
                    ],
                    "surrogates": "💁🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_tipping_hand_tone3",
                    "names": [
                        "woman_tipping_hand_tone3",
                        "woman_tipping_hand_medium_skin_tone"
                    ],
                    "surrogates": "💁🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_tipping_hand_tone4",
                    "names": [
                        "woman_tipping_hand_tone4",
                        "woman_tipping_hand_medium_dark_skin_tone"
                    ],
                    "surrogates": "💁🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_tipping_hand_tone5",
                    "names": [
                        "woman_tipping_hand_tone5",
                        "woman_tipping_hand_dark_skin_tone"
                    ],
                    "surrogates": "💁🏿‍♀️"
                }
            }
        },
        "man_tipping_hand": {
            "name": "man_tipping_hand",
            "names": [
                "man_tipping_hand"
            ],
            "surrogates": "💁‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_tipping_hand_tone1",
                    "names": [
                        "man_tipping_hand_tone1",
                        "man_tipping_hand_light_skin_tone"
                    ],
                    "surrogates": "💁🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_tipping_hand_tone2",
                    "names": [
                        "man_tipping_hand_tone2",
                        "man_tipping_hand_medium_light_skin_tone"
                    ],
                    "surrogates": "💁🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_tipping_hand_tone3",
                    "names": [
                        "man_tipping_hand_tone3",
                        "man_tipping_hand_medium_skin_tone"
                    ],
                    "surrogates": "💁🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_tipping_hand_tone4",
                    "names": [
                        "man_tipping_hand_tone4",
                        "man_tipping_hand_medium_dark_skin_tone"
                    ],
                    "surrogates": "💁🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_tipping_hand_tone5",
                    "names": [
                        "man_tipping_hand_tone5",
                        "man_tipping_hand_dark_skin_tone"
                    ],
                    "surrogates": "💁🏿‍♂️"
                }
            }
        },
        "person_gesturing_no": {
            "name": "person_gesturing_no",
            "names": [
                "person_gesturing_no",
                "no_good"
            ],
            "surrogates": "🙅",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_gesturing_no_tone1",
                    "names": [
                        "person_gesturing_no_tone1",
                        "no_good_tone1"
                    ],
                    "surrogates": "🙅🏻"
                },
                "1f3fc": {
                    "name": "person_gesturing_no_tone2",
                    "names": [
                        "person_gesturing_no_tone2",
                        "no_good_tone2"
                    ],
                    "surrogates": "🙅🏼"
                },
                "1f3fd": {
                    "name": "person_gesturing_no_tone3",
                    "names": [
                        "person_gesturing_no_tone3",
                        "no_good_tone3"
                    ],
                    "surrogates": "🙅🏽"
                },
                "1f3fe": {
                    "name": "person_gesturing_no_tone4",
                    "names": [
                        "person_gesturing_no_tone4",
                        "no_good_tone4"
                    ],
                    "surrogates": "🙅🏾"
                },
                "1f3ff": {
                    "name": "person_gesturing_no_tone5",
                    "names": [
                        "person_gesturing_no_tone5",
                        "no_good_tone5"
                    ],
                    "surrogates": "🙅🏿"
                }
            }
        },
        "woman_gesturing_no": {
            "name": "woman_gesturing_no",
            "names": [
                "woman_gesturing_no"
            ],
            "surrogates": "🙅‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_gesturing_no_tone1",
                    "names": [
                        "woman_gesturing_no_tone1",
                        "woman_gesturing_no_light_skin_tone"
                    ],
                    "surrogates": "🙅🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_gesturing_no_tone2",
                    "names": [
                        "woman_gesturing_no_tone2",
                        "woman_gesturing_no_medium_light_skin_tone"
                    ],
                    "surrogates": "🙅🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_gesturing_no_tone3",
                    "names": [
                        "woman_gesturing_no_tone3",
                        "woman_gesturing_no_medium_skin_tone"
                    ],
                    "surrogates": "🙅🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_gesturing_no_tone4",
                    "names": [
                        "woman_gesturing_no_tone4",
                        "woman_gesturing_no_medium_dark_skin_tone"
                    ],
                    "surrogates": "🙅🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_gesturing_no_tone5",
                    "names": [
                        "woman_gesturing_no_tone5",
                        "woman_gesturing_no_dark_skin_tone"
                    ],
                    "surrogates": "🙅🏿‍♀️"
                }
            }
        },
        "man_gesturing_no": {
            "name": "man_gesturing_no",
            "names": [
                "man_gesturing_no"
            ],
            "surrogates": "🙅‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_gesturing_no_tone1",
                    "names": [
                        "man_gesturing_no_tone1",
                        "man_gesturing_no_light_skin_tone"
                    ],
                    "surrogates": "🙅🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_gesturing_no_tone2",
                    "names": [
                        "man_gesturing_no_tone2",
                        "man_gesturing_no_medium_light_skin_tone"
                    ],
                    "surrogates": "🙅🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_gesturing_no_tone3",
                    "names": [
                        "man_gesturing_no_tone3",
                        "man_gesturing_no_medium_skin_tone"
                    ],
                    "surrogates": "🙅🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_gesturing_no_tone4",
                    "names": [
                        "man_gesturing_no_tone4",
                        "man_gesturing_no_medium_dark_skin_tone"
                    ],
                    "surrogates": "🙅🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_gesturing_no_tone5",
                    "names": [
                        "man_gesturing_no_tone5",
                        "man_gesturing_no_dark_skin_tone"
                    ],
                    "surrogates": "🙅🏿‍♂️"
                }
            }
        },
        "person_gesturing_ok": {
            "name": "person_gesturing_ok",
            "names": [
                "person_gesturing_ok"
            ],
            "surrogates": "🙆",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_gesturing_ok_tone1",
                    "names": [
                        "person_gesturing_ok_tone1"
                    ],
                    "surrogates": "🙆🏻"
                },
                "1f3fc": {
                    "name": "person_gesturing_ok_tone2",
                    "names": [
                        "person_gesturing_ok_tone2"
                    ],
                    "surrogates": "🙆🏼"
                },
                "1f3fd": {
                    "name": "person_gesturing_ok_tone3",
                    "names": [
                        "person_gesturing_ok_tone3"
                    ],
                    "surrogates": "🙆🏽"
                },
                "1f3fe": {
                    "name": "person_gesturing_ok_tone4",
                    "names": [
                        "person_gesturing_ok_tone4"
                    ],
                    "surrogates": "🙆🏾"
                },
                "1f3ff": {
                    "name": "person_gesturing_ok_tone5",
                    "names": [
                        "person_gesturing_ok_tone5"
                    ],
                    "surrogates": "🙆🏿"
                }
            }
        },
        "woman_gesturing_ok": {
            "name": "woman_gesturing_ok",
            "names": [
                "woman_gesturing_ok"
            ],
            "surrogates": "🙆‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_gesturing_ok_tone1",
                    "names": [
                        "woman_gesturing_ok_tone1",
                        "woman_gesturing_ok_light_skin_tone"
                    ],
                    "surrogates": "🙆🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_gesturing_ok_tone2",
                    "names": [
                        "woman_gesturing_ok_tone2",
                        "woman_gesturing_ok_medium_light_skin_tone"
                    ],
                    "surrogates": "🙆🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_gesturing_ok_tone3",
                    "names": [
                        "woman_gesturing_ok_tone3",
                        "woman_gesturing_ok_medium_skin_tone"
                    ],
                    "surrogates": "🙆🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_gesturing_ok_tone4",
                    "names": [
                        "woman_gesturing_ok_tone4",
                        "woman_gesturing_ok_medium_dark_skin_tone"
                    ],
                    "surrogates": "🙆🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_gesturing_ok_tone5",
                    "names": [
                        "woman_gesturing_ok_tone5",
                        "woman_gesturing_ok_dark_skin_tone"
                    ],
                    "surrogates": "🙆🏿‍♀️"
                }
            }
        },
        "man_gesturing_ok": {
            "name": "man_gesturing_ok",
            "names": [
                "man_gesturing_ok"
            ],
            "surrogates": "🙆‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_gesturing_ok_tone1",
                    "names": [
                        "man_gesturing_ok_tone1",
                        "man_gesturing_ok_light_skin_tone"
                    ],
                    "surrogates": "🙆🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_gesturing_ok_tone2",
                    "names": [
                        "man_gesturing_ok_tone2",
                        "man_gesturing_ok_medium_light_skin_tone"
                    ],
                    "surrogates": "🙆🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_gesturing_ok_tone3",
                    "names": [
                        "man_gesturing_ok_tone3",
                        "man_gesturing_ok_medium_skin_tone"
                    ],
                    "surrogates": "🙆🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_gesturing_ok_tone4",
                    "names": [
                        "man_gesturing_ok_tone4",
                        "man_gesturing_ok_medium_dark_skin_tone"
                    ],
                    "surrogates": "🙆🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_gesturing_ok_tone5",
                    "names": [
                        "man_gesturing_ok_tone5",
                        "man_gesturing_ok_dark_skin_tone"
                    ],
                    "surrogates": "🙆🏿‍♂️"
                }
            }
        },
        "person_raising_hand": {
            "name": "person_raising_hand",
            "names": [
                "person_raising_hand",
                "raising_hand"
            ],
            "surrogates": "🙋",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_raising_hand_tone1",
                    "names": [
                        "person_raising_hand_tone1",
                        "raising_hand_tone1"
                    ],
                    "surrogates": "🙋🏻"
                },
                "1f3fc": {
                    "name": "person_raising_hand_tone2",
                    "names": [
                        "person_raising_hand_tone2",
                        "raising_hand_tone2"
                    ],
                    "surrogates": "🙋🏼"
                },
                "1f3fd": {
                    "name": "person_raising_hand_tone3",
                    "names": [
                        "person_raising_hand_tone3",
                        "raising_hand_tone3"
                    ],
                    "surrogates": "🙋🏽"
                },
                "1f3fe": {
                    "name": "person_raising_hand_tone4",
                    "names": [
                        "person_raising_hand_tone4",
                        "raising_hand_tone4"
                    ],
                    "surrogates": "🙋🏾"
                },
                "1f3ff": {
                    "name": "person_raising_hand_tone5",
                    "names": [
                        "person_raising_hand_tone5",
                        "raising_hand_tone5"
                    ],
                    "surrogates": "🙋🏿"
                }
            }
        },
        "woman_raising_hand": {
            "name": "woman_raising_hand",
            "names": [
                "woman_raising_hand"
            ],
            "surrogates": "🙋‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_raising_hand_tone1",
                    "names": [
                        "woman_raising_hand_tone1",
                        "woman_raising_hand_light_skin_tone"
                    ],
                    "surrogates": "🙋🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_raising_hand_tone2",
                    "names": [
                        "woman_raising_hand_tone2",
                        "woman_raising_hand_medium_light_skin_tone"
                    ],
                    "surrogates": "🙋🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_raising_hand_tone3",
                    "names": [
                        "woman_raising_hand_tone3",
                        "woman_raising_hand_medium_skin_tone"
                    ],
                    "surrogates": "🙋🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_raising_hand_tone4",
                    "names": [
                        "woman_raising_hand_tone4",
                        "woman_raising_hand_medium_dark_skin_tone"
                    ],
                    "surrogates": "🙋🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_raising_hand_tone5",
                    "names": [
                        "woman_raising_hand_tone5",
                        "woman_raising_hand_dark_skin_tone"
                    ],
                    "surrogates": "🙋🏿‍♀️"
                }
            }
        },
        "man_raising_hand": {
            "name": "man_raising_hand",
            "names": [
                "man_raising_hand"
            ],
            "surrogates": "🙋‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_raising_hand_tone1",
                    "names": [
                        "man_raising_hand_tone1",
                        "man_raising_hand_light_skin_tone"
                    ],
                    "surrogates": "🙋🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_raising_hand_tone2",
                    "names": [
                        "man_raising_hand_tone2",
                        "man_raising_hand_medium_light_skin_tone"
                    ],
                    "surrogates": "🙋🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_raising_hand_tone3",
                    "names": [
                        "man_raising_hand_tone3",
                        "man_raising_hand_medium_skin_tone"
                    ],
                    "surrogates": "🙋🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_raising_hand_tone4",
                    "names": [
                        "man_raising_hand_tone4",
                        "man_raising_hand_medium_dark_skin_tone"
                    ],
                    "surrogates": "🙋🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_raising_hand_tone5",
                    "names": [
                        "man_raising_hand_tone5",
                        "man_raising_hand_dark_skin_tone"
                    ],
                    "surrogates": "🙋🏿‍♂️"
                }
            }
        },
        "deaf_person": {
            "name": "deaf_person",
            "names": [
                "deaf_person"
            ],
            "surrogates": "🧏",
            "diversityChildren": {
                "1f3fb": {
                    "name": "deaf_person_tone1",
                    "names": [
                        "deaf_person_tone1",
                        "deaf_person_light_skin_tone"
                    ],
                    "surrogates": "🧏🏻"
                },
                "1f3fc": {
                    "name": "deaf_person_tone2",
                    "names": [
                        "deaf_person_tone2",
                        "deaf_person_medium_light_skin_tone"
                    ],
                    "surrogates": "🧏🏼"
                },
                "1f3fd": {
                    "name": "deaf_person_tone3",
                    "names": [
                        "deaf_person_tone3",
                        "deaf_person_medium_skin_tone"
                    ],
                    "surrogates": "🧏🏽"
                },
                "1f3fe": {
                    "name": "deaf_person_tone4",
                    "names": [
                        "deaf_person_tone4",
                        "deaf_person_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧏🏾"
                },
                "1f3ff": {
                    "name": "deaf_person_tone5",
                    "names": [
                        "deaf_person_tone5",
                        "deaf_person_dark_skin_tone"
                    ],
                    "surrogates": "🧏🏿"
                }
            }
        },
        "deaf_woman": {
            "name": "deaf_woman",
            "names": [
                "deaf_woman"
            ],
            "surrogates": "🧏‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "deaf_woman_tone1",
                    "names": [
                        "deaf_woman_tone1",
                        "deaf_woman_light_skin_tone"
                    ],
                    "surrogates": "🧏🏻‍♀️"
                },
                "1f3fc": {
                    "name": "deaf_woman_tone2",
                    "names": [
                        "deaf_woman_tone2",
                        "deaf_woman_medium_light_skin_tone"
                    ],
                    "surrogates": "🧏🏼‍♀️"
                },
                "1f3fd": {
                    "name": "deaf_woman_tone3",
                    "names": [
                        "deaf_woman_tone3",
                        "deaf_woman_medium_skin_tone"
                    ],
                    "surrogates": "🧏🏽‍♀️"
                },
                "1f3fe": {
                    "name": "deaf_woman_tone4",
                    "names": [
                        "deaf_woman_tone4",
                        "deaf_woman_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧏🏾‍♀️"
                },
                "1f3ff": {
                    "name": "deaf_woman_tone5",
                    "names": [
                        "deaf_woman_tone5",
                        "deaf_woman_dark_skin_tone"
                    ],
                    "surrogates": "🧏🏿‍♀️"
                }
            }
        },
        "deaf_man": {
            "name": "deaf_man",
            "names": [
                "deaf_man"
            ],
            "surrogates": "🧏‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "deaf_man_tone1",
                    "names": [
                        "deaf_man_tone1",
                        "deaf_man_light_skin_tone"
                    ],
                    "surrogates": "🧏🏻‍♂️"
                },
                "1f3fc": {
                    "name": "deaf_man_tone2",
                    "names": [
                        "deaf_man_tone2",
                        "deaf_man_medium_light_skin_tone"
                    ],
                    "surrogates": "🧏🏼‍♂️"
                },
                "1f3fd": {
                    "name": "deaf_man_tone3",
                    "names": [
                        "deaf_man_tone3",
                        "deaf_man_medium_skin_tone"
                    ],
                    "surrogates": "🧏🏽‍♂️"
                },
                "1f3fe": {
                    "name": "deaf_man_tone4",
                    "names": [
                        "deaf_man_tone4",
                        "deaf_man_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧏🏾‍♂️"
                },
                "1f3ff": {
                    "name": "deaf_man_tone5",
                    "names": [
                        "deaf_man_tone5",
                        "deaf_man_dark_skin_tone"
                    ],
                    "surrogates": "🧏🏿‍♂️"
                }
            }
        },
        "person_facepalming": {
            "name": "person_facepalming",
            "names": [
                "person_facepalming",
                "face_palm",
                "facepalm"
            ],
            "surrogates": "🤦",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_facepalming_tone1",
                    "names": [
                        "person_facepalming_tone1",
                        "face_palm_tone1",
                        "facepalm_tone1"
                    ],
                    "surrogates": "🤦🏻"
                },
                "1f3fc": {
                    "name": "person_facepalming_tone2",
                    "names": [
                        "person_facepalming_tone2",
                        "face_palm_tone2",
                        "facepalm_tone2"
                    ],
                    "surrogates": "🤦🏼"
                },
                "1f3fd": {
                    "name": "person_facepalming_tone3",
                    "names": [
                        "person_facepalming_tone3",
                        "face_palm_tone3",
                        "facepalm_tone3"
                    ],
                    "surrogates": "🤦🏽"
                },
                "1f3fe": {
                    "name": "person_facepalming_tone4",
                    "names": [
                        "person_facepalming_tone4",
                        "face_palm_tone4",
                        "facepalm_tone4"
                    ],
                    "surrogates": "🤦🏾"
                },
                "1f3ff": {
                    "name": "person_facepalming_tone5",
                    "names": [
                        "person_facepalming_tone5",
                        "face_palm_tone5",
                        "facepalm_tone5"
                    ],
                    "surrogates": "🤦🏿"
                }
            }
        },
        "woman_facepalming": {
            "name": "woman_facepalming",
            "names": [
                "woman_facepalming"
            ],
            "surrogates": "🤦‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_facepalming_tone1",
                    "names": [
                        "woman_facepalming_tone1",
                        "woman_facepalming_light_skin_tone"
                    ],
                    "surrogates": "🤦🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_facepalming_tone2",
                    "names": [
                        "woman_facepalming_tone2",
                        "woman_facepalming_medium_light_skin_tone"
                    ],
                    "surrogates": "🤦🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_facepalming_tone3",
                    "names": [
                        "woman_facepalming_tone3",
                        "woman_facepalming_medium_skin_tone"
                    ],
                    "surrogates": "🤦🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_facepalming_tone4",
                    "names": [
                        "woman_facepalming_tone4",
                        "woman_facepalming_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤦🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_facepalming_tone5",
                    "names": [
                        "woman_facepalming_tone5",
                        "woman_facepalming_dark_skin_tone"
                    ],
                    "surrogates": "🤦🏿‍♀️"
                }
            }
        },
        "man_facepalming": {
            "name": "man_facepalming",
            "names": [
                "man_facepalming"
            ],
            "surrogates": "🤦‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_facepalming_tone1",
                    "names": [
                        "man_facepalming_tone1",
                        "man_facepalming_light_skin_tone"
                    ],
                    "surrogates": "🤦🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_facepalming_tone2",
                    "names": [
                        "man_facepalming_tone2",
                        "man_facepalming_medium_light_skin_tone"
                    ],
                    "surrogates": "🤦🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_facepalming_tone3",
                    "names": [
                        "man_facepalming_tone3",
                        "man_facepalming_medium_skin_tone"
                    ],
                    "surrogates": "🤦🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_facepalming_tone4",
                    "names": [
                        "man_facepalming_tone4",
                        "man_facepalming_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤦🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_facepalming_tone5",
                    "names": [
                        "man_facepalming_tone5",
                        "man_facepalming_dark_skin_tone"
                    ],
                    "surrogates": "🤦🏿‍♂️"
                }
            }
        },
        "person_shrugging": {
            "name": "person_shrugging",
            "names": [
                "person_shrugging",
                "shrug"
            ],
            "surrogates": "🤷",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_shrugging_tone1",
                    "names": [
                        "person_shrugging_tone1",
                        "shrug_tone1"
                    ],
                    "surrogates": "🤷🏻"
                },
                "1f3fc": {
                    "name": "person_shrugging_tone2",
                    "names": [
                        "person_shrugging_tone2",
                        "shrug_tone2"
                    ],
                    "surrogates": "🤷🏼"
                },
                "1f3fd": {
                    "name": "person_shrugging_tone3",
                    "names": [
                        "person_shrugging_tone3",
                        "shrug_tone3"
                    ],
                    "surrogates": "🤷🏽"
                },
                "1f3fe": {
                    "name": "person_shrugging_tone4",
                    "names": [
                        "person_shrugging_tone4",
                        "shrug_tone4"
                    ],
                    "surrogates": "🤷🏾"
                },
                "1f3ff": {
                    "name": "person_shrugging_tone5",
                    "names": [
                        "person_shrugging_tone5",
                        "shrug_tone5"
                    ],
                    "surrogates": "🤷🏿"
                }
            }
        },
        "woman_shrugging": {
            "name": "woman_shrugging",
            "names": [
                "woman_shrugging"
            ],
            "surrogates": "🤷‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_shrugging_tone1",
                    "names": [
                        "woman_shrugging_tone1",
                        "woman_shrugging_light_skin_tone"
                    ],
                    "surrogates": "🤷🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_shrugging_tone2",
                    "names": [
                        "woman_shrugging_tone2",
                        "woman_shrugging_medium_light_skin_tone"
                    ],
                    "surrogates": "🤷🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_shrugging_tone3",
                    "names": [
                        "woman_shrugging_tone3",
                        "woman_shrugging_medium_skin_tone"
                    ],
                    "surrogates": "🤷🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_shrugging_tone4",
                    "names": [
                        "woman_shrugging_tone4",
                        "woman_shrugging_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤷🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_shrugging_tone5",
                    "names": [
                        "woman_shrugging_tone5",
                        "woman_shrugging_dark_skin_tone"
                    ],
                    "surrogates": "🤷🏿‍♀️"
                }
            }
        },
        "man_shrugging": {
            "name": "man_shrugging",
            "names": [
                "man_shrugging"
            ],
            "surrogates": "🤷‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_shrugging_tone1",
                    "names": [
                        "man_shrugging_tone1",
                        "man_shrugging_light_skin_tone"
                    ],
                    "surrogates": "🤷🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_shrugging_tone2",
                    "names": [
                        "man_shrugging_tone2",
                        "man_shrugging_medium_light_skin_tone"
                    ],
                    "surrogates": "🤷🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_shrugging_tone3",
                    "names": [
                        "man_shrugging_tone3",
                        "man_shrugging_medium_skin_tone"
                    ],
                    "surrogates": "🤷🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_shrugging_tone4",
                    "names": [
                        "man_shrugging_tone4",
                        "man_shrugging_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤷🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_shrugging_tone5",
                    "names": [
                        "man_shrugging_tone5",
                        "man_shrugging_dark_skin_tone"
                    ],
                    "surrogates": "🤷🏿‍♂️"
                }
            }
        },
        "person_pouting": {
            "name": "person_pouting",
            "names": [
                "person_pouting",
                "person_with_pouting_face"
            ],
            "surrogates": "🙎",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_pouting_tone1",
                    "names": [
                        "person_pouting_tone1",
                        "person_with_pouting_face_tone1"
                    ],
                    "surrogates": "🙎🏻"
                },
                "1f3fc": {
                    "name": "person_pouting_tone2",
                    "names": [
                        "person_pouting_tone2",
                        "person_with_pouting_face_tone2"
                    ],
                    "surrogates": "🙎🏼"
                },
                "1f3fd": {
                    "name": "person_pouting_tone3",
                    "names": [
                        "person_pouting_tone3",
                        "person_with_pouting_face_tone3"
                    ],
                    "surrogates": "🙎🏽"
                },
                "1f3fe": {
                    "name": "person_pouting_tone4",
                    "names": [
                        "person_pouting_tone4",
                        "person_with_pouting_face_tone4"
                    ],
                    "surrogates": "🙎🏾"
                },
                "1f3ff": {
                    "name": "person_pouting_tone5",
                    "names": [
                        "person_pouting_tone5",
                        "person_with_pouting_face_tone5"
                    ],
                    "surrogates": "🙎🏿"
                }
            }
        },
        "woman_pouting": {
            "name": "woman_pouting",
            "names": [
                "woman_pouting"
            ],
            "surrogates": "🙎‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_pouting_tone1",
                    "names": [
                        "woman_pouting_tone1",
                        "woman_pouting_light_skin_tone"
                    ],
                    "surrogates": "🙎🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_pouting_tone2",
                    "names": [
                        "woman_pouting_tone2",
                        "woman_pouting_medium_light_skin_tone"
                    ],
                    "surrogates": "🙎🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_pouting_tone3",
                    "names": [
                        "woman_pouting_tone3",
                        "woman_pouting_medium_skin_tone"
                    ],
                    "surrogates": "🙎🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_pouting_tone4",
                    "names": [
                        "woman_pouting_tone4",
                        "woman_pouting_medium_dark_skin_tone"
                    ],
                    "surrogates": "🙎🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_pouting_tone5",
                    "names": [
                        "woman_pouting_tone5",
                        "woman_pouting_dark_skin_tone"
                    ],
                    "surrogates": "🙎🏿‍♀️"
                }
            }
        },
        "man_pouting": {
            "name": "man_pouting",
            "names": [
                "man_pouting"
            ],
            "surrogates": "🙎‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_pouting_tone1",
                    "names": [
                        "man_pouting_tone1",
                        "man_pouting_light_skin_tone"
                    ],
                    "surrogates": "🙎🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_pouting_tone2",
                    "names": [
                        "man_pouting_tone2",
                        "man_pouting_medium_light_skin_tone"
                    ],
                    "surrogates": "🙎🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_pouting_tone3",
                    "names": [
                        "man_pouting_tone3",
                        "man_pouting_medium_skin_tone"
                    ],
                    "surrogates": "🙎🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_pouting_tone4",
                    "names": [
                        "man_pouting_tone4",
                        "man_pouting_medium_dark_skin_tone"
                    ],
                    "surrogates": "🙎🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_pouting_tone5",
                    "names": [
                        "man_pouting_tone5",
                        "man_pouting_dark_skin_tone"
                    ],
                    "surrogates": "🙎🏿‍♂️"
                }
            }
        },
        "person_frowning": {
            "name": "person_frowning",
            "names": [
                "person_frowning"
            ],
            "surrogates": "🙍",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_frowning_tone1",
                    "names": [
                        "person_frowning_tone1"
                    ],
                    "surrogates": "🙍🏻"
                },
                "1f3fc": {
                    "name": "person_frowning_tone2",
                    "names": [
                        "person_frowning_tone2"
                    ],
                    "surrogates": "🙍🏼"
                },
                "1f3fd": {
                    "name": "person_frowning_tone3",
                    "names": [
                        "person_frowning_tone3"
                    ],
                    "surrogates": "🙍🏽"
                },
                "1f3fe": {
                    "name": "person_frowning_tone4",
                    "names": [
                        "person_frowning_tone4"
                    ],
                    "surrogates": "🙍🏾"
                },
                "1f3ff": {
                    "name": "person_frowning_tone5",
                    "names": [
                        "person_frowning_tone5"
                    ],
                    "surrogates": "🙍🏿"
                }
            }
        },
        "woman_frowning": {
            "name": "woman_frowning",
            "names": [
                "woman_frowning"
            ],
            "surrogates": "🙍‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_frowning_tone1",
                    "names": [
                        "woman_frowning_tone1",
                        "woman_frowning_light_skin_tone"
                    ],
                    "surrogates": "🙍🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_frowning_tone2",
                    "names": [
                        "woman_frowning_tone2",
                        "woman_frowning_medium_light_skin_tone"
                    ],
                    "surrogates": "🙍🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_frowning_tone3",
                    "names": [
                        "woman_frowning_tone3",
                        "woman_frowning_medium_skin_tone"
                    ],
                    "surrogates": "🙍🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_frowning_tone4",
                    "names": [
                        "woman_frowning_tone4",
                        "woman_frowning_medium_dark_skin_tone"
                    ],
                    "surrogates": "🙍🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_frowning_tone5",
                    "names": [
                        "woman_frowning_tone5",
                        "woman_frowning_dark_skin_tone"
                    ],
                    "surrogates": "🙍🏿‍♀️"
                }
            }
        },
        "man_frowning": {
            "name": "man_frowning",
            "names": [
                "man_frowning"
            ],
            "surrogates": "🙍‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_frowning_tone1",
                    "names": [
                        "man_frowning_tone1",
                        "man_frowning_light_skin_tone"
                    ],
                    "surrogates": "🙍🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_frowning_tone2",
                    "names": [
                        "man_frowning_tone2",
                        "man_frowning_medium_light_skin_tone"
                    ],
                    "surrogates": "🙍🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_frowning_tone3",
                    "names": [
                        "man_frowning_tone3",
                        "man_frowning_medium_skin_tone"
                    ],
                    "surrogates": "🙍🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_frowning_tone4",
                    "names": [
                        "man_frowning_tone4",
                        "man_frowning_medium_dark_skin_tone"
                    ],
                    "surrogates": "🙍🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_frowning_tone5",
                    "names": [
                        "man_frowning_tone5",
                        "man_frowning_dark_skin_tone"
                    ],
                    "surrogates": "🙍🏿‍♂️"
                }
            }
        },
        "person_getting_haircut": {
            "name": "person_getting_haircut",
            "names": [
                "person_getting_haircut",
                "haircut"
            ],
            "surrogates": "💇",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_getting_haircut_tone1",
                    "names": [
                        "person_getting_haircut_tone1",
                        "haircut_tone1"
                    ],
                    "surrogates": "💇🏻"
                },
                "1f3fc": {
                    "name": "person_getting_haircut_tone2",
                    "names": [
                        "person_getting_haircut_tone2",
                        "haircut_tone2"
                    ],
                    "surrogates": "💇🏼"
                },
                "1f3fd": {
                    "name": "person_getting_haircut_tone3",
                    "names": [
                        "person_getting_haircut_tone3",
                        "haircut_tone3"
                    ],
                    "surrogates": "💇🏽"
                },
                "1f3fe": {
                    "name": "person_getting_haircut_tone4",
                    "names": [
                        "person_getting_haircut_tone4",
                        "haircut_tone4"
                    ],
                    "surrogates": "💇🏾"
                },
                "1f3ff": {
                    "name": "person_getting_haircut_tone5",
                    "names": [
                        "person_getting_haircut_tone5",
                        "haircut_tone5"
                    ],
                    "surrogates": "💇🏿"
                }
            }
        },
        "woman_getting_haircut": {
            "name": "woman_getting_haircut",
            "names": [
                "woman_getting_haircut"
            ],
            "surrogates": "💇‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_getting_haircut_tone1",
                    "names": [
                        "woman_getting_haircut_tone1",
                        "woman_getting_haircut_light_skin_tone"
                    ],
                    "surrogates": "💇🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_getting_haircut_tone2",
                    "names": [
                        "woman_getting_haircut_tone2",
                        "woman_getting_haircut_medium_light_skin_tone"
                    ],
                    "surrogates": "💇🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_getting_haircut_tone3",
                    "names": [
                        "woman_getting_haircut_tone3",
                        "woman_getting_haircut_medium_skin_tone"
                    ],
                    "surrogates": "💇🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_getting_haircut_tone4",
                    "names": [
                        "woman_getting_haircut_tone4",
                        "woman_getting_haircut_medium_dark_skin_tone"
                    ],
                    "surrogates": "💇🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_getting_haircut_tone5",
                    "names": [
                        "woman_getting_haircut_tone5",
                        "woman_getting_haircut_dark_skin_tone"
                    ],
                    "surrogates": "💇🏿‍♀️"
                }
            }
        },
        "man_getting_haircut": {
            "name": "man_getting_haircut",
            "names": [
                "man_getting_haircut"
            ],
            "surrogates": "💇‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_getting_haircut_tone1",
                    "names": [
                        "man_getting_haircut_tone1",
                        "man_getting_haircut_light_skin_tone"
                    ],
                    "surrogates": "💇🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_getting_haircut_tone2",
                    "names": [
                        "man_getting_haircut_tone2",
                        "man_getting_haircut_medium_light_skin_tone"
                    ],
                    "surrogates": "💇🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_getting_haircut_tone3",
                    "names": [
                        "man_getting_haircut_tone3",
                        "man_getting_haircut_medium_skin_tone"
                    ],
                    "surrogates": "💇🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_getting_haircut_tone4",
                    "names": [
                        "man_getting_haircut_tone4",
                        "man_getting_haircut_medium_dark_skin_tone"
                    ],
                    "surrogates": "💇🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_getting_haircut_tone5",
                    "names": [
                        "man_getting_haircut_tone5",
                        "man_getting_haircut_dark_skin_tone"
                    ],
                    "surrogates": "💇🏿‍♂️"
                }
            }
        },
        "person_getting_massage": {
            "name": "person_getting_massage",
            "names": [
                "person_getting_massage",
                "massage"
            ],
            "surrogates": "💆",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_getting_massage_tone1",
                    "names": [
                        "person_getting_massage_tone1",
                        "massage_tone1"
                    ],
                    "surrogates": "💆🏻"
                },
                "1f3fc": {
                    "name": "person_getting_massage_tone2",
                    "names": [
                        "person_getting_massage_tone2",
                        "massage_tone2"
                    ],
                    "surrogates": "💆🏼"
                },
                "1f3fd": {
                    "name": "person_getting_massage_tone3",
                    "names": [
                        "person_getting_massage_tone3",
                        "massage_tone3"
                    ],
                    "surrogates": "💆🏽"
                },
                "1f3fe": {
                    "name": "person_getting_massage_tone4",
                    "names": [
                        "person_getting_massage_tone4",
                        "massage_tone4"
                    ],
                    "surrogates": "💆🏾"
                },
                "1f3ff": {
                    "name": "person_getting_massage_tone5",
                    "names": [
                        "person_getting_massage_tone5",
                        "massage_tone5"
                    ],
                    "surrogates": "💆🏿"
                }
            }
        },
        "woman_getting_face_massage": {
            "name": "woman_getting_face_massage",
            "names": [
                "woman_getting_face_massage"
            ],
            "surrogates": "💆‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_getting_face_massage_tone1",
                    "names": [
                        "woman_getting_face_massage_tone1",
                        "woman_getting_face_massage_light_skin_tone"
                    ],
                    "surrogates": "💆🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_getting_face_massage_tone2",
                    "names": [
                        "woman_getting_face_massage_tone2",
                        "woman_getting_face_massage_medium_light_skin_tone"
                    ],
                    "surrogates": "💆🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_getting_face_massage_tone3",
                    "names": [
                        "woman_getting_face_massage_tone3",
                        "woman_getting_face_massage_medium_skin_tone"
                    ],
                    "surrogates": "💆🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_getting_face_massage_tone4",
                    "names": [
                        "woman_getting_face_massage_tone4",
                        "woman_getting_face_massage_medium_dark_skin_tone"
                    ],
                    "surrogates": "💆🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_getting_face_massage_tone5",
                    "names": [
                        "woman_getting_face_massage_tone5",
                        "woman_getting_face_massage_dark_skin_tone"
                    ],
                    "surrogates": "💆🏿‍♀️"
                }
            }
        },
        "man_getting_face_massage": {
            "name": "man_getting_face_massage",
            "names": [
                "man_getting_face_massage"
            ],
            "surrogates": "💆‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_getting_face_massage_tone1",
                    "names": [
                        "man_getting_face_massage_tone1",
                        "man_getting_face_massage_light_skin_tone"
                    ],
                    "surrogates": "💆🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_getting_face_massage_tone2",
                    "names": [
                        "man_getting_face_massage_tone2",
                        "man_getting_face_massage_medium_light_skin_tone"
                    ],
                    "surrogates": "💆🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_getting_face_massage_tone3",
                    "names": [
                        "man_getting_face_massage_tone3",
                        "man_getting_face_massage_medium_skin_tone"
                    ],
                    "surrogates": "💆🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_getting_face_massage_tone4",
                    "names": [
                        "man_getting_face_massage_tone4",
                        "man_getting_face_massage_medium_dark_skin_tone"
                    ],
                    "surrogates": "💆🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_getting_face_massage_tone5",
                    "names": [
                        "man_getting_face_massage_tone5",
                        "man_getting_face_massage_dark_skin_tone"
                    ],
                    "surrogates": "💆🏿‍♂️"
                }
            }
        },
        "person_in_steamy_room": {
            "name": "person_in_steamy_room",
            "names": [
                "person_in_steamy_room"
            ],
            "surrogates": "🧖",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_in_steamy_room_tone1",
                    "names": [
                        "person_in_steamy_room_tone1",
                        "person_in_steamy_room_light_skin_tone"
                    ],
                    "surrogates": "🧖🏻"
                },
                "1f3fc": {
                    "name": "person_in_steamy_room_tone2",
                    "names": [
                        "person_in_steamy_room_tone2",
                        "person_in_steamy_room_medium_light_skin_tone"
                    ],
                    "surrogates": "🧖🏼"
                },
                "1f3fd": {
                    "name": "person_in_steamy_room_tone3",
                    "names": [
                        "person_in_steamy_room_tone3",
                        "person_in_steamy_room_medium_skin_tone"
                    ],
                    "surrogates": "🧖🏽"
                },
                "1f3fe": {
                    "name": "person_in_steamy_room_tone4",
                    "names": [
                        "person_in_steamy_room_tone4",
                        "person_in_steamy_room_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧖🏾"
                },
                "1f3ff": {
                    "name": "person_in_steamy_room_tone5",
                    "names": [
                        "person_in_steamy_room_tone5",
                        "person_in_steamy_room_dark_skin_tone"
                    ],
                    "surrogates": "🧖🏿"
                }
            }
        },
        "woman_in_steamy_room": {
            "name": "woman_in_steamy_room",
            "names": [
                "woman_in_steamy_room"
            ],
            "surrogates": "🧖‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_in_steamy_room_tone1",
                    "names": [
                        "woman_in_steamy_room_tone1",
                        "woman_in_steamy_room_light_skin_tone"
                    ],
                    "surrogates": "🧖🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_in_steamy_room_tone2",
                    "names": [
                        "woman_in_steamy_room_tone2",
                        "woman_in_steamy_room_medium_light_skin_tone"
                    ],
                    "surrogates": "🧖🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_in_steamy_room_tone3",
                    "names": [
                        "woman_in_steamy_room_tone3",
                        "woman_in_steamy_room_medium_skin_tone"
                    ],
                    "surrogates": "🧖🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_in_steamy_room_tone4",
                    "names": [
                        "woman_in_steamy_room_tone4",
                        "woman_in_steamy_room_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧖🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_in_steamy_room_tone5",
                    "names": [
                        "woman_in_steamy_room_tone5",
                        "woman_in_steamy_room_dark_skin_tone"
                    ],
                    "surrogates": "🧖🏿‍♀️"
                }
            }
        },
        "man_in_steamy_room": {
            "name": "man_in_steamy_room",
            "names": [
                "man_in_steamy_room"
            ],
            "surrogates": "🧖‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_in_steamy_room_tone1",
                    "names": [
                        "man_in_steamy_room_tone1",
                        "man_in_steamy_room_light_skin_tone"
                    ],
                    "surrogates": "🧖🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_in_steamy_room_tone2",
                    "names": [
                        "man_in_steamy_room_tone2",
                        "man_in_steamy_room_medium_light_skin_tone"
                    ],
                    "surrogates": "🧖🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_in_steamy_room_tone3",
                    "names": [
                        "man_in_steamy_room_tone3",
                        "man_in_steamy_room_medium_skin_tone"
                    ],
                    "surrogates": "🧖🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_in_steamy_room_tone4",
                    "names": [
                        "man_in_steamy_room_tone4",
                        "man_in_steamy_room_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧖🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_in_steamy_room_tone5",
                    "names": [
                        "man_in_steamy_room_tone5",
                        "man_in_steamy_room_dark_skin_tone"
                    ],
                    "surrogates": "🧖🏿‍♂️"
                }
            }
        },
        "nail_care": {
            "name": "nail_care",
            "names": [
                "nail_care",
                "nail_polish"
            ],
            "surrogates": "💅",
            "diversityChildren": {
                "1f3fb": {
                    "name": "nail_care_tone1",
                    "names": [
                        "nail_care_tone1"
                    ],
                    "surrogates": "💅🏻"
                },
                "1f3fc": {
                    "name": "nail_care_tone2",
                    "names": [
                        "nail_care_tone2"
                    ],
                    "surrogates": "💅🏼"
                },
                "1f3fd": {
                    "name": "nail_care_tone3",
                    "names": [
                        "nail_care_tone3"
                    ],
                    "surrogates": "💅🏽"
                },
                "1f3fe": {
                    "name": "nail_care_tone4",
                    "names": [
                        "nail_care_tone4"
                    ],
                    "surrogates": "💅🏾"
                },
                "1f3ff": {
                    "name": "nail_care_tone5",
                    "names": [
                        "nail_care_tone5"
                    ],
                    "surrogates": "💅🏿"
                }
            }
        },
        "selfie": {
            "name": "selfie",
            "names": [
                "selfie"
            ],
            "surrogates": "🤳",
            "diversityChildren": {
                "1f3fb": {
                    "name": "selfie_tone1",
                    "names": [
                        "selfie_tone1"
                    ],
                    "surrogates": "🤳🏻"
                },
                "1f3fc": {
                    "name": "selfie_tone2",
                    "names": [
                        "selfie_tone2"
                    ],
                    "surrogates": "🤳🏼"
                },
                "1f3fd": {
                    "name": "selfie_tone3",
                    "names": [
                        "selfie_tone3"
                    ],
                    "surrogates": "🤳🏽"
                },
                "1f3fe": {
                    "name": "selfie_tone4",
                    "names": [
                        "selfie_tone4"
                    ],
                    "surrogates": "🤳🏾"
                },
                "1f3ff": {
                    "name": "selfie_tone5",
                    "names": [
                        "selfie_tone5"
                    ],
                    "surrogates": "🤳🏿"
                }
            }
        },
        "dancer": {
            "name": "dancer",
            "names": [
                "dancer",
                "woman_dancing"
            ],
            "surrogates": "💃",
            "diversityChildren": {
                "1f3fb": {
                    "name": "dancer_tone1",
                    "names": [
                        "dancer_tone1"
                    ],
                    "surrogates": "💃🏻"
                },
                "1f3fc": {
                    "name": "dancer_tone2",
                    "names": [
                        "dancer_tone2"
                    ],
                    "surrogates": "💃🏼"
                },
                "1f3fd": {
                    "name": "dancer_tone3",
                    "names": [
                        "dancer_tone3"
                    ],
                    "surrogates": "💃🏽"
                },
                "1f3fe": {
                    "name": "dancer_tone4",
                    "names": [
                        "dancer_tone4"
                    ],
                    "surrogates": "💃🏾"
                },
                "1f3ff": {
                    "name": "dancer_tone5",
                    "names": [
                        "dancer_tone5"
                    ],
                    "surrogates": "💃🏿"
                }
            }
        },
        "man_dancing": {
            "name": "man_dancing",
            "names": [
                "man_dancing",
                "male_dancer"
            ],
            "surrogates": "🕺",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_dancing_tone1",
                    "names": [
                        "man_dancing_tone1",
                        "male_dancer_tone1"
                    ],
                    "surrogates": "🕺🏻"
                },
                "1f3fc": {
                    "name": "man_dancing_tone2",
                    "names": [
                        "man_dancing_tone2",
                        "male_dancer_tone2"
                    ],
                    "surrogates": "🕺🏼"
                },
                "1f3fd": {
                    "name": "man_dancing_tone3",
                    "names": [
                        "man_dancing_tone3",
                        "male_dancer_tone3"
                    ],
                    "surrogates": "🕺🏽"
                },
                "1f3ff": {
                    "name": "man_dancing_tone5",
                    "names": [
                        "man_dancing_tone5",
                        "male_dancer_tone5"
                    ],
                    "surrogates": "🕺🏿"
                },
                "1f3fe": {
                    "name": "man_dancing_tone4",
                    "names": [
                        "man_dancing_tone4",
                        "male_dancer_tone4"
                    ],
                    "surrogates": "🕺🏾"
                }
            }
        },
        "people_with_bunny_ears_partying": {
            "name": "people_with_bunny_ears_partying",
            "names": [
                "people_with_bunny_ears_partying",
                "dancers"
            ],
            "surrogates": "👯"
        },
        "women_with_bunny_ears_partying": {
            "name": "women_with_bunny_ears_partying",
            "names": [
                "women_with_bunny_ears_partying"
            ],
            "surrogates": "👯‍♀️"
        },
        "men_with_bunny_ears_partying": {
            "name": "men_with_bunny_ears_partying",
            "names": [
                "men_with_bunny_ears_partying"
            ],
            "surrogates": "👯‍♂️"
        },
        "levitate": {
            "name": "levitate",
            "names": [
                "levitate",
                "man_in_business_suit_levitating"
            ],
            "surrogates": "🕴️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "levitate_tone1",
                    "names": [
                        "levitate_tone1",
                        "man_in_business_suit_levitating_tone1",
                        "man_in_business_suit_levitating_light_skin_tone"
                    ],
                    "surrogates": "🕴🏻"
                },
                "1f3fc": {
                    "name": "levitate_tone2",
                    "names": [
                        "levitate_tone2",
                        "man_in_business_suit_levitating_tone2",
                        "man_in_business_suit_levitating_medium_light_skin_tone"
                    ],
                    "surrogates": "🕴🏼"
                },
                "1f3fd": {
                    "name": "levitate_tone3",
                    "names": [
                        "levitate_tone3",
                        "man_in_business_suit_levitating_tone3",
                        "man_in_business_suit_levitating_medium_skin_tone"
                    ],
                    "surrogates": "🕴🏽"
                },
                "1f3fe": {
                    "name": "levitate_tone4",
                    "names": [
                        "levitate_tone4",
                        "man_in_business_suit_levitating_tone4",
                        "man_in_business_suit_levitating_medium_dark_skin_tone"
                    ],
                    "surrogates": "🕴🏾"
                },
                "1f3ff": {
                    "name": "levitate_tone5",
                    "names": [
                        "levitate_tone5",
                        "man_in_business_suit_levitating_tone5",
                        "man_in_business_suit_levitating_dark_skin_tone"
                    ],
                    "surrogates": "🕴🏿"
                }
            }
        },
        "person_in_manual_wheelchair": {
            "name": "person_in_manual_wheelchair",
            "names": [
                "person_in_manual_wheelchair"
            ],
            "surrogates": "🧑‍🦽",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_in_manual_wheelchair_tone1",
                    "names": [
                        "person_in_manual_wheelchair_tone1",
                        "person_in_manual_wheelchair_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🦽"
                },
                "1f3fc": {
                    "name": "person_in_manual_wheelchair_tone2",
                    "names": [
                        "person_in_manual_wheelchair_tone2",
                        "person_in_manual_wheelchair_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🦽"
                },
                "1f3fd": {
                    "name": "person_in_manual_wheelchair_tone3",
                    "names": [
                        "person_in_manual_wheelchair_tone3",
                        "person_in_manual_wheelchair_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🦽"
                },
                "1f3fe": {
                    "name": "person_in_manual_wheelchair_tone4",
                    "names": [
                        "person_in_manual_wheelchair_tone4",
                        "person_in_manual_wheelchair_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🦽"
                },
                "1f3ff": {
                    "name": "person_in_manual_wheelchair_tone5",
                    "names": [
                        "person_in_manual_wheelchair_tone5",
                        "person_in_manual_wheelchair_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🦽"
                }
            }
        },
        "woman_in_manual_wheelchair": {
            "name": "woman_in_manual_wheelchair",
            "names": [
                "woman_in_manual_wheelchair"
            ],
            "surrogates": "👩‍🦽",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_in_manual_wheelchair_tone1",
                    "names": [
                        "woman_in_manual_wheelchair_tone1",
                        "woman_in_manual_wheelchair_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🦽"
                },
                "1f3fc": {
                    "name": "woman_in_manual_wheelchair_tone2",
                    "names": [
                        "woman_in_manual_wheelchair_tone2",
                        "woman_in_manual_wheelchair_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🦽"
                },
                "1f3fd": {
                    "name": "woman_in_manual_wheelchair_tone3",
                    "names": [
                        "woman_in_manual_wheelchair_tone3",
                        "woman_in_manual_wheelchair_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🦽"
                },
                "1f3fe": {
                    "name": "woman_in_manual_wheelchair_tone4",
                    "names": [
                        "woman_in_manual_wheelchair_tone4",
                        "woman_in_manual_wheelchair_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🦽"
                },
                "1f3ff": {
                    "name": "woman_in_manual_wheelchair_tone5",
                    "names": [
                        "woman_in_manual_wheelchair_tone5",
                        "woman_in_manual_wheelchair_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🦽"
                }
            }
        },
        "man_in_manual_wheelchair": {
            "name": "man_in_manual_wheelchair",
            "names": [
                "man_in_manual_wheelchair"
            ],
            "surrogates": "👨‍🦽",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_in_manual_wheelchair_tone1",
                    "names": [
                        "man_in_manual_wheelchair_tone1",
                        "man_in_manual_wheelchair_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🦽"
                },
                "1f3fc": {
                    "name": "man_in_manual_wheelchair_tone2",
                    "names": [
                        "man_in_manual_wheelchair_tone2",
                        "man_in_manual_wheelchair_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🦽"
                },
                "1f3fd": {
                    "name": "man_in_manual_wheelchair_tone3",
                    "names": [
                        "man_in_manual_wheelchair_tone3",
                        "man_in_manual_wheelchair_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🦽"
                },
                "1f3fe": {
                    "name": "man_in_manual_wheelchair_tone4",
                    "names": [
                        "man_in_manual_wheelchair_tone4",
                        "man_in_manual_wheelchair_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🦽"
                },
                "1f3ff": {
                    "name": "man_in_manual_wheelchair_tone5",
                    "names": [
                        "man_in_manual_wheelchair_tone5",
                        "man_in_manual_wheelchair_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🦽"
                }
            }
        },
        "person_in_manual_wheelchair_facing_right": {
            "name": "person_in_manual_wheelchair_facing_right",
            "names": [
                "person_in_manual_wheelchair_facing_right"
            ],
            "surrogates": "🧑‍🦽‍➡️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_in_manual_wheelchair_facing_right_tone1",
                    "names": [
                        "person_in_manual_wheelchair_facing_right_tone1",
                        "person_in_manual_wheelchair_facing_right_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🦽‍➡️"
                },
                "1f3fc": {
                    "name": "person_in_manual_wheelchair_facing_right_tone2",
                    "names": [
                        "person_in_manual_wheelchair_facing_right_tone2",
                        "person_in_manual_wheelchair_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🦽‍➡️"
                },
                "1f3fd": {
                    "name": "person_in_manual_wheelchair_facing_right_tone3",
                    "names": [
                        "person_in_manual_wheelchair_facing_right_tone3",
                        "person_in_manual_wheelchair_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🦽‍➡️"
                },
                "1f3fe": {
                    "name": "person_in_manual_wheelchair_facing_right_tone4",
                    "names": [
                        "person_in_manual_wheelchair_facing_right_tone4",
                        "person_in_manual_wheelchair_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🦽‍➡️"
                },
                "1f3ff": {
                    "name": "person_in_manual_wheelchair_facing_right_tone5",
                    "names": [
                        "person_in_manual_wheelchair_facing_right_tone5",
                        "person_in_manual_wheelchair_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🦽‍➡️"
                }
            }
        },
        "man_in_manual_wheelchair_facing_right": {
            "name": "man_in_manual_wheelchair_facing_right",
            "names": [
                "man_in_manual_wheelchair_facing_right"
            ],
            "surrogates": "👨‍🦽‍➡️",
            "diversityChildren": {
                "1f3fc": {
                    "name": "man_in_manual_wheelchair_facing_right_tone2",
                    "names": [
                        "man_in_manual_wheelchair_facing_right_tone2",
                        "man_in_manual_wheelchair_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🦽‍➡️"
                },
                "1f3fb": {
                    "name": "man_in_manual_wheelchair_facing_right_tone1",
                    "names": [
                        "man_in_manual_wheelchair_facing_right_tone1",
                        "man_in_manual_wheelchair_facing_right_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🦽‍➡️"
                },
                "1f3fd": {
                    "name": "man_in_manual_wheelchair_facing_right_tone3",
                    "names": [
                        "man_in_manual_wheelchair_facing_right_tone3",
                        "man_in_manual_wheelchair_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🦽‍➡️"
                },
                "1f3fe": {
                    "name": "man_in_manual_wheelchair_facing_right_tone4",
                    "names": [
                        "man_in_manual_wheelchair_facing_right_tone4",
                        "man_in_manual_wheelchair_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🦽‍➡️"
                },
                "1f3ff": {
                    "name": "man_in_manual_wheelchair_facing_right_tone5",
                    "names": [
                        "man_in_manual_wheelchair_facing_right_tone5",
                        "man_in_manual_wheelchair_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🦽‍➡️"
                }
            }
        },
        "woman_in_manual_wheelchair_facing_right": {
            "name": "woman_in_manual_wheelchair_facing_right",
            "names": [
                "woman_in_manual_wheelchair_facing_right"
            ],
            "surrogates": "👩‍🦽‍➡️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_in_manual_wheelchair_facing_right_tone1",
                    "names": [
                        "woman_in_manual_wheelchair_facing_right_tone1",
                        "woman_in_manual_wheelchair_facing_right_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🦽‍➡️"
                },
                "1f3fc": {
                    "name": "woman_in_manual_wheelchair_facing_right_tone2",
                    "names": [
                        "woman_in_manual_wheelchair_facing_right_tone2",
                        "woman_in_manual_wheelchair_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🦽‍➡️"
                },
                "1f3fd": {
                    "name": "woman_in_manual_wheelchair_facing_right_tone3",
                    "names": [
                        "woman_in_manual_wheelchair_facing_right_tone3",
                        "woman_in_manual_wheelchair_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🦽‍➡️"
                },
                "1f3fe": {
                    "name": "woman_in_manual_wheelchair_facing_right_tone4",
                    "names": [
                        "woman_in_manual_wheelchair_facing_right_tone4",
                        "woman_in_manual_wheelchair_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🦽‍➡️"
                },
                "1f3ff": {
                    "name": "woman_in_manual_wheelchair_facing_right_tone5",
                    "names": [
                        "woman_in_manual_wheelchair_facing_right_tone5",
                        "woman_in_manual_wheelchair_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🦽‍➡️"
                }
            }
        },
        "person_in_motorized_wheelchair": {
            "name": "person_in_motorized_wheelchair",
            "names": [
                "person_in_motorized_wheelchair"
            ],
            "surrogates": "🧑‍🦼",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_in_motorized_wheelchair_tone1",
                    "names": [
                        "person_in_motorized_wheelchair_tone1",
                        "person_in_motorized_wheelchair_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🦼"
                },
                "1f3fc": {
                    "name": "person_in_motorized_wheelchair_tone2",
                    "names": [
                        "person_in_motorized_wheelchair_tone2",
                        "person_in_motorized_wheelchair_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🦼"
                },
                "1f3fd": {
                    "name": "person_in_motorized_wheelchair_tone3",
                    "names": [
                        "person_in_motorized_wheelchair_tone3",
                        "person_in_motorized_wheelchair_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🦼"
                },
                "1f3fe": {
                    "name": "person_in_motorized_wheelchair_tone4",
                    "names": [
                        "person_in_motorized_wheelchair_tone4",
                        "person_in_motorized_wheelchair_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🦼"
                },
                "1f3ff": {
                    "name": "person_in_motorized_wheelchair_tone5",
                    "names": [
                        "person_in_motorized_wheelchair_tone5",
                        "person_in_motorized_wheelchair_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🦼"
                }
            }
        },
        "woman_in_motorized_wheelchair": {
            "name": "woman_in_motorized_wheelchair",
            "names": [
                "woman_in_motorized_wheelchair"
            ],
            "surrogates": "👩‍🦼",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_in_motorized_wheelchair_tone1",
                    "names": [
                        "woman_in_motorized_wheelchair_tone1",
                        "woman_in_motorized_wheelchair_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🦼"
                },
                "1f3fc": {
                    "name": "woman_in_motorized_wheelchair_tone2",
                    "names": [
                        "woman_in_motorized_wheelchair_tone2",
                        "woman_in_motorized_wheelchair_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🦼"
                },
                "1f3fd": {
                    "name": "woman_in_motorized_wheelchair_tone3",
                    "names": [
                        "woman_in_motorized_wheelchair_tone3",
                        "woman_in_motorized_wheelchair_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🦼"
                },
                "1f3fe": {
                    "name": "woman_in_motorized_wheelchair_tone4",
                    "names": [
                        "woman_in_motorized_wheelchair_tone4",
                        "woman_in_motorized_wheelchair_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🦼"
                },
                "1f3ff": {
                    "name": "woman_in_motorized_wheelchair_tone5",
                    "names": [
                        "woman_in_motorized_wheelchair_tone5",
                        "woman_in_motorized_wheelchair_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🦼"
                }
            }
        },
        "man_in_motorized_wheelchair": {
            "name": "man_in_motorized_wheelchair",
            "names": [
                "man_in_motorized_wheelchair"
            ],
            "surrogates": "👨‍🦼",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_in_motorized_wheelchair_tone1",
                    "names": [
                        "man_in_motorized_wheelchair_tone1",
                        "man_in_motorized_wheelchair_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🦼"
                },
                "1f3fc": {
                    "name": "man_in_motorized_wheelchair_tone2",
                    "names": [
                        "man_in_motorized_wheelchair_tone2",
                        "man_in_motorized_wheelchair_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🦼"
                },
                "1f3fd": {
                    "name": "man_in_motorized_wheelchair_tone3",
                    "names": [
                        "man_in_motorized_wheelchair_tone3",
                        "man_in_motorized_wheelchair_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🦼"
                },
                "1f3fe": {
                    "name": "man_in_motorized_wheelchair_tone4",
                    "names": [
                        "man_in_motorized_wheelchair_tone4",
                        "man_in_motorized_wheelchair_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🦼"
                },
                "1f3ff": {
                    "name": "man_in_motorized_wheelchair_tone5",
                    "names": [
                        "man_in_motorized_wheelchair_tone5",
                        "man_in_motorized_wheelchair_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🦼"
                }
            }
        },
        "person_in_motorized_wheelchair_facing_right": {
            "name": "person_in_motorized_wheelchair_facing_right",
            "names": [
                "person_in_motorized_wheelchair_facing_right"
            ],
            "surrogates": "🧑‍🦼‍➡️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_in_motorized_wheelchair_facing_right_tone1",
                    "names": [
                        "person_in_motorized_wheelchair_facing_right_tone1",
                        "person_in_motorized_wheelchair_facing_right_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🦼‍➡️"
                },
                "1f3fc": {
                    "name": "person_in_motorized_wheelchair_facing_right_tone2",
                    "names": [
                        "person_in_motorized_wheelchair_facing_right_tone2",
                        "person_in_motorized_wheelchair_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🦼‍➡️"
                },
                "1f3fd": {
                    "name": "person_in_motorized_wheelchair_facing_right_tone3",
                    "names": [
                        "person_in_motorized_wheelchair_facing_right_tone3",
                        "person_in_motorized_wheelchair_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🦼‍➡️"
                },
                "1f3fe": {
                    "name": "person_in_motorized_wheelchair_facing_right_tone4",
                    "names": [
                        "person_in_motorized_wheelchair_facing_right_tone4",
                        "person_in_motorized_wheelchair_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🦼‍➡️"
                },
                "1f3ff": {
                    "name": "person_in_motorized_wheelchair_facing_right_tone5",
                    "names": [
                        "person_in_motorized_wheelchair_facing_right_tone5",
                        "person_in_motorized_wheelchair_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🦼‍➡️"
                }
            }
        },
        "man_in_motorized_wheelchair_facing_right": {
            "name": "man_in_motorized_wheelchair_facing_right",
            "names": [
                "man_in_motorized_wheelchair_facing_right"
            ],
            "surrogates": "👨‍🦼‍➡️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_in_motorized_wheelchair_facing_right_tone1",
                    "names": [
                        "man_in_motorized_wheelchair_facing_right_tone1",
                        "man_in_motorized_wheelchair_facing_right_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🦼‍➡️"
                },
                "1f3fc": {
                    "name": "man_in_motorized_wheelchair_facing_right_tone2",
                    "names": [
                        "man_in_motorized_wheelchair_facing_right_tone2",
                        "man_in_motorized_wheelchair_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🦼‍➡️"
                },
                "1f3fd": {
                    "name": "man_in_motorized_wheelchair_facing_right_tone3",
                    "names": [
                        "man_in_motorized_wheelchair_facing_right_tone3",
                        "man_in_motorized_wheelchair_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🦼‍➡️"
                },
                "1f3fe": {
                    "name": "man_in_motorized_wheelchair_facing_right_tone4",
                    "names": [
                        "man_in_motorized_wheelchair_facing_right_tone4",
                        "man_in_motorized_wheelchair_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🦼‍➡️"
                },
                "1f3ff": {
                    "name": "man_in_motorized_wheelchair_facing_right_tone5",
                    "names": [
                        "man_in_motorized_wheelchair_facing_right_tone5",
                        "man_in_motorized_wheelchair_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🦼‍➡️"
                }
            }
        },
        "woman_in_motorized_wheelchair_facing_right": {
            "name": "woman_in_motorized_wheelchair_facing_right",
            "names": [
                "woman_in_motorized_wheelchair_facing_right"
            ],
            "surrogates": "👩‍🦼‍➡️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_in_motorized_wheelchair_facing_right_tone1",
                    "names": [
                        "woman_in_motorized_wheelchair_facing_right_tone1",
                        "woman_in_motorized_wheelchair_facing_right_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🦼‍➡️"
                },
                "1f3fc": {
                    "name": "woman_in_motorized_wheelchair_facing_right_tone2",
                    "names": [
                        "woman_in_motorized_wheelchair_facing_right_tone2",
                        "woman_in_motorized_wheelchair_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🦼‍➡️"
                },
                "1f3fd": {
                    "name": "woman_in_motorized_wheelchair_facing_right_tone3",
                    "names": [
                        "woman_in_motorized_wheelchair_facing_right_tone3",
                        "woman_in_motorized_wheelchair_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🦼‍➡️"
                },
                "1f3fe": {
                    "name": "woman_in_motorized_wheelchair_facing_right_tone4",
                    "names": [
                        "woman_in_motorized_wheelchair_facing_right_tone4",
                        "woman_in_motorized_wheelchair_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🦼‍➡️"
                },
                "1f3ff": {
                    "name": "woman_in_motorized_wheelchair_facing_right_tone5",
                    "names": [
                        "woman_in_motorized_wheelchair_facing_right_tone5",
                        "woman_in_motorized_wheelchair_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🦼‍➡️"
                }
            }
        },
        "person_walking": {
            "name": "person_walking",
            "names": [
                "person_walking",
                "walking"
            ],
            "surrogates": "🚶",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_walking_tone1",
                    "names": [
                        "person_walking_tone1",
                        "walking_tone1"
                    ],
                    "surrogates": "🚶🏻"
                },
                "1f3fc": {
                    "name": "person_walking_tone2",
                    "names": [
                        "person_walking_tone2",
                        "walking_tone2"
                    ],
                    "surrogates": "🚶🏼"
                },
                "1f3fd": {
                    "name": "person_walking_tone3",
                    "names": [
                        "person_walking_tone3",
                        "walking_tone3"
                    ],
                    "surrogates": "🚶🏽"
                },
                "1f3fe": {
                    "name": "person_walking_tone4",
                    "names": [
                        "person_walking_tone4",
                        "walking_tone4"
                    ],
                    "surrogates": "🚶🏾"
                },
                "1f3ff": {
                    "name": "person_walking_tone5",
                    "names": [
                        "person_walking_tone5",
                        "walking_tone5"
                    ],
                    "surrogates": "🚶🏿"
                }
            }
        },
        "woman_walking": {
            "name": "woman_walking",
            "names": [
                "woman_walking"
            ],
            "surrogates": "🚶‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_walking_tone1",
                    "names": [
                        "woman_walking_tone1",
                        "woman_walking_light_skin_tone"
                    ],
                    "surrogates": "🚶🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_walking_tone2",
                    "names": [
                        "woman_walking_tone2",
                        "woman_walking_medium_light_skin_tone"
                    ],
                    "surrogates": "🚶🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_walking_tone3",
                    "names": [
                        "woman_walking_tone3",
                        "woman_walking_medium_skin_tone"
                    ],
                    "surrogates": "🚶🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_walking_tone4",
                    "names": [
                        "woman_walking_tone4",
                        "woman_walking_medium_dark_skin_tone"
                    ],
                    "surrogates": "🚶🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_walking_tone5",
                    "names": [
                        "woman_walking_tone5",
                        "woman_walking_dark_skin_tone"
                    ],
                    "surrogates": "🚶🏿‍♀️"
                }
            }
        },
        "man_walking": {
            "name": "man_walking",
            "names": [
                "man_walking"
            ],
            "surrogates": "🚶‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_walking_tone1",
                    "names": [
                        "man_walking_tone1",
                        "man_walking_light_skin_tone"
                    ],
                    "surrogates": "🚶🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_walking_tone2",
                    "names": [
                        "man_walking_tone2",
                        "man_walking_medium_light_skin_tone"
                    ],
                    "surrogates": "🚶🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_walking_tone3",
                    "names": [
                        "man_walking_tone3",
                        "man_walking_medium_skin_tone"
                    ],
                    "surrogates": "🚶🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_walking_tone4",
                    "names": [
                        "man_walking_tone4",
                        "man_walking_medium_dark_skin_tone"
                    ],
                    "surrogates": "🚶🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_walking_tone5",
                    "names": [
                        "man_walking_tone5",
                        "man_walking_dark_skin_tone"
                    ],
                    "surrogates": "🚶🏿‍♂️"
                }
            }
        },
        "person_walking_facing_right": {
            "name": "person_walking_facing_right",
            "names": [
                "person_walking_facing_right"
            ],
            "surrogates": "🚶‍➡️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_walking_facing_right_tone1",
                    "names": [
                        "person_walking_facing_right_tone1",
                        "person_walking_facing_right_light_skin_tone"
                    ],
                    "surrogates": "🚶🏻‍➡️"
                },
                "1f3fc": {
                    "name": "person_walking_facing_right_tone2",
                    "names": [
                        "person_walking_facing_right_tone2",
                        "person_walking_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "🚶🏼‍➡️"
                },
                "1f3fd": {
                    "name": "person_walking_facing_right_tone3",
                    "names": [
                        "person_walking_facing_right_tone3",
                        "person_walking_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "🚶🏽‍➡️"
                },
                "1f3fe": {
                    "name": "person_walking_facing_right_tone4",
                    "names": [
                        "person_walking_facing_right_tone4",
                        "person_walking_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "🚶🏾‍➡️"
                },
                "1f3ff": {
                    "name": "person_walking_facing_right_tone5",
                    "names": [
                        "person_walking_facing_right_tone5",
                        "person_walking_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "🚶🏿‍➡️"
                }
            }
        },
        "woman_walking_facing_right": {
            "name": "woman_walking_facing_right",
            "names": [
                "woman_walking_facing_right"
            ],
            "surrogates": "🚶‍♀️‍➡️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_walking_facing_right_tone1",
                    "names": [
                        "woman_walking_facing_right_tone1",
                        "woman_walking_facing_right_light_skin_tone"
                    ],
                    "surrogates": "🚶🏻‍♀️‍➡️"
                },
                "1f3fc": {
                    "name": "woman_walking_facing_right_tone2",
                    "names": [
                        "woman_walking_facing_right_tone2",
                        "woman_walking_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "🚶🏼‍♀️‍➡️"
                },
                "1f3fd": {
                    "name": "woman_walking_facing_right_tone3",
                    "names": [
                        "woman_walking_facing_right_tone3",
                        "woman_walking_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "🚶🏽‍♀️‍➡️"
                },
                "1f3fe": {
                    "name": "woman_walking_facing_right_tone4",
                    "names": [
                        "woman_walking_facing_right_tone4",
                        "woman_walking_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "🚶🏾‍♀️‍➡️"
                },
                "1f3ff": {
                    "name": "woman_walking_facing_right_tone5",
                    "names": [
                        "woman_walking_facing_right_tone5",
                        "woman_walking_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "🚶🏿‍♀️‍➡️"
                }
            }
        },
        "man_walking_facing_right": {
            "name": "man_walking_facing_right",
            "names": [
                "man_walking_facing_right"
            ],
            "surrogates": "🚶‍♂️‍➡️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_walking_facing_right_tone1",
                    "names": [
                        "man_walking_facing_right_tone1",
                        "man_walking_facing_right_light_skin_tone"
                    ],
                    "surrogates": "🚶🏻‍♂️‍➡️"
                },
                "1f3fc": {
                    "name": "man_walking_facing_right_tone2",
                    "names": [
                        "man_walking_facing_right_tone2",
                        "man_walking_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "🚶🏼‍♂️‍➡️"
                },
                "1f3fd": {
                    "name": "man_walking_facing_right_tone3",
                    "names": [
                        "man_walking_facing_right_tone3",
                        "man_walking_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "🚶🏽‍♂️‍➡️"
                },
                "1f3fe": {
                    "name": "man_walking_facing_right_tone4",
                    "names": [
                        "man_walking_facing_right_tone4",
                        "man_walking_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "🚶🏾‍♂️‍➡️"
                },
                "1f3ff": {
                    "name": "man_walking_facing_right_tone5",
                    "names": [
                        "man_walking_facing_right_tone5",
                        "man_walking_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "🚶🏿‍♂️‍➡️"
                }
            }
        },
        "person_with_probing_cane": {
            "name": "person_with_probing_cane",
            "names": [
                "person_with_probing_cane"
            ],
            "surrogates": "🧑‍🦯",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_with_probing_cane_tone1",
                    "names": [
                        "person_with_probing_cane_tone1",
                        "person_with_probing_cane_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🦯"
                },
                "1f3fc": {
                    "name": "person_with_probing_cane_tone2",
                    "names": [
                        "person_with_probing_cane_tone2",
                        "person_with_probing_cane_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🦯"
                },
                "1f3fd": {
                    "name": "person_with_probing_cane_tone3",
                    "names": [
                        "person_with_probing_cane_tone3",
                        "person_with_probing_cane_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🦯"
                },
                "1f3fe": {
                    "name": "person_with_probing_cane_tone4",
                    "names": [
                        "person_with_probing_cane_tone4",
                        "person_with_probing_cane_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🦯"
                },
                "1f3ff": {
                    "name": "person_with_probing_cane_tone5",
                    "names": [
                        "person_with_probing_cane_tone5",
                        "person_with_probing_cane_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🦯"
                }
            }
        },
        "woman_with_probing_cane": {
            "name": "woman_with_probing_cane",
            "names": [
                "woman_with_probing_cane"
            ],
            "surrogates": "👩‍🦯",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_with_probing_cane_tone1",
                    "names": [
                        "woman_with_probing_cane_tone1",
                        "woman_with_probing_cane_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🦯"
                },
                "1f3fc": {
                    "name": "woman_with_probing_cane_tone2",
                    "names": [
                        "woman_with_probing_cane_tone2",
                        "woman_with_probing_cane_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🦯"
                },
                "1f3fd": {
                    "name": "woman_with_probing_cane_tone3",
                    "names": [
                        "woman_with_probing_cane_tone3",
                        "woman_with_probing_cane_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🦯"
                },
                "1f3fe": {
                    "name": "woman_with_probing_cane_tone4",
                    "names": [
                        "woman_with_probing_cane_tone4",
                        "woman_with_probing_cane_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🦯"
                },
                "1f3ff": {
                    "name": "woman_with_probing_cane_tone5",
                    "names": [
                        "woman_with_probing_cane_tone5",
                        "woman_with_probing_cane_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🦯"
                }
            }
        },
        "man_with_probing_cane": {
            "name": "man_with_probing_cane",
            "names": [
                "man_with_probing_cane"
            ],
            "surrogates": "👨‍🦯",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_with_probing_cane_tone1",
                    "names": [
                        "man_with_probing_cane_tone1",
                        "man_with_probing_cane_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🦯"
                },
                "1f3fc": {
                    "name": "man_with_probing_cane_tone2",
                    "names": [
                        "man_with_probing_cane_tone2",
                        "man_with_probing_cane_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🦯"
                },
                "1f3fd": {
                    "name": "man_with_probing_cane_tone3",
                    "names": [
                        "man_with_probing_cane_tone3",
                        "man_with_probing_cane_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🦯"
                },
                "1f3fe": {
                    "name": "man_with_probing_cane_tone4",
                    "names": [
                        "man_with_probing_cane_tone4",
                        "man_with_probing_cane_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🦯"
                },
                "1f3ff": {
                    "name": "man_with_probing_cane_tone5",
                    "names": [
                        "man_with_probing_cane_tone5",
                        "man_with_probing_cane_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🦯"
                }
            }
        },
        "person_with_white_cane_facing_right": {
            "name": "person_with_white_cane_facing_right",
            "names": [
                "person_with_white_cane_facing_right"
            ],
            "surrogates": "🧑‍🦯‍➡️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_with_white_cane_facing_right_tone1",
                    "names": [
                        "person_with_white_cane_facing_right_tone1",
                        "person_with_white_cane_facing_right_light_skin_tone"
                    ],
                    "surrogates": "🧑🏻‍🦯‍➡️"
                },
                "1f3fc": {
                    "name": "person_with_white_cane_facing_right_tone2",
                    "names": [
                        "person_with_white_cane_facing_right_tone2",
                        "person_with_white_cane_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "🧑🏼‍🦯‍➡️"
                },
                "1f3fd": {
                    "name": "person_with_white_cane_facing_right_tone3",
                    "names": [
                        "person_with_white_cane_facing_right_tone3",
                        "person_with_white_cane_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "🧑🏽‍🦯‍➡️"
                },
                "1f3fe": {
                    "name": "person_with_white_cane_facing_right_tone4",
                    "names": [
                        "person_with_white_cane_facing_right_tone4",
                        "person_with_white_cane_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏾‍🦯‍➡️"
                },
                "1f3ff": {
                    "name": "person_with_white_cane_facing_right_tone5",
                    "names": [
                        "person_with_white_cane_facing_right_tone5",
                        "person_with_white_cane_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "🧑🏿‍🦯‍➡️"
                }
            }
        },
        "man_with_white_cane_facing_right": {
            "name": "man_with_white_cane_facing_right",
            "names": [
                "man_with_white_cane_facing_right"
            ],
            "surrogates": "👨‍🦯‍➡️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_with_white_cane_facing_right_tone1",
                    "names": [
                        "man_with_white_cane_facing_right_tone1",
                        "man_with_white_cane_facing_right_light_skin_tone"
                    ],
                    "surrogates": "👨🏻‍🦯‍➡️"
                },
                "1f3fc": {
                    "name": "man_with_white_cane_facing_right_tone2",
                    "names": [
                        "man_with_white_cane_facing_right_tone2",
                        "man_with_white_cane_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "👨🏼‍🦯‍➡️"
                },
                "1f3fd": {
                    "name": "man_with_white_cane_facing_right_tone3",
                    "names": [
                        "man_with_white_cane_facing_right_tone3",
                        "man_with_white_cane_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "👨🏽‍🦯‍➡️"
                },
                "1f3fe": {
                    "name": "man_with_white_cane_facing_right_tone4",
                    "names": [
                        "man_with_white_cane_facing_right_tone4",
                        "man_with_white_cane_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "👨🏾‍🦯‍➡️"
                },
                "1f3ff": {
                    "name": "man_with_white_cane_facing_right_tone5",
                    "names": [
                        "man_with_white_cane_facing_right_tone5",
                        "man_with_white_cane_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "👨🏿‍🦯‍➡️"
                }
            }
        },
        "woman_with_white_cane_facing_right": {
            "name": "woman_with_white_cane_facing_right",
            "names": [
                "woman_with_white_cane_facing_right"
            ],
            "surrogates": "👩‍🦯‍➡️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_with_white_cane_facing_right_tone1",
                    "names": [
                        "woman_with_white_cane_facing_right_tone1",
                        "woman_with_white_cane_facing_right_light_skin_tone"
                    ],
                    "surrogates": "👩🏻‍🦯‍➡️"
                },
                "1f3fc": {
                    "name": "woman_with_white_cane_facing_right_tone2",
                    "names": [
                        "woman_with_white_cane_facing_right_tone2",
                        "woman_with_white_cane_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "👩🏼‍🦯‍➡️"
                },
                "1f3fd": {
                    "name": "woman_with_white_cane_facing_right_tone3",
                    "names": [
                        "woman_with_white_cane_facing_right_tone3",
                        "woman_with_white_cane_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "👩🏽‍🦯‍➡️"
                },
                "1f3fe": {
                    "name": "woman_with_white_cane_facing_right_tone4",
                    "names": [
                        "woman_with_white_cane_facing_right_tone4",
                        "woman_with_white_cane_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "👩🏾‍🦯‍➡️"
                },
                "1f3ff": {
                    "name": "woman_with_white_cane_facing_right_tone5",
                    "names": [
                        "woman_with_white_cane_facing_right_tone5",
                        "woman_with_white_cane_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "👩🏿‍🦯‍➡️"
                }
            }
        },
        "person_kneeling": {
            "name": "person_kneeling",
            "names": [
                "person_kneeling"
            ],
            "surrogates": "🧎",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_kneeling_tone1",
                    "names": [
                        "person_kneeling_tone1",
                        "person_kneeling_light_skin_tone"
                    ],
                    "surrogates": "🧎🏻"
                },
                "1f3fc": {
                    "name": "person_kneeling_tone2",
                    "names": [
                        "person_kneeling_tone2",
                        "person_kneeling_medium_light_skin_tone"
                    ],
                    "surrogates": "🧎🏼"
                },
                "1f3fd": {
                    "name": "person_kneeling_tone3",
                    "names": [
                        "person_kneeling_tone3",
                        "person_kneeling_medium_skin_tone"
                    ],
                    "surrogates": "🧎🏽"
                },
                "1f3fe": {
                    "name": "person_kneeling_tone4",
                    "names": [
                        "person_kneeling_tone4",
                        "person_kneeling_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧎🏾"
                },
                "1f3ff": {
                    "name": "person_kneeling_tone5",
                    "names": [
                        "person_kneeling_tone5",
                        "person_kneeling_dark_skin_tone"
                    ],
                    "surrogates": "🧎🏿"
                }
            }
        },
        "woman_kneeling": {
            "name": "woman_kneeling",
            "names": [
                "woman_kneeling"
            ],
            "surrogates": "🧎‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_kneeling_tone1",
                    "names": [
                        "woman_kneeling_tone1",
                        "woman_kneeling_light_skin_tone"
                    ],
                    "surrogates": "🧎🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_kneeling_tone2",
                    "names": [
                        "woman_kneeling_tone2",
                        "woman_kneeling_medium_light_skin_tone"
                    ],
                    "surrogates": "🧎🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_kneeling_tone3",
                    "names": [
                        "woman_kneeling_tone3",
                        "woman_kneeling_medium_skin_tone"
                    ],
                    "surrogates": "🧎🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_kneeling_tone4",
                    "names": [
                        "woman_kneeling_tone4",
                        "woman_kneeling_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧎🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_kneeling_tone5",
                    "names": [
                        "woman_kneeling_tone5",
                        "woman_kneeling_dark_skin_tone"
                    ],
                    "surrogates": "🧎🏿‍♀️"
                }
            }
        },
        "man_kneeling": {
            "name": "man_kneeling",
            "names": [
                "man_kneeling"
            ],
            "surrogates": "🧎‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_kneeling_tone1",
                    "names": [
                        "man_kneeling_tone1",
                        "man_kneeling_light_skin_tone"
                    ],
                    "surrogates": "🧎🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_kneeling_tone2",
                    "names": [
                        "man_kneeling_tone2",
                        "man_kneeling_medium_light_skin_tone"
                    ],
                    "surrogates": "🧎🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_kneeling_tone3",
                    "names": [
                        "man_kneeling_tone3",
                        "man_kneeling_medium_skin_tone"
                    ],
                    "surrogates": "🧎🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_kneeling_tone4",
                    "names": [
                        "man_kneeling_tone4",
                        "man_kneeling_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧎🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_kneeling_tone5",
                    "names": [
                        "man_kneeling_tone5",
                        "man_kneeling_dark_skin_tone"
                    ],
                    "surrogates": "🧎🏿‍♂️"
                }
            }
        },
        "person_kneeling_facing_right": {
            "name": "person_kneeling_facing_right",
            "names": [
                "person_kneeling_facing_right"
            ],
            "surrogates": "🧎‍➡️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_kneeling_facing_right_tone1",
                    "names": [
                        "person_kneeling_facing_right_tone1",
                        "person_kneeling_facing_right_light_skin_tone"
                    ],
                    "surrogates": "🧎🏻‍➡️"
                },
                "1f3fc": {
                    "name": "person_kneeling_facing_right_tone2",
                    "names": [
                        "person_kneeling_facing_right_tone2",
                        "person_kneeling_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "🧎🏼‍➡️"
                },
                "1f3fd": {
                    "name": "person_kneeling_facing_right_tone3",
                    "names": [
                        "person_kneeling_facing_right_tone3",
                        "person_kneeling_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "🧎🏽‍➡️"
                },
                "1f3fe": {
                    "name": "person_kneeling_facing_right_tone4",
                    "names": [
                        "person_kneeling_facing_right_tone4",
                        "person_kneeling_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧎🏾‍➡️"
                },
                "1f3ff": {
                    "name": "person_kneeling_facing_right_tone5",
                    "names": [
                        "person_kneeling_facing_right_tone5",
                        "person_kneeling_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "🧎🏿‍➡️"
                }
            }
        },
        "woman_kneeling_facing_right": {
            "name": "woman_kneeling_facing_right",
            "names": [
                "woman_kneeling_facing_right"
            ],
            "surrogates": "🧎‍♀️‍➡️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_kneeling_facing_right_tone1",
                    "names": [
                        "woman_kneeling_facing_right_tone1",
                        "woman_kneeling_facing_right_light_skin_tone"
                    ],
                    "surrogates": "🧎🏻‍♀️‍➡️"
                },
                "1f3fc": {
                    "name": "woman_kneeling_facing_right_tone2",
                    "names": [
                        "woman_kneeling_facing_right_tone2",
                        "woman_kneeling_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "🧎🏼‍♀️‍➡️"
                },
                "1f3fd": {
                    "name": "woman_kneeling_facing_right_tone3",
                    "names": [
                        "woman_kneeling_facing_right_tone3",
                        "woman_kneeling_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "🧎🏽‍♀️‍➡️"
                },
                "1f3fe": {
                    "name": "woman_kneeling_facing_right_tone4",
                    "names": [
                        "woman_kneeling_facing_right_tone4",
                        "woman_kneeling_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧎🏾‍♀️‍➡️"
                },
                "1f3ff": {
                    "name": "woman_kneeling_facing_right_tone5",
                    "names": [
                        "woman_kneeling_facing_right_tone5",
                        "woman_kneeling_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "🧎🏿‍♀️‍➡️"
                }
            }
        },
        "man_kneeling_facing_right": {
            "name": "man_kneeling_facing_right",
            "names": [
                "man_kneeling_facing_right"
            ],
            "surrogates": "🧎‍♂️‍➡️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_kneeling_facing_right_tone1",
                    "names": [
                        "man_kneeling_facing_right_tone1",
                        "man_kneeling_facing_right_light_skin_tone"
                    ],
                    "surrogates": "🧎🏻‍♂️‍➡️"
                },
                "1f3fc": {
                    "name": "man_kneeling_facing_right_tone2",
                    "names": [
                        "man_kneeling_facing_right_tone2",
                        "man_kneeling_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "🧎🏼‍♂️‍➡️"
                },
                "1f3fd": {
                    "name": "man_kneeling_facing_right_tone3",
                    "names": [
                        "man_kneeling_facing_right_tone3",
                        "man_kneeling_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "🧎🏽‍♂️‍➡️"
                },
                "1f3fe": {
                    "name": "man_kneeling_facing_right_tone4",
                    "names": [
                        "man_kneeling_facing_right_tone4",
                        "man_kneeling_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧎🏾‍♂️‍➡️"
                },
                "1f3ff": {
                    "name": "man_kneeling_facing_right_tone5",
                    "names": [
                        "man_kneeling_facing_right_tone5",
                        "man_kneeling_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "🧎🏿‍♂️‍➡️"
                }
            }
        },
        "person_running": {
            "name": "person_running",
            "names": [
                "person_running",
                "runner"
            ],
            "surrogates": "🏃",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_running_tone1",
                    "names": [
                        "person_running_tone1",
                        "runner_tone1"
                    ],
                    "surrogates": "🏃🏻"
                },
                "1f3fc": {
                    "name": "person_running_tone2",
                    "names": [
                        "person_running_tone2",
                        "runner_tone2"
                    ],
                    "surrogates": "🏃🏼"
                },
                "1f3fd": {
                    "name": "person_running_tone3",
                    "names": [
                        "person_running_tone3",
                        "runner_tone3"
                    ],
                    "surrogates": "🏃🏽"
                },
                "1f3fe": {
                    "name": "person_running_tone4",
                    "names": [
                        "person_running_tone4",
                        "runner_tone4"
                    ],
                    "surrogates": "🏃🏾"
                },
                "1f3ff": {
                    "name": "person_running_tone5",
                    "names": [
                        "person_running_tone5",
                        "runner_tone5"
                    ],
                    "surrogates": "🏃🏿"
                }
            }
        },
        "woman_running": {
            "name": "woman_running",
            "names": [
                "woman_running"
            ],
            "surrogates": "🏃‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_running_tone1",
                    "names": [
                        "woman_running_tone1",
                        "woman_running_light_skin_tone"
                    ],
                    "surrogates": "🏃🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_running_tone2",
                    "names": [
                        "woman_running_tone2",
                        "woman_running_medium_light_skin_tone"
                    ],
                    "surrogates": "🏃🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_running_tone3",
                    "names": [
                        "woman_running_tone3",
                        "woman_running_medium_skin_tone"
                    ],
                    "surrogates": "🏃🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_running_tone4",
                    "names": [
                        "woman_running_tone4",
                        "woman_running_medium_dark_skin_tone"
                    ],
                    "surrogates": "🏃🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_running_tone5",
                    "names": [
                        "woman_running_tone5",
                        "woman_running_dark_skin_tone"
                    ],
                    "surrogates": "🏃🏿‍♀️"
                }
            }
        },
        "man_running": {
            "name": "man_running",
            "names": [
                "man_running"
            ],
            "surrogates": "🏃‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_running_tone1",
                    "names": [
                        "man_running_tone1",
                        "man_running_light_skin_tone"
                    ],
                    "surrogates": "🏃🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_running_tone2",
                    "names": [
                        "man_running_tone2",
                        "man_running_medium_light_skin_tone"
                    ],
                    "surrogates": "🏃🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_running_tone3",
                    "names": [
                        "man_running_tone3",
                        "man_running_medium_skin_tone"
                    ],
                    "surrogates": "🏃🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_running_tone4",
                    "names": [
                        "man_running_tone4",
                        "man_running_medium_dark_skin_tone"
                    ],
                    "surrogates": "🏃🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_running_tone5",
                    "names": [
                        "man_running_tone5",
                        "man_running_dark_skin_tone"
                    ],
                    "surrogates": "🏃🏿‍♂️"
                }
            }
        },
        "person_running_facing_right": {
            "name": "person_running_facing_right",
            "names": [
                "person_running_facing_right"
            ],
            "surrogates": "🏃‍➡️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_running_facing_right_tone1",
                    "names": [
                        "person_running_facing_right_tone1",
                        "person_running_facing_right_light_skin_tone"
                    ],
                    "surrogates": "🏃🏻‍➡️"
                },
                "1f3fc": {
                    "name": "person_running_facing_right_tone2",
                    "names": [
                        "person_running_facing_right_tone2",
                        "person_running_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "🏃🏼‍➡️"
                },
                "1f3fd": {
                    "name": "person_running_facing_right_tone3",
                    "names": [
                        "person_running_facing_right_tone3",
                        "person_running_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "🏃🏽‍➡️"
                },
                "1f3fe": {
                    "name": "person_running_facing_right_tone4",
                    "names": [
                        "person_running_facing_right_tone4",
                        "person_running_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "🏃🏾‍➡️"
                },
                "1f3ff": {
                    "name": "person_running_facing_right_tone5",
                    "names": [
                        "person_running_facing_right_tone5",
                        "person_running_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "🏃🏿‍➡️"
                }
            }
        },
        "woman_running_facing_right": {
            "name": "woman_running_facing_right",
            "names": [
                "woman_running_facing_right"
            ],
            "surrogates": "🏃‍♀️‍➡️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_running_facing_right_tone1",
                    "names": [
                        "woman_running_facing_right_tone1",
                        "woman_running_facing_right_light_skin_tone"
                    ],
                    "surrogates": "🏃🏻‍♀️‍➡️"
                },
                "1f3fc": {
                    "name": "woman_running_facing_right_tone2",
                    "names": [
                        "woman_running_facing_right_tone2",
                        "woman_running_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "🏃🏼‍♀️‍➡️"
                },
                "1f3fd": {
                    "name": "woman_running_facing_right_tone3",
                    "names": [
                        "woman_running_facing_right_tone3",
                        "woman_running_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "🏃🏽‍♀️‍➡️"
                },
                "1f3fe": {
                    "name": "woman_running_facing_right_tone4",
                    "names": [
                        "woman_running_facing_right_tone4",
                        "woman_running_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "🏃🏾‍♀️‍➡️"
                },
                "1f3ff": {
                    "name": "woman_running_facing_right_tone5",
                    "names": [
                        "woman_running_facing_right_tone5",
                        "woman_running_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "🏃🏿‍♀️‍➡️"
                }
            }
        },
        "man_running_facing_right": {
            "name": "man_running_facing_right",
            "names": [
                "man_running_facing_right"
            ],
            "surrogates": "🏃‍♂️‍➡️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_running_facing_right_tone1",
                    "names": [
                        "man_running_facing_right_tone1",
                        "man_running_facing_right_light_skin_tone"
                    ],
                    "surrogates": "🏃🏻‍♂️‍➡️"
                },
                "1f3fc": {
                    "name": "man_running_facing_right_tone2",
                    "names": [
                        "man_running_facing_right_tone2",
                        "man_running_facing_right_medium_light_skin_tone"
                    ],
                    "surrogates": "🏃🏼‍♂️‍➡️"
                },
                "1f3fd": {
                    "name": "man_running_facing_right_tone3",
                    "names": [
                        "man_running_facing_right_tone3",
                        "man_running_facing_right_medium_skin_tone"
                    ],
                    "surrogates": "🏃🏽‍♂️‍➡️"
                },
                "1f3fe": {
                    "name": "man_running_facing_right_tone4",
                    "names": [
                        "man_running_facing_right_tone4",
                        "man_running_facing_right_medium_dark_skin_tone"
                    ],
                    "surrogates": "🏃🏾‍♂️‍➡️"
                },
                "1f3ff": {
                    "name": "man_running_facing_right_tone5",
                    "names": [
                        "man_running_facing_right_tone5",
                        "man_running_facing_right_dark_skin_tone"
                    ],
                    "surrogates": "🏃🏿‍♂️‍➡️"
                }
            }
        },
        "person_standing": {
            "name": "person_standing",
            "names": [
                "person_standing"
            ],
            "surrogates": "🧍",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_standing_tone1",
                    "names": [
                        "person_standing_tone1",
                        "person_standing_light_skin_tone"
                    ],
                    "surrogates": "🧍🏻"
                },
                "1f3fc": {
                    "name": "person_standing_tone2",
                    "names": [
                        "person_standing_tone2",
                        "person_standing_medium_light_skin_tone"
                    ],
                    "surrogates": "🧍🏼"
                },
                "1f3fd": {
                    "name": "person_standing_tone3",
                    "names": [
                        "person_standing_tone3",
                        "person_standing_medium_skin_tone"
                    ],
                    "surrogates": "🧍🏽"
                },
                "1f3fe": {
                    "name": "person_standing_tone4",
                    "names": [
                        "person_standing_tone4",
                        "person_standing_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧍🏾"
                },
                "1f3ff": {
                    "name": "person_standing_tone5",
                    "names": [
                        "person_standing_tone5",
                        "person_standing_dark_skin_tone"
                    ],
                    "surrogates": "🧍🏿"
                }
            }
        },
        "woman_standing": {
            "name": "woman_standing",
            "names": [
                "woman_standing"
            ],
            "surrogates": "🧍‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_standing_tone1",
                    "names": [
                        "woman_standing_tone1",
                        "woman_standing_light_skin_tone"
                    ],
                    "surrogates": "🧍🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_standing_tone2",
                    "names": [
                        "woman_standing_tone2",
                        "woman_standing_medium_light_skin_tone"
                    ],
                    "surrogates": "🧍🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_standing_tone3",
                    "names": [
                        "woman_standing_tone3",
                        "woman_standing_medium_skin_tone"
                    ],
                    "surrogates": "🧍🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_standing_tone4",
                    "names": [
                        "woman_standing_tone4",
                        "woman_standing_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧍🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_standing_tone5",
                    "names": [
                        "woman_standing_tone5",
                        "woman_standing_dark_skin_tone"
                    ],
                    "surrogates": "🧍🏿‍♀️"
                }
            }
        },
        "man_standing": {
            "name": "man_standing",
            "names": [
                "man_standing"
            ],
            "surrogates": "🧍‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_standing_tone1",
                    "names": [
                        "man_standing_tone1",
                        "man_standing_light_skin_tone"
                    ],
                    "surrogates": "🧍🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_standing_tone2",
                    "names": [
                        "man_standing_tone2",
                        "man_standing_medium_light_skin_tone"
                    ],
                    "surrogates": "🧍🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_standing_tone3",
                    "names": [
                        "man_standing_tone3",
                        "man_standing_medium_skin_tone"
                    ],
                    "surrogates": "🧍🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_standing_tone4",
                    "names": [
                        "man_standing_tone4",
                        "man_standing_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧍🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_standing_tone5",
                    "names": [
                        "man_standing_tone5",
                        "man_standing_dark_skin_tone"
                    ],
                    "surrogates": "🧍🏿‍♂️"
                }
            }
        },
        "people_holding_hands": {
            "name": "people_holding_hands",
            "names": [
                "people_holding_hands"
            ],
            "surrogates": "🧑‍🤝‍🧑"
        },
        "couple": {
            "name": "couple",
            "names": [
                "couple"
            ],
            "surrogates": "👫"
        },
        "two_women_holding_hands": {
            "name": "two_women_holding_hands",
            "names": [
                "two_women_holding_hands"
            ],
            "surrogates": "👭"
        },
        "two_men_holding_hands": {
            "name": "two_men_holding_hands",
            "names": [
                "two_men_holding_hands"
            ],
            "surrogates": "👬"
        },
        "couple_with_heart": {
            "name": "couple_with_heart",
            "names": [
                "couple_with_heart"
            ],
            "surrogates": "💑"
        },
        "couple_with_heart_woman_man": {
            "name": "couple_with_heart_woman_man",
            "names": [
                "couple_with_heart_woman_man"
            ],
            "surrogates": "👩‍❤️‍👨"
        },
        "couple_ww": {
            "name": "couple_ww",
            "names": [
                "couple_ww",
                "couple_with_heart_ww"
            ],
            "surrogates": "👩‍❤️‍👩"
        },
        "couple_mm": {
            "name": "couple_mm",
            "names": [
                "couple_mm",
                "couple_with_heart_mm"
            ],
            "surrogates": "👨‍❤️‍👨"
        },
        "couplekiss": {
            "name": "couplekiss",
            "names": [
                "couplekiss"
            ],
            "surrogates": "💏"
        },
        "kiss_woman_man": {
            "name": "kiss_woman_man",
            "names": [
                "kiss_woman_man"
            ],
            "surrogates": "👩‍❤️‍💋‍👨"
        },
        "kiss_ww": {
            "name": "kiss_ww",
            "names": [
                "kiss_ww",
                "couplekiss_ww"
            ],
            "surrogates": "👩‍❤️‍💋‍👩"
        },
        "kiss_mm": {
            "name": "kiss_mm",
            "names": [
                "kiss_mm",
                "couplekiss_mm",
                "kiss_man_man"
            ],
            "surrogates": "👨‍❤️‍💋‍👨"
        },
        "family_adult_adult_child_child": {
            "name": "family_adult_adult_child_child",
            "names": [
                "family_adult_adult_child_child"
            ],
            "surrogates": "🧑‍🧑‍🧒‍🧒"
        },
        "family_adult_adult_child": {
            "name": "family_adult_adult_child",
            "names": [
                "family_adult_adult_child"
            ],
            "surrogates": "🧑‍🧑‍🧒"
        },
        "family_adult_child_child": {
            "name": "family_adult_child_child",
            "names": [
                "family_adult_child_child"
            ],
            "surrogates": "🧑‍🧒‍🧒"
        },
        "family_adult_child": {
            "name": "family_adult_child",
            "names": [
                "family_adult_child"
            ],
            "surrogates": "🧑‍🧒"
        },
        "family": {
            "name": "family",
            "names": [
                "family"
            ],
            "surrogates": "👪"
        },
        "family_man_woman_boy": {
            "name": "family_man_woman_boy",
            "names": [
                "family_man_woman_boy"
            ],
            "surrogates": "👨‍👩‍👦"
        },
        "family_mwg": {
            "name": "family_mwg",
            "names": [
                "family_mwg"
            ],
            "surrogates": "👨‍👩‍👧"
        },
        "family_mwgb": {
            "name": "family_mwgb",
            "names": [
                "family_mwgb"
            ],
            "surrogates": "👨‍👩‍👧‍👦"
        },
        "family_mwbb": {
            "name": "family_mwbb",
            "names": [
                "family_mwbb"
            ],
            "surrogates": "👨‍👩‍👦‍👦"
        },
        "family_mwgg": {
            "name": "family_mwgg",
            "names": [
                "family_mwgg"
            ],
            "surrogates": "👨‍👩‍👧‍👧"
        },
        "family_wwb": {
            "name": "family_wwb",
            "names": [
                "family_wwb"
            ],
            "surrogates": "👩‍👩‍👦"
        },
        "family_wwg": {
            "name": "family_wwg",
            "names": [
                "family_wwg"
            ],
            "surrogates": "👩‍👩‍👧"
        },
        "family_wwgb": {
            "name": "family_wwgb",
            "names": [
                "family_wwgb"
            ],
            "surrogates": "👩‍👩‍👧‍👦"
        },
        "family_wwbb": {
            "name": "family_wwbb",
            "names": [
                "family_wwbb"
            ],
            "surrogates": "👩‍👩‍👦‍👦"
        },
        "family_wwgg": {
            "name": "family_wwgg",
            "names": [
                "family_wwgg"
            ],
            "surrogates": "👩‍👩‍👧‍👧"
        },
        "family_mmb": {
            "name": "family_mmb",
            "names": [
                "family_mmb"
            ],
            "surrogates": "👨‍👨‍👦"
        },
        "family_mmg": {
            "name": "family_mmg",
            "names": [
                "family_mmg"
            ],
            "surrogates": "👨‍👨‍👧"
        },
        "family_mmgb": {
            "name": "family_mmgb",
            "names": [
                "family_mmgb"
            ],
            "surrogates": "👨‍👨‍👧‍👦"
        },
        "family_mmbb": {
            "name": "family_mmbb",
            "names": [
                "family_mmbb"
            ],
            "surrogates": "👨‍👨‍👦‍👦"
        },
        "family_mmgg": {
            "name": "family_mmgg",
            "names": [
                "family_mmgg"
            ],
            "surrogates": "👨‍👨‍👧‍👧"
        },
        "family_woman_boy": {
            "name": "family_woman_boy",
            "names": [
                "family_woman_boy"
            ],
            "surrogates": "👩‍👦"
        },
        "family_woman_girl": {
            "name": "family_woman_girl",
            "names": [
                "family_woman_girl"
            ],
            "surrogates": "👩‍👧"
        },
        "family_woman_girl_boy": {
            "name": "family_woman_girl_boy",
            "names": [
                "family_woman_girl_boy"
            ],
            "surrogates": "👩‍👧‍👦"
        },
        "family_woman_boy_boy": {
            "name": "family_woman_boy_boy",
            "names": [
                "family_woman_boy_boy"
            ],
            "surrogates": "👩‍👦‍👦"
        },
        "family_woman_girl_girl": {
            "name": "family_woman_girl_girl",
            "names": [
                "family_woman_girl_girl"
            ],
            "surrogates": "👩‍👧‍👧"
        },
        "family_man_boy": {
            "name": "family_man_boy",
            "names": [
                "family_man_boy"
            ],
            "surrogates": "👨‍👦"
        },
        "family_man_girl": {
            "name": "family_man_girl",
            "names": [
                "family_man_girl"
            ],
            "surrogates": "👨‍👧"
        },
        "family_man_girl_boy": {
            "name": "family_man_girl_boy",
            "names": [
                "family_man_girl_boy"
            ],
            "surrogates": "👨‍👧‍👦"
        },
        "family_man_boy_boy": {
            "name": "family_man_boy_boy",
            "names": [
                "family_man_boy_boy"
            ],
            "surrogates": "👨‍👦‍👦"
        },
        "family_man_girl_girl": {
            "name": "family_man_girl_girl",
            "names": [
                "family_man_girl_girl"
            ],
            "surrogates": "👨‍👧‍👧"
        },
        "knot": {
            "name": "knot",
            "names": [
                "knot"
            ],
            "surrogates": "🪢"
        },
        "yarn": {
            "name": "yarn",
            "names": [
                "yarn"
            ],
            "surrogates": "🧶"
        },
        "thread": {
            "name": "thread",
            "names": [
                "thread"
            ],
            "surrogates": "🧵"
        },
        "sewing_needle": {
            "name": "sewing_needle",
            "names": [
                "sewing_needle"
            ],
            "surrogates": "🪡"
        },
        "coat": {
            "name": "coat",
            "names": [
                "coat"
            ],
            "surrogates": "🧥"
        },
        "lab_coat": {
            "name": "lab_coat",
            "names": [
                "lab_coat"
            ],
            "surrogates": "🥼"
        },
        "safety_vest": {
            "name": "safety_vest",
            "names": [
                "safety_vest"
            ],
            "surrogates": "🦺"
        },
        "womans_clothes": {
            "name": "womans_clothes",
            "names": [
                "womans_clothes"
            ],
            "surrogates": "👚"
        },
        "shirt": {
            "name": "shirt",
            "names": [
                "shirt",
                "t_shirt"
            ],
            "surrogates": "👕"
        },
        "jeans": {
            "name": "jeans",
            "names": [
                "jeans"
            ],
            "surrogates": "👖"
        },
        "briefs": {
            "name": "briefs",
            "names": [
                "briefs"
            ],
            "surrogates": "🩲"
        },
        "shorts": {
            "name": "shorts",
            "names": [
                "shorts"
            ],
            "surrogates": "🩳"
        },
        "necktie": {
            "name": "necktie",
            "names": [
                "necktie"
            ],
            "surrogates": "👔"
        },
        "dress": {
            "name": "dress",
            "names": [
                "dress"
            ],
            "surrogates": "👗"
        },
        "bikini": {
            "name": "bikini",
            "names": [
                "bikini"
            ],
            "surrogates": "👙"
        },
        "one_piece_swimsuit": {
            "name": "one_piece_swimsuit",
            "names": [
                "one_piece_swimsuit"
            ],
            "surrogates": "🩱"
        },
        "kimono": {
            "name": "kimono",
            "names": [
                "kimono"
            ],
            "surrogates": "👘"
        },
        "sari": {
            "name": "sari",
            "names": [
                "sari"
            ],
            "surrogates": "🥻"
        },
        "thong_sandal": {
            "name": "thong_sandal",
            "names": [
                "thong_sandal"
            ],
            "surrogates": "🩴"
        },
        "womans_flat_shoe": {
            "name": "womans_flat_shoe",
            "names": [
                "womans_flat_shoe",
                "flat_shoe"
            ],
            "surrogates": "🥿"
        },
        "high_heel": {
            "name": "high_heel",
            "names": [
                "high_heel"
            ],
            "surrogates": "👠"
        },
        "sandal": {
            "name": "sandal",
            "names": [
                "sandal",
                "womans_sandal"
            ],
            "surrogates": "👡"
        },
        "boot": {
            "name": "boot",
            "names": [
                "boot",
                "womans_boot"
            ],
            "surrogates": "👢"
        },
        "mans_shoe": {
            "name": "mans_shoe",
            "names": [
                "mans_shoe"
            ],
            "surrogates": "👞"
        },
        "athletic_shoe": {
            "name": "athletic_shoe",
            "names": [
                "athletic_shoe",
                "running_shoe"
            ],
            "surrogates": "👟"
        },
        "hiking_boot": {
            "name": "hiking_boot",
            "names": [
                "hiking_boot"
            ],
            "surrogates": "🥾"
        },
        "socks": {
            "name": "socks",
            "names": [
                "socks"
            ],
            "surrogates": "🧦"
        },
        "gloves": {
            "name": "gloves",
            "names": [
                "gloves"
            ],
            "surrogates": "🧤"
        },
        "scarf": {
            "name": "scarf",
            "names": [
                "scarf"
            ],
            "surrogates": "🧣"
        },
        "tophat": {
            "name": "tophat",
            "names": [
                "tophat",
                "top_hat"
            ],
            "surrogates": "🎩"
        },
        "billed_cap": {
            "name": "billed_cap",
            "names": [
                "billed_cap"
            ],
            "surrogates": "🧢"
        },
        "womans_hat": {
            "name": "womans_hat",
            "names": [
                "womans_hat"
            ],
            "surrogates": "👒"
        },
        "mortar_board": {
            "name": "mortar_board",
            "names": [
                "mortar_board"
            ],
            "surrogates": "🎓"
        },
        "helmet_with_cross": {
            "name": "helmet_with_cross",
            "names": [
                "helmet_with_cross",
                "helmet_with_white_cross"
            ],
            "surrogates": "⛑️"
        },
        "military_helmet": {
            "name": "military_helmet",
            "names": [
                "military_helmet"
            ],
            "surrogates": "🪖"
        },
        "crown": {
            "name": "crown",
            "names": [
                "crown"
            ],
            "surrogates": "👑"
        },
        "ring": {
            "name": "ring",
            "names": [
                "ring"
            ],
            "surrogates": "💍"
        },
        "pouch": {
            "name": "pouch",
            "names": [
                "pouch",
                "clutch_bag"
            ],
            "surrogates": "👝"
        },
        "purse": {
            "name": "purse",
            "names": [
                "purse"
            ],
            "surrogates": "👛"
        },
        "handbag": {
            "name": "handbag",
            "names": [
                "handbag"
            ],
            "surrogates": "👜"
        },
        "briefcase": {
            "name": "briefcase",
            "names": [
                "briefcase"
            ],
            "surrogates": "💼"
        },
        "school_satchel": {
            "name": "school_satchel",
            "names": [
                "school_satchel",
                "backpack"
            ],
            "surrogates": "🎒"
        },
        "luggage": {
            "name": "luggage",
            "names": [
                "luggage"
            ],
            "surrogates": "🧳"
        },
        "eyeglasses": {
            "name": "eyeglasses",
            "names": [
                "eyeglasses",
                "glasses"
            ],
            "surrogates": "👓"
        },
        "dark_sunglasses": {
            "name": "dark_sunglasses",
            "names": [
                "dark_sunglasses"
            ],
            "surrogates": "🕶️"
        },
        "goggles": {
            "name": "goggles",
            "names": [
                "goggles"
            ],
            "surrogates": "🥽"
        },
        "closed_umbrella": {
            "name": "closed_umbrella",
            "names": [
                "closed_umbrella"
            ],
            "surrogates": "🌂"
        }
    },
    "nature": {
        "dog": {
            "name": "dog",
            "names": [
                "dog",
                "dog_face"
            ],
            "surrogates": "🐶"
        },
        "cat": {
            "name": "cat",
            "names": [
                "cat",
                "cat_face"
            ],
            "surrogates": "🐱"
        },
        "mouse": {
            "name": "mouse",
            "names": [
                "mouse",
                "mouse_face"
            ],
            "surrogates": "🐭"
        },
        "hamster": {
            "name": "hamster",
            "names": [
                "hamster"
            ],
            "surrogates": "🐹"
        },
        "rabbit": {
            "name": "rabbit",
            "names": [
                "rabbit",
                "rabbit_face"
            ],
            "surrogates": "🐰"
        },
        "fox": {
            "name": "fox",
            "names": [
                "fox",
                "fox_face"
            ],
            "surrogates": "🦊"
        },
        "bear": {
            "name": "bear",
            "names": [
                "bear"
            ],
            "surrogates": "🐻"
        },
        "panda_face": {
            "name": "panda_face",
            "names": [
                "panda_face",
                "panda"
            ],
            "surrogates": "🐼"
        },
        "polar_bear": {
            "name": "polar_bear",
            "names": [
                "polar_bear"
            ],
            "surrogates": "🐻‍❄️"
        },
        "koala": {
            "name": "koala",
            "names": [
                "koala"
            ],
            "surrogates": "🐨"
        },
        "tiger": {
            "name": "tiger",
            "names": [
                "tiger",
                "tiger_face"
            ],
            "surrogates": "🐯"
        },
        "lion_face": {
            "name": "lion_face",
            "names": [
                "lion_face",
                "lion"
            ],
            "surrogates": "🦁"
        },
        "cow": {
            "name": "cow",
            "names": [
                "cow",
                "cow_face"
            ],
            "surrogates": "🐮"
        },
        "pig": {
            "name": "pig",
            "names": [
                "pig",
                "pig_face"
            ],
            "surrogates": "🐷"
        },
        "pig_nose": {
            "name": "pig_nose",
            "names": [
                "pig_nose"
            ],
            "surrogates": "🐽"
        },
        "frog": {
            "name": "frog",
            "names": [
                "frog"
            ],
            "surrogates": "🐸"
        },
        "monkey_face": {
            "name": "monkey_face",
            "names": [
                "monkey_face"
            ],
            "surrogates": "🐵"
        },
        "see_no_evil": {
            "name": "see_no_evil",
            "names": [
                "see_no_evil"
            ],
            "surrogates": "🙈"
        },
        "hear_no_evil": {
            "name": "hear_no_evil",
            "names": [
                "hear_no_evil"
            ],
            "surrogates": "🙉"
        },
        "speak_no_evil": {
            "name": "speak_no_evil",
            "names": [
                "speak_no_evil"
            ],
            "surrogates": "🙊"
        },
        "monkey": {
            "name": "monkey",
            "names": [
                "monkey"
            ],
            "surrogates": "🐒"
        },
        "chicken": {
            "name": "chicken",
            "names": [
                "chicken"
            ],
            "surrogates": "🐔"
        },
        "penguin": {
            "name": "penguin",
            "names": [
                "penguin"
            ],
            "surrogates": "🐧"
        },
        "bird": {
            "name": "bird",
            "names": [
                "bird"
            ],
            "surrogates": "🐦"
        },
        "baby_chick": {
            "name": "baby_chick",
            "names": [
                "baby_chick"
            ],
            "surrogates": "🐤"
        },
        "hatching_chick": {
            "name": "hatching_chick",
            "names": [
                "hatching_chick"
            ],
            "surrogates": "🐣"
        },
        "hatched_chick": {
            "name": "hatched_chick",
            "names": [
                "hatched_chick"
            ],
            "surrogates": "🐥"
        },
        "goose": {
            "name": "goose",
            "names": [
                "goose"
            ],
            "surrogates": "🪿"
        },
        "duck": {
            "name": "duck",
            "names": [
                "duck"
            ],
            "surrogates": "🦆"
        },
        "black_bird": {
            "name": "black_bird",
            "names": [
                "black_bird"
            ],
            "surrogates": "🐦‍⬛"
        },
        "eagle": {
            "name": "eagle",
            "names": [
                "eagle"
            ],
            "surrogates": "🦅"
        },
        "owl": {
            "name": "owl",
            "names": [
                "owl"
            ],
            "surrogates": "🦉"
        },
        "bat": {
            "name": "bat",
            "names": [
                "bat"
            ],
            "surrogates": "🦇"
        },
        "wolf": {
            "name": "wolf",
            "names": [
                "wolf"
            ],
            "surrogates": "🐺"
        },
        "boar": {
            "name": "boar",
            "names": [
                "boar"
            ],
            "surrogates": "🐗"
        },
        "horse": {
            "name": "horse",
            "names": [
                "horse",
                "horse_face"
            ],
            "surrogates": "🐴"
        },
        "unicorn": {
            "name": "unicorn",
            "names": [
                "unicorn",
                "unicorn_face"
            ],
            "surrogates": "🦄"
        },
        "moose": {
            "name": "moose",
            "names": [
                "moose"
            ],
            "surrogates": "🫎"
        },
        "bee": {
            "name": "bee",
            "names": [
                "bee",
                "honeybee"
            ],
            "surrogates": "🐝"
        },
        "worm": {
            "name": "worm",
            "names": [
                "worm"
            ],
            "surrogates": "🪱"
        },
        "bug": {
            "name": "bug",
            "names": [
                "bug"
            ],
            "surrogates": "🐛"
        },
        "butterfly": {
            "name": "butterfly",
            "names": [
                "butterfly"
            ],
            "surrogates": "🦋"
        },
        "snail": {
            "name": "snail",
            "names": [
                "snail"
            ],
            "surrogates": "🐌"
        },
        "lady_beetle": {
            "name": "lady_beetle",
            "names": [
                "lady_beetle"
            ],
            "surrogates": "🐞"
        },
        "ant": {
            "name": "ant",
            "names": [
                "ant"
            ],
            "surrogates": "🐜"
        },
        "fly": {
            "name": "fly",
            "names": [
                "fly"
            ],
            "surrogates": "🪰"
        },
        "beetle": {
            "name": "beetle",
            "names": [
                "beetle"
            ],
            "surrogates": "🪲"
        },
        "cockroach": {
            "name": "cockroach",
            "names": [
                "cockroach"
            ],
            "surrogates": "🪳"
        },
        "mosquito": {
            "name": "mosquito",
            "names": [
                "mosquito"
            ],
            "surrogates": "🦟"
        },
        "cricket": {
            "name": "cricket",
            "names": [
                "cricket"
            ],
            "surrogates": "🦗"
        },
        "spider": {
            "name": "spider",
            "names": [
                "spider"
            ],
            "surrogates": "🕷️"
        },
        "spider_web": {
            "name": "spider_web",
            "names": [
                "spider_web"
            ],
            "surrogates": "🕸️"
        },
        "scorpion": {
            "name": "scorpion",
            "names": [
                "scorpion"
            ],
            "surrogates": "🦂"
        },
        "turtle": {
            "name": "turtle",
            "names": [
                "turtle"
            ],
            "surrogates": "🐢"
        },
        "snake": {
            "name": "snake",
            "names": [
                "snake"
            ],
            "surrogates": "🐍"
        },
        "lizard": {
            "name": "lizard",
            "names": [
                "lizard"
            ],
            "surrogates": "🦎"
        },
        "t_rex": {
            "name": "t_rex",
            "names": [
                "t_rex"
            ],
            "surrogates": "🦖"
        },
        "sauropod": {
            "name": "sauropod",
            "names": [
                "sauropod"
            ],
            "surrogates": "🦕"
        },
        "octopus": {
            "name": "octopus",
            "names": [
                "octopus"
            ],
            "surrogates": "🐙"
        },
        "squid": {
            "name": "squid",
            "names": [
                "squid"
            ],
            "surrogates": "🦑"
        },
        "jellyfish": {
            "name": "jellyfish",
            "names": [
                "jellyfish"
            ],
            "surrogates": "🪼"
        },
        "shrimp": {
            "name": "shrimp",
            "names": [
                "shrimp"
            ],
            "surrogates": "🦐"
        },
        "lobster": {
            "name": "lobster",
            "names": [
                "lobster"
            ],
            "surrogates": "🦞"
        },
        "crab": {
            "name": "crab",
            "names": [
                "crab"
            ],
            "surrogates": "🦀"
        },
        "blowfish": {
            "name": "blowfish",
            "names": [
                "blowfish"
            ],
            "surrogates": "🐡"
        },
        "tropical_fish": {
            "name": "tropical_fish",
            "names": [
                "tropical_fish"
            ],
            "surrogates": "🐠"
        },
        "fish": {
            "name": "fish",
            "names": [
                "fish"
            ],
            "surrogates": "🐟"
        },
        "dolphin": {
            "name": "dolphin",
            "names": [
                "dolphin"
            ],
            "surrogates": "🐬"
        },
        "whale": {
            "name": "whale",
            "names": [
                "whale"
            ],
            "surrogates": "🐳"
        },
        "whale2": {
            "name": "whale2",
            "names": [
                "whale2"
            ],
            "surrogates": "🐋"
        },
        "shark": {
            "name": "shark",
            "names": [
                "shark"
            ],
            "surrogates": "🦈"
        },
        "seal": {
            "name": "seal",
            "names": [
                "seal"
            ],
            "surrogates": "🦭"
        },
        "crocodile": {
            "name": "crocodile",
            "names": [
                "crocodile"
            ],
            "surrogates": "🐊"
        },
        "tiger2": {
            "name": "tiger2",
            "names": [
                "tiger2"
            ],
            "surrogates": "🐅"
        },
        "leopard": {
            "name": "leopard",
            "names": [
                "leopard"
            ],
            "surrogates": "🐆"
        },
        "zebra": {
            "name": "zebra",
            "names": [
                "zebra"
            ],
            "surrogates": "🦓"
        },
        "gorilla": {
            "name": "gorilla",
            "names": [
                "gorilla"
            ],
            "surrogates": "🦍"
        },
        "orangutan": {
            "name": "orangutan",
            "names": [
                "orangutan"
            ],
            "surrogates": "🦧"
        },
        "mammoth": {
            "name": "mammoth",
            "names": [
                "mammoth"
            ],
            "surrogates": "🦣"
        },
        "elephant": {
            "name": "elephant",
            "names": [
                "elephant"
            ],
            "surrogates": "🐘"
        },
        "hippopotamus": {
            "name": "hippopotamus",
            "names": [
                "hippopotamus"
            ],
            "surrogates": "🦛"
        },
        "rhino": {
            "name": "rhino",
            "names": [
                "rhino",
                "rhinoceros"
            ],
            "surrogates": "🦏"
        },
        "dromedary_camel": {
            "name": "dromedary_camel",
            "names": [
                "dromedary_camel"
            ],
            "surrogates": "🐪"
        },
        "camel": {
            "name": "camel",
            "names": [
                "camel"
            ],
            "surrogates": "🐫"
        },
        "giraffe": {
            "name": "giraffe",
            "names": [
                "giraffe"
            ],
            "surrogates": "🦒"
        },
        "kangaroo": {
            "name": "kangaroo",
            "names": [
                "kangaroo"
            ],
            "surrogates": "🦘"
        },
        "bison": {
            "name": "bison",
            "names": [
                "bison"
            ],
            "surrogates": "🦬"
        },
        "water_buffalo": {
            "name": "water_buffalo",
            "names": [
                "water_buffalo"
            ],
            "surrogates": "🐃"
        },
        "ox": {
            "name": "ox",
            "names": [
                "ox"
            ],
            "surrogates": "🐂"
        },
        "cow2": {
            "name": "cow2",
            "names": [
                "cow2"
            ],
            "surrogates": "🐄"
        },
        "donkey": {
            "name": "donkey",
            "names": [
                "donkey"
            ],
            "surrogates": "🫏"
        },
        "racehorse": {
            "name": "racehorse",
            "names": [
                "racehorse"
            ],
            "surrogates": "🐎"
        },
        "pig2": {
            "name": "pig2",
            "names": [
                "pig2"
            ],
            "surrogates": "🐖"
        },
        "ram": {
            "name": "ram",
            "names": [
                "ram"
            ],
            "surrogates": "🐏"
        },
        "sheep": {
            "name": "sheep",
            "names": [
                "sheep",
                "ewe"
            ],
            "surrogates": "🐑"
        },
        "llama": {
            "name": "llama",
            "names": [
                "llama"
            ],
            "surrogates": "🦙"
        },
        "goat": {
            "name": "goat",
            "names": [
                "goat"
            ],
            "surrogates": "🐐"
        },
        "deer": {
            "name": "deer",
            "names": [
                "deer"
            ],
            "surrogates": "🦌"
        },
        "dog2": {
            "name": "dog2",
            "names": [
                "dog2"
            ],
            "surrogates": "🐕"
        },
        "poodle": {
            "name": "poodle",
            "names": [
                "poodle"
            ],
            "surrogates": "🐩"
        },
        "guide_dog": {
            "name": "guide_dog",
            "names": [
                "guide_dog"
            ],
            "surrogates": "🦮"
        },
        "service_dog": {
            "name": "service_dog",
            "names": [
                "service_dog"
            ],
            "surrogates": "🐕‍🦺"
        },
        "cat2": {
            "name": "cat2",
            "names": [
                "cat2"
            ],
            "surrogates": "🐈"
        },
        "black_cat": {
            "name": "black_cat",
            "names": [
                "black_cat"
            ],
            "surrogates": "🐈‍⬛"
        },
        "feather": {
            "name": "feather",
            "names": [
                "feather"
            ],
            "surrogates": "🪶"
        },
        "wing": {
            "name": "wing",
            "names": [
                "wing"
            ],
            "surrogates": "🪽"
        },
        "rooster": {
            "name": "rooster",
            "names": [
                "rooster"
            ],
            "surrogates": "🐓"
        },
        "turkey": {
            "name": "turkey",
            "names": [
                "turkey"
            ],
            "surrogates": "🦃"
        },
        "dodo": {
            "name": "dodo",
            "names": [
                "dodo"
            ],
            "surrogates": "🦤"
        },
        "peacock": {
            "name": "peacock",
            "names": [
                "peacock"
            ],
            "surrogates": "🦚"
        },
        "parrot": {
            "name": "parrot",
            "names": [
                "parrot"
            ],
            "surrogates": "🦜"
        },
        "swan": {
            "name": "swan",
            "names": [
                "swan"
            ],
            "surrogates": "🦢"
        },
        "flamingo": {
            "name": "flamingo",
            "names": [
                "flamingo"
            ],
            "surrogates": "🦩"
        },
        "dove": {
            "name": "dove",
            "names": [
                "dove",
                "dove_of_peace"
            ],
            "surrogates": "🕊️"
        },
        "rabbit2": {
            "name": "rabbit2",
            "names": [
                "rabbit2"
            ],
            "surrogates": "🐇"
        },
        "raccoon": {
            "name": "raccoon",
            "names": [
                "raccoon"
            ],
            "surrogates": "🦝"
        },
        "skunk": {
            "name": "skunk",
            "names": [
                "skunk"
            ],
            "surrogates": "🦨"
        },
        "badger": {
            "name": "badger",
            "names": [
                "badger"
            ],
            "surrogates": "🦡"
        },
        "beaver": {
            "name": "beaver",
            "names": [
                "beaver"
            ],
            "surrogates": "🦫"
        },
        "otter": {
            "name": "otter",
            "names": [
                "otter"
            ],
            "surrogates": "🦦"
        },
        "sloth": {
            "name": "sloth",
            "names": [
                "sloth"
            ],
            "surrogates": "🦥"
        },
        "mouse2": {
            "name": "mouse2",
            "names": [
                "mouse2"
            ],
            "surrogates": "🐁"
        },
        "rat": {
            "name": "rat",
            "names": [
                "rat"
            ],
            "surrogates": "🐀"
        },
        "chipmunk": {
            "name": "chipmunk",
            "names": [
                "chipmunk"
            ],
            "surrogates": "🐿️"
        },
        "hedgehog": {
            "name": "hedgehog",
            "names": [
                "hedgehog"
            ],
            "surrogates": "🦔"
        },
        "feet": {
            "name": "feet",
            "names": [
                "feet",
                "paw_prints"
            ],
            "surrogates": "🐾"
        },
        "dragon": {
            "name": "dragon",
            "names": [
                "dragon"
            ],
            "surrogates": "🐉"
        },
        "dragon_face": {
            "name": "dragon_face",
            "names": [
                "dragon_face"
            ],
            "surrogates": "🐲"
        },
        "phoenix": {
            "name": "phoenix",
            "names": [
                "phoenix"
            ],
            "surrogates": "🐦‍🔥"
        },
        "cactus": {
            "name": "cactus",
            "names": [
                "cactus"
            ],
            "surrogates": "🌵"
        },
        "christmas_tree": {
            "name": "christmas_tree",
            "names": [
                "christmas_tree"
            ],
            "surrogates": "🎄"
        },
        "evergreen_tree": {
            "name": "evergreen_tree",
            "names": [
                "evergreen_tree"
            ],
            "surrogates": "🌲"
        },
        "deciduous_tree": {
            "name": "deciduous_tree",
            "names": [
                "deciduous_tree"
            ],
            "surrogates": "🌳"
        },
        "palm_tree": {
            "name": "palm_tree",
            "names": [
                "palm_tree"
            ],
            "surrogates": "🌴"
        },
        "wood": {
            "name": "wood",
            "names": [
                "wood"
            ],
            "surrogates": "🪵"
        },
        "seedling": {
            "name": "seedling",
            "names": [
                "seedling"
            ],
            "surrogates": "🌱"
        },
        "herb": {
            "name": "herb",
            "names": [
                "herb"
            ],
            "surrogates": "🌿"
        },
        "shamrock": {
            "name": "shamrock",
            "names": [
                "shamrock"
            ],
            "surrogates": "☘️"
        },
        "four_leaf_clover": {
            "name": "four_leaf_clover",
            "names": [
                "four_leaf_clover"
            ],
            "surrogates": "🍀"
        },
        "bamboo": {
            "name": "bamboo",
            "names": [
                "bamboo"
            ],
            "surrogates": "🎍"
        },
        "potted_plant": {
            "name": "potted_plant",
            "names": [
                "potted_plant"
            ],
            "surrogates": "🪴"
        },
        "tanabata_tree": {
            "name": "tanabata_tree",
            "names": [
                "tanabata_tree"
            ],
            "surrogates": "🎋"
        },
        "leaves": {
            "name": "leaves",
            "names": [
                "leaves"
            ],
            "surrogates": "🍃"
        },
        "fallen_leaf": {
            "name": "fallen_leaf",
            "names": [
                "fallen_leaf"
            ],
            "surrogates": "🍂"
        },
        "maple_leaf": {
            "name": "maple_leaf",
            "names": [
                "maple_leaf"
            ],
            "surrogates": "🍁"
        },
        "nest_with_eggs": {
            "name": "nest_with_eggs",
            "names": [
                "nest_with_eggs"
            ],
            "surrogates": "🪺"
        },
        "empty_nest": {
            "name": "empty_nest",
            "names": [
                "empty_nest"
            ],
            "surrogates": "🪹"
        },
        "mushroom": {
            "name": "mushroom",
            "names": [
                "mushroom"
            ],
            "surrogates": "🍄"
        },
        "brown_mushroom": {
            "name": "brown_mushroom",
            "names": [
                "brown_mushroom"
            ],
            "surrogates": "🍄‍🟫"
        },
        "shell": {
            "name": "shell",
            "names": [
                "shell",
                "spiral_shell"
            ],
            "surrogates": "🐚"
        },
        "coral": {
            "name": "coral",
            "names": [
                "coral"
            ],
            "surrogates": "🪸"
        },
        "rock": {
            "name": "rock",
            "names": [
                "rock"
            ],
            "surrogates": "🪨"
        },
        "ear_of_rice": {
            "name": "ear_of_rice",
            "names": [
                "ear_of_rice",
                "sheaf_of_rice"
            ],
            "surrogates": "🌾"
        },
        "bouquet": {
            "name": "bouquet",
            "names": [
                "bouquet"
            ],
            "surrogates": "💐"
        },
        "tulip": {
            "name": "tulip",
            "names": [
                "tulip"
            ],
            "surrogates": "🌷"
        },
        "rose": {
            "name": "rose",
            "names": [
                "rose"
            ],
            "surrogates": "🌹"
        },
        "wilted_rose": {
            "name": "wilted_rose",
            "names": [
                "wilted_rose",
                "wilted_flower"
            ],
            "surrogates": "🥀"
        },
        "hyacinth": {
            "name": "hyacinth",
            "names": [
                "hyacinth"
            ],
            "surrogates": "🪻"
        },
        "lotus": {
            "name": "lotus",
            "names": [
                "lotus"
            ],
            "surrogates": "🪷"
        },
        "hibiscus": {
            "name": "hibiscus",
            "names": [
                "hibiscus"
            ],
            "surrogates": "🌺"
        },
        "cherry_blossom": {
            "name": "cherry_blossom",
            "names": [
                "cherry_blossom"
            ],
            "surrogates": "🌸"
        },
        "blossom": {
            "name": "blossom",
            "names": [
                "blossom"
            ],
            "surrogates": "🌼"
        },
        "sunflower": {
            "name": "sunflower",
            "names": [
                "sunflower"
            ],
            "surrogates": "🌻"
        },
        "sun_with_face": {
            "name": "sun_with_face",
            "names": [
                "sun_with_face"
            ],
            "surrogates": "🌞"
        },
        "full_moon_with_face": {
            "name": "full_moon_with_face",
            "names": [
                "full_moon_with_face"
            ],
            "surrogates": "🌝"
        },
        "first_quarter_moon_with_face": {
            "name": "first_quarter_moon_with_face",
            "names": [
                "first_quarter_moon_with_face"
            ],
            "surrogates": "🌛"
        },
        "last_quarter_moon_with_face": {
            "name": "last_quarter_moon_with_face",
            "names": [
                "last_quarter_moon_with_face"
            ],
            "surrogates": "🌜"
        },
        "new_moon_with_face": {
            "name": "new_moon_with_face",
            "names": [
                "new_moon_with_face",
                "new_moon_face"
            ],
            "surrogates": "🌚"
        },
        "full_moon": {
            "name": "full_moon",
            "names": [
                "full_moon"
            ],
            "surrogates": "🌕"
        },
        "waning_gibbous_moon": {
            "name": "waning_gibbous_moon",
            "names": [
                "waning_gibbous_moon"
            ],
            "surrogates": "🌖"
        },
        "last_quarter_moon": {
            "name": "last_quarter_moon",
            "names": [
                "last_quarter_moon"
            ],
            "surrogates": "🌗"
        },
        "waning_crescent_moon": {
            "name": "waning_crescent_moon",
            "names": [
                "waning_crescent_moon"
            ],
            "surrogates": "🌘"
        },
        "new_moon": {
            "name": "new_moon",
            "names": [
                "new_moon"
            ],
            "surrogates": "🌑"
        },
        "waxing_crescent_moon": {
            "name": "waxing_crescent_moon",
            "names": [
                "waxing_crescent_moon"
            ],
            "surrogates": "🌒"
        },
        "first_quarter_moon": {
            "name": "first_quarter_moon",
            "names": [
                "first_quarter_moon"
            ],
            "surrogates": "🌓"
        },
        "waxing_gibbous_moon": {
            "name": "waxing_gibbous_moon",
            "names": [
                "waxing_gibbous_moon"
            ],
            "surrogates": "🌔"
        },
        "crescent_moon": {
            "name": "crescent_moon",
            "names": [
                "crescent_moon"
            ],
            "surrogates": "🌙"
        },
        "earth_americas": {
            "name": "earth_americas",
            "names": [
                "earth_americas"
            ],
            "surrogates": "🌎"
        },
        "earth_africa": {
            "name": "earth_africa",
            "names": [
                "earth_africa"
            ],
            "surrogates": "🌍"
        },
        "earth_asia": {
            "name": "earth_asia",
            "names": [
                "earth_asia"
            ],
            "surrogates": "🌏"
        },
        "ringed_planet": {
            "name": "ringed_planet",
            "names": [
                "ringed_planet"
            ],
            "surrogates": "🪐"
        },
        "dizzy": {
            "name": "dizzy",
            "names": [
                "dizzy"
            ],
            "surrogates": "💫"
        },
        "star": {
            "name": "star",
            "names": [
                "star"
            ],
            "surrogates": "⭐"
        },
        "star2": {
            "name": "star2",
            "names": [
                "star2",
                "glowing_star"
            ],
            "surrogates": "🌟"
        },
        "sparkles": {
            "name": "sparkles",
            "names": [
                "sparkles"
            ],
            "surrogates": "✨"
        },
        "zap": {
            "name": "zap",
            "names": [
                "zap",
                "high_voltage"
            ],
            "surrogates": "⚡"
        },
        "comet": {
            "name": "comet",
            "names": [
                "comet"
            ],
            "surrogates": "☄️"
        },
        "boom": {
            "name": "boom",
            "names": [
                "boom",
                "collision"
            ],
            "surrogates": "💥"
        },
        "fire": {
            "name": "fire",
            "names": [
                "fire",
                "flame"
            ],
            "surrogates": "🔥"
        },
        "cloud_tornado": {
            "name": "cloud_tornado",
            "names": [
                "cloud_tornado",
                "cloud_with_tornado",
                "tornado"
            ],
            "surrogates": "🌪️"
        },
        "rainbow": {
            "name": "rainbow",
            "names": [
                "rainbow"
            ],
            "surrogates": "🌈"
        },
        "sunny": {
            "name": "sunny",
            "names": [
                "sunny",
                "sun"
            ],
            "surrogates": "☀️"
        },
        "white_sun_small_cloud": {
            "name": "white_sun_small_cloud",
            "names": [
                "white_sun_small_cloud",
                "white_sun_with_small_cloud"
            ],
            "surrogates": "🌤️"
        },
        "partly_sunny": {
            "name": "partly_sunny",
            "names": [
                "partly_sunny"
            ],
            "surrogates": "⛅"
        },
        "white_sun_cloud": {
            "name": "white_sun_cloud",
            "names": [
                "white_sun_cloud",
                "white_sun_behind_cloud"
            ],
            "surrogates": "🌥️"
        },
        "cloud": {
            "name": "cloud",
            "names": [
                "cloud"
            ],
            "surrogates": "☁️"
        },
        "white_sun_rain_cloud": {
            "name": "white_sun_rain_cloud",
            "names": [
                "white_sun_rain_cloud",
                "white_sun_behind_cloud_with_rain"
            ],
            "surrogates": "🌦️"
        },
        "cloud_rain": {
            "name": "cloud_rain",
            "names": [
                "cloud_rain",
                "cloud_with_rain"
            ],
            "surrogates": "🌧️"
        },
        "thunder_cloud_rain": {
            "name": "thunder_cloud_rain",
            "names": [
                "thunder_cloud_rain",
                "thunder_cloud_and_rain"
            ],
            "surrogates": "⛈️"
        },
        "cloud_lightning": {
            "name": "cloud_lightning",
            "names": [
                "cloud_lightning",
                "cloud_with_lightning"
            ],
            "surrogates": "🌩️"
        },
        "cloud_snow": {
            "name": "cloud_snow",
            "names": [
                "cloud_snow",
                "cloud_with_snow"
            ],
            "surrogates": "🌨️"
        },
        "snowflake": {
            "name": "snowflake",
            "names": [
                "snowflake"
            ],
            "surrogates": "❄️"
        },
        "snowman2": {
            "name": "snowman2",
            "names": [
                "snowman2"
            ],
            "surrogates": "☃️"
        },
        "snowman": {
            "name": "snowman",
            "names": [
                "snowman"
            ],
            "surrogates": "⛄"
        },
        "wind_blowing_face": {
            "name": "wind_blowing_face",
            "names": [
                "wind_blowing_face",
                "wind_face"
            ],
            "surrogates": "🌬️"
        },
        "dash": {
            "name": "dash",
            "names": [
                "dash",
                "dashing_away"
            ],
            "surrogates": "💨"
        },
        "droplet": {
            "name": "droplet",
            "names": [
                "droplet"
            ],
            "surrogates": "💧"
        },
        "sweat_drops": {
            "name": "sweat_drops",
            "names": [
                "sweat_drops"
            ],
            "surrogates": "💦"
        },
        "bubbles": {
            "name": "bubbles",
            "names": [
                "bubbles"
            ],
            "surrogates": "🫧"
        },
        "umbrella": {
            "name": "umbrella",
            "names": [
                "umbrella"
            ],
            "surrogates": "☔"
        },
        "umbrella2": {
            "name": "umbrella2",
            "names": [
                "umbrella2"
            ],
            "surrogates": "☂️"
        },
        "ocean": {
            "name": "ocean",
            "names": [
                "ocean",
                "water_wave"
            ],
            "surrogates": "🌊"
        },
        "fog": {
            "name": "fog",
            "names": [
                "fog"
            ],
            "surrogates": "🌫️"
        }
    },
    "food": {
        "green_apple": {
            "name": "green_apple",
            "names": [
                "green_apple"
            ],
            "surrogates": "🍏"
        },
        "apple": {
            "name": "apple",
            "names": [
                "apple",
                "red_apple"
            ],
            "surrogates": "🍎"
        },
        "pear": {
            "name": "pear",
            "names": [
                "pear"
            ],
            "surrogates": "🍐"
        },
        "tangerine": {
            "name": "tangerine",
            "names": [
                "tangerine"
            ],
            "surrogates": "🍊"
        },
        "lemon": {
            "name": "lemon",
            "names": [
                "lemon"
            ],
            "surrogates": "🍋"
        },
        "lime": {
            "name": "lime",
            "names": [
                "lime"
            ],
            "surrogates": "🍋‍🟩"
        },
        "banana": {
            "name": "banana",
            "names": [
                "banana"
            ],
            "surrogates": "🍌"
        },
        "watermelon": {
            "name": "watermelon",
            "names": [
                "watermelon"
            ],
            "surrogates": "🍉"
        },
        "grapes": {
            "name": "grapes",
            "names": [
                "grapes"
            ],
            "surrogates": "🍇"
        },
        "strawberry": {
            "name": "strawberry",
            "names": [
                "strawberry"
            ],
            "surrogates": "🍓"
        },
        "blueberries": {
            "name": "blueberries",
            "names": [
                "blueberries"
            ],
            "surrogates": "🫐"
        },
        "melon": {
            "name": "melon",
            "names": [
                "melon"
            ],
            "surrogates": "🍈"
        },
        "cherries": {
            "name": "cherries",
            "names": [
                "cherries"
            ],
            "surrogates": "🍒"
        },
        "peach": {
            "name": "peach",
            "names": [
                "peach"
            ],
            "surrogates": "🍑"
        },
        "mango": {
            "name": "mango",
            "names": [
                "mango"
            ],
            "surrogates": "🥭"
        },
        "pineapple": {
            "name": "pineapple",
            "names": [
                "pineapple"
            ],
            "surrogates": "🍍"
        },
        "coconut": {
            "name": "coconut",
            "names": [
                "coconut"
            ],
            "surrogates": "🥥"
        },
        "kiwi": {
            "name": "kiwi",
            "names": [
                "kiwi",
                "kiwifruit",
                "kiwi_fruit"
            ],
            "surrogates": "🥝"
        },
        "tomato": {
            "name": "tomato",
            "names": [
                "tomato"
            ],
            "surrogates": "🍅"
        },
        "eggplant": {
            "name": "eggplant",
            "names": [
                "eggplant"
            ],
            "surrogates": "🍆"
        },
        "avocado": {
            "name": "avocado",
            "names": [
                "avocado"
            ],
            "surrogates": "🥑"
        },
        "pea_pod": {
            "name": "pea_pod",
            "names": [
                "pea_pod"
            ],
            "surrogates": "🫛"
        },
        "broccoli": {
            "name": "broccoli",
            "names": [
                "broccoli"
            ],
            "surrogates": "🥦"
        },
        "leafy_green": {
            "name": "leafy_green",
            "names": [
                "leafy_green"
            ],
            "surrogates": "🥬"
        },
        "cucumber": {
            "name": "cucumber",
            "names": [
                "cucumber"
            ],
            "surrogates": "🥒"
        },
        "hot_pepper": {
            "name": "hot_pepper",
            "names": [
                "hot_pepper"
            ],
            "surrogates": "🌶️"
        },
        "bell_pepper": {
            "name": "bell_pepper",
            "names": [
                "bell_pepper"
            ],
            "surrogates": "🫑"
        },
        "corn": {
            "name": "corn",
            "names": [
                "corn",
                "ear_of_corn"
            ],
            "surrogates": "🌽"
        },
        "carrot": {
            "name": "carrot",
            "names": [
                "carrot"
            ],
            "surrogates": "🥕"
        },
        "olive": {
            "name": "olive",
            "names": [
                "olive"
            ],
            "surrogates": "🫒"
        },
        "garlic": {
            "name": "garlic",
            "names": [
                "garlic"
            ],
            "surrogates": "🧄"
        },
        "onion": {
            "name": "onion",
            "names": [
                "onion"
            ],
            "surrogates": "🧅"
        },
        "potato": {
            "name": "potato",
            "names": [
                "potato"
            ],
            "surrogates": "🥔"
        },
        "sweet_potato": {
            "name": "sweet_potato",
            "names": [
                "sweet_potato"
            ],
            "surrogates": "🍠"
        },
        "ginger_root": {
            "name": "ginger_root",
            "names": [
                "ginger_root"
            ],
            "surrogates": "🫚"
        },
        "croissant": {
            "name": "croissant",
            "names": [
                "croissant"
            ],
            "surrogates": "🥐"
        },
        "bagel": {
            "name": "bagel",
            "names": [
                "bagel"
            ],
            "surrogates": "🥯"
        },
        "bread": {
            "name": "bread",
            "names": [
                "bread"
            ],
            "surrogates": "🍞"
        },
        "french_bread": {
            "name": "french_bread",
            "names": [
                "french_bread",
                "baguette_bread"
            ],
            "surrogates": "🥖"
        },
        "pretzel": {
            "name": "pretzel",
            "names": [
                "pretzel"
            ],
            "surrogates": "🥨"
        },
        "cheese": {
            "name": "cheese",
            "names": [
                "cheese",
                "cheese_wedge"
            ],
            "surrogates": "🧀"
        },
        "egg": {
            "name": "egg",
            "names": [
                "egg"
            ],
            "surrogates": "🥚"
        },
        "cooking": {
            "name": "cooking",
            "names": [
                "cooking"
            ],
            "surrogates": "🍳"
        },
        "butter": {
            "name": "butter",
            "names": [
                "butter"
            ],
            "surrogates": "🧈"
        },
        "pancakes": {
            "name": "pancakes",
            "names": [
                "pancakes"
            ],
            "surrogates": "🥞"
        },
        "waffle": {
            "name": "waffle",
            "names": [
                "waffle"
            ],
            "surrogates": "🧇"
        },
        "bacon": {
            "name": "bacon",
            "names": [
                "bacon"
            ],
            "surrogates": "🥓"
        },
        "cut_of_meat": {
            "name": "cut_of_meat",
            "names": [
                "cut_of_meat"
            ],
            "surrogates": "🥩"
        },
        "poultry_leg": {
            "name": "poultry_leg",
            "names": [
                "poultry_leg"
            ],
            "surrogates": "🍗"
        },
        "meat_on_bone": {
            "name": "meat_on_bone",
            "names": [
                "meat_on_bone"
            ],
            "surrogates": "🍖"
        },
        "bone": {
            "name": "bone",
            "names": [
                "bone"
            ],
            "surrogates": "🦴"
        },
        "hotdog": {
            "name": "hotdog",
            "names": [
                "hotdog",
                "hot_dog"
            ],
            "surrogates": "🌭"
        },
        "hamburger": {
            "name": "hamburger",
            "names": [
                "hamburger"
            ],
            "surrogates": "🍔"
        },
        "fries": {
            "name": "fries",
            "names": [
                "fries",
                "french_fries"
            ],
            "surrogates": "🍟"
        },
        "pizza": {
            "name": "pizza",
            "names": [
                "pizza"
            ],
            "surrogates": "🍕"
        },
        "flatbread": {
            "name": "flatbread",
            "names": [
                "flatbread"
            ],
            "surrogates": "🫓"
        },
        "sandwich": {
            "name": "sandwich",
            "names": [
                "sandwich"
            ],
            "surrogates": "🥪"
        },
        "stuffed_flatbread": {
            "name": "stuffed_flatbread",
            "names": [
                "stuffed_flatbread",
                "stuffed_pita"
            ],
            "surrogates": "🥙"
        },
        "falafel": {
            "name": "falafel",
            "names": [
                "falafel"
            ],
            "surrogates": "🧆"
        },
        "taco": {
            "name": "taco",
            "names": [
                "taco"
            ],
            "surrogates": "🌮"
        },
        "burrito": {
            "name": "burrito",
            "names": [
                "burrito"
            ],
            "surrogates": "🌯"
        },
        "tamale": {
            "name": "tamale",
            "names": [
                "tamale"
            ],
            "surrogates": "🫔"
        },
        "salad": {
            "name": "salad",
            "names": [
                "salad",
                "green_salad"
            ],
            "surrogates": "🥗"
        },
        "shallow_pan_of_food": {
            "name": "shallow_pan_of_food",
            "names": [
                "shallow_pan_of_food",
                "paella"
            ],
            "surrogates": "🥘"
        },
        "fondue": {
            "name": "fondue",
            "names": [
                "fondue"
            ],
            "surrogates": "🫕"
        },
        "canned_food": {
            "name": "canned_food",
            "names": [
                "canned_food"
            ],
            "surrogates": "🥫"
        },
        "jar": {
            "name": "jar",
            "names": [
                "jar"
            ],
            "surrogates": "🫙"
        },
        "spaghetti": {
            "name": "spaghetti",
            "names": [
                "spaghetti"
            ],
            "surrogates": "🍝"
        },
        "ramen": {
            "name": "ramen",
            "names": [
                "ramen",
                "steaming_bowl"
            ],
            "surrogates": "🍜"
        },
        "stew": {
            "name": "stew",
            "names": [
                "stew",
                "pot_of_food"
            ],
            "surrogates": "🍲"
        },
        "curry": {
            "name": "curry",
            "names": [
                "curry",
                "curry_rice"
            ],
            "surrogates": "🍛"
        },
        "sushi": {
            "name": "sushi",
            "names": [
                "sushi"
            ],
            "surrogates": "🍣"
        },
        "bento": {
            "name": "bento",
            "names": [
                "bento",
                "bento_box"
            ],
            "surrogates": "🍱"
        },
        "dumpling": {
            "name": "dumpling",
            "names": [
                "dumpling"
            ],
            "surrogates": "🥟"
        },
        "oyster": {
            "name": "oyster",
            "names": [
                "oyster"
            ],
            "surrogates": "🦪"
        },
        "fried_shrimp": {
            "name": "fried_shrimp",
            "names": [
                "fried_shrimp"
            ],
            "surrogates": "🍤"
        },
        "rice_ball": {
            "name": "rice_ball",
            "names": [
                "rice_ball"
            ],
            "surrogates": "🍙"
        },
        "rice": {
            "name": "rice",
            "names": [
                "rice",
                "cooked_rice"
            ],
            "surrogates": "🍚"
        },
        "rice_cracker": {
            "name": "rice_cracker",
            "names": [
                "rice_cracker"
            ],
            "surrogates": "🍘"
        },
        "fish_cake": {
            "name": "fish_cake",
            "names": [
                "fish_cake"
            ],
            "surrogates": "🍥"
        },
        "fortune_cookie": {
            "name": "fortune_cookie",
            "names": [
                "fortune_cookie"
            ],
            "surrogates": "🥠"
        },
        "moon_cake": {
            "name": "moon_cake",
            "names": [
                "moon_cake"
            ],
            "surrogates": "🥮"
        },
        "oden": {
            "name": "oden",
            "names": [
                "oden"
            ],
            "surrogates": "🍢"
        },
        "dango": {
            "name": "dango",
            "names": [
                "dango"
            ],
            "surrogates": "🍡"
        },
        "shaved_ice": {
            "name": "shaved_ice",
            "names": [
                "shaved_ice"
            ],
            "surrogates": "🍧"
        },
        "ice_cream": {
            "name": "ice_cream",
            "names": [
                "ice_cream"
            ],
            "surrogates": "🍨"
        },
        "icecream": {
            "name": "icecream",
            "names": [
                "icecream"
            ],
            "surrogates": "🍦"
        },
        "pie": {
            "name": "pie",
            "names": [
                "pie"
            ],
            "surrogates": "🥧"
        },
        "cupcake": {
            "name": "cupcake",
            "names": [
                "cupcake"
            ],
            "surrogates": "🧁"
        },
        "cake": {
            "name": "cake",
            "names": [
                "cake",
                "shortcake"
            ],
            "surrogates": "🍰"
        },
        "birthday": {
            "name": "birthday",
            "names": [
                "birthday",
                "birthday_cake"
            ],
            "surrogates": "🎂"
        },
        "custard": {
            "name": "custard",
            "names": [
                "custard",
                "pudding",
                "flan"
            ],
            "surrogates": "🍮"
        },
        "lollipop": {
            "name": "lollipop",
            "names": [
                "lollipop"
            ],
            "surrogates": "🍭"
        },
        "candy": {
            "name": "candy",
            "names": [
                "candy"
            ],
            "surrogates": "🍬"
        },
        "chocolate_bar": {
            "name": "chocolate_bar",
            "names": [
                "chocolate_bar"
            ],
            "surrogates": "🍫"
        },
        "popcorn": {
            "name": "popcorn",
            "names": [
                "popcorn"
            ],
            "surrogates": "🍿"
        },
        "doughnut": {
            "name": "doughnut",
            "names": [
                "doughnut"
            ],
            "surrogates": "🍩"
        },
        "cookie": {
            "name": "cookie",
            "names": [
                "cookie"
            ],
            "surrogates": "🍪"
        },
        "chestnut": {
            "name": "chestnut",
            "names": [
                "chestnut"
            ],
            "surrogates": "🌰"
        },
        "peanuts": {
            "name": "peanuts",
            "names": [
                "peanuts",
                "shelled_peanut"
            ],
            "surrogates": "🥜"
        },
        "beans": {
            "name": "beans",
            "names": [
                "beans"
            ],
            "surrogates": "🫘"
        },
        "honey_pot": {
            "name": "honey_pot",
            "names": [
                "honey_pot"
            ],
            "surrogates": "🍯"
        },
        "milk": {
            "name": "milk",
            "names": [
                "milk",
                "glass_of_milk"
            ],
            "surrogates": "🥛"
        },
        "pouring_liquid": {
            "name": "pouring_liquid",
            "names": [
                "pouring_liquid"
            ],
            "surrogates": "🫗"
        },
        "baby_bottle": {
            "name": "baby_bottle",
            "names": [
                "baby_bottle"
            ],
            "surrogates": "🍼"
        },
        "teapot": {
            "name": "teapot",
            "names": [
                "teapot"
            ],
            "surrogates": "🫖"
        },
        "coffee": {
            "name": "coffee",
            "names": [
                "coffee",
                "hot_beverage"
            ],
            "surrogates": "☕"
        },
        "tea": {
            "name": "tea",
            "names": [
                "tea"
            ],
            "surrogates": "🍵"
        },
        "mate": {
            "name": "mate",
            "names": [
                "mate"
            ],
            "surrogates": "🧉"
        },
        "beverage_box": {
            "name": "beverage_box",
            "names": [
                "beverage_box"
            ],
            "surrogates": "🧃"
        },
        "cup_with_straw": {
            "name": "cup_with_straw",
            "names": [
                "cup_with_straw"
            ],
            "surrogates": "🥤"
        },
        "bubble_tea": {
            "name": "bubble_tea",
            "names": [
                "bubble_tea"
            ],
            "surrogates": "🧋"
        },
        "sake": {
            "name": "sake",
            "names": [
                "sake"
            ],
            "surrogates": "🍶"
        },
        "beer": {
            "name": "beer",
            "names": [
                "beer",
                "beer_mug"
            ],
            "surrogates": "🍺"
        },
        "beers": {
            "name": "beers",
            "names": [
                "beers"
            ],
            "surrogates": "🍻"
        },
        "champagne_glass": {
            "name": "champagne_glass",
            "names": [
                "champagne_glass",
                "clinking_glass"
            ],
            "surrogates": "🥂"
        },
        "wine_glass": {
            "name": "wine_glass",
            "names": [
                "wine_glass"
            ],
            "surrogates": "🍷"
        },
        "tumbler_glass": {
            "name": "tumbler_glass",
            "names": [
                "tumbler_glass",
                "whisky"
            ],
            "surrogates": "🥃"
        },
        "cocktail": {
            "name": "cocktail",
            "names": [
                "cocktail"
            ],
            "surrogates": "🍸"
        },
        "tropical_drink": {
            "name": "tropical_drink",
            "names": [
                "tropical_drink"
            ],
            "surrogates": "🍹"
        },
        "champagne": {
            "name": "champagne",
            "names": [
                "champagne",
                "bottle_with_popping_cork"
            ],
            "surrogates": "🍾"
        },
        "ice_cube": {
            "name": "ice_cube",
            "names": [
                "ice_cube"
            ],
            "surrogates": "🧊"
        },
        "spoon": {
            "name": "spoon",
            "names": [
                "spoon"
            ],
            "surrogates": "🥄"
        },
        "fork_and_knife": {
            "name": "fork_and_knife",
            "names": [
                "fork_and_knife"
            ],
            "surrogates": "🍴"
        },
        "fork_knife_plate": {
            "name": "fork_knife_plate",
            "names": [
                "fork_knife_plate",
                "fork_and_knife_with_plate"
            ],
            "surrogates": "🍽️"
        },
        "bowl_with_spoon": {
            "name": "bowl_with_spoon",
            "names": [
                "bowl_with_spoon"
            ],
            "surrogates": "🥣"
        },
        "takeout_box": {
            "name": "takeout_box",
            "names": [
                "takeout_box"
            ],
            "surrogates": "🥡"
        },
        "chopsticks": {
            "name": "chopsticks",
            "names": [
                "chopsticks"
            ],
            "surrogates": "🥢"
        },
        "salt": {
            "name": "salt",
            "names": [
                "salt"
            ],
            "surrogates": "🧂"
        }
    },
    "activity": {
        "soccer": {
            "name": "soccer",
            "names": [
                "soccer",
                "soccer_ball",
                "actual_football"
            ],
            "surrogates": "⚽"
        },
        "basketball": {
            "name": "basketball",
            "names": [
                "basketball"
            ],
            "surrogates": "🏀"
        },
        "football": {
            "name": "football",
            "names": [
                "football"
            ],
            "surrogates": "🏈"
        },
        "baseball": {
            "name": "baseball",
            "names": [
                "baseball"
            ],
            "surrogates": "⚾"
        },
        "softball": {
            "name": "softball",
            "names": [
                "softball"
            ],
            "surrogates": "🥎"
        },
        "tennis": {
            "name": "tennis",
            "names": [
                "tennis"
            ],
            "surrogates": "🎾"
        },
        "volleyball": {
            "name": "volleyball",
            "names": [
                "volleyball"
            ],
            "surrogates": "🏐"
        },
        "rugby_football": {
            "name": "rugby_football",
            "names": [
                "rugby_football"
            ],
            "surrogates": "🏉"
        },
        "flying_disc": {
            "name": "flying_disc",
            "names": [
                "flying_disc"
            ],
            "surrogates": "🥏"
        },
        "8ball": {
            "name": "8ball",
            "names": [
                "8ball"
            ],
            "surrogates": "🎱"
        },
        "yo_yo": {
            "name": "yo_yo",
            "names": [
                "yo_yo"
            ],
            "surrogates": "🪀"
        },
        "ping_pong": {
            "name": "ping_pong",
            "names": [
                "ping_pong",
                "table_tennis"
            ],
            "surrogates": "🏓"
        },
        "badminton": {
            "name": "badminton",
            "names": [
                "badminton"
            ],
            "surrogates": "🏸"
        },
        "hockey": {
            "name": "hockey",
            "names": [
                "hockey",
                "ice_hockey"
            ],
            "surrogates": "🏒"
        },
        "field_hockey": {
            "name": "field_hockey",
            "names": [
                "field_hockey"
            ],
            "surrogates": "🏑"
        },
        "lacrosse": {
            "name": "lacrosse",
            "names": [
                "lacrosse"
            ],
            "surrogates": "🥍"
        },
        "cricket_game": {
            "name": "cricket_game",
            "names": [
                "cricket_game",
                "cricket_bat_ball"
            ],
            "surrogates": "🏏"
        },
        "boomerang": {
            "name": "boomerang",
            "names": [
                "boomerang"
            ],
            "surrogates": "🪃"
        },
        "goal": {
            "name": "goal",
            "names": [
                "goal",
                "goal_net"
            ],
            "surrogates": "🥅"
        },
        "golf": {
            "name": "golf",
            "names": [
                "golf",
                "flag_in_hole"
            ],
            "surrogates": "⛳"
        },
        "kite": {
            "name": "kite",
            "names": [
                "kite"
            ],
            "surrogates": "🪁"
        },
        "playground_slide": {
            "name": "playground_slide",
            "names": [
                "playground_slide"
            ],
            "surrogates": "🛝"
        },
        "bow_and_arrow": {
            "name": "bow_and_arrow",
            "names": [
                "bow_and_arrow",
                "archery"
            ],
            "surrogates": "🏹"
        },
        "fishing_pole_and_fish": {
            "name": "fishing_pole_and_fish",
            "names": [
                "fishing_pole_and_fish",
                "fishing_pole"
            ],
            "surrogates": "🎣"
        },
        "diving_mask": {
            "name": "diving_mask",
            "names": [
                "diving_mask"
            ],
            "surrogates": "🤿"
        },
        "boxing_glove": {
            "name": "boxing_glove",
            "names": [
                "boxing_glove",
                "boxing_gloves"
            ],
            "surrogates": "🥊"
        },
        "martial_arts_uniform": {
            "name": "martial_arts_uniform",
            "names": [
                "martial_arts_uniform",
                "karate_uniform"
            ],
            "surrogates": "🥋"
        },
        "running_shirt_with_sash": {
            "name": "running_shirt_with_sash",
            "names": [
                "running_shirt_with_sash",
                "running_shirt"
            ],
            "surrogates": "🎽"
        },
        "skateboard": {
            "name": "skateboard",
            "names": [
                "skateboard"
            ],
            "surrogates": "🛹"
        },
        "roller_skate": {
            "name": "roller_skate",
            "names": [
                "roller_skate"
            ],
            "surrogates": "🛼"
        },
        "sled": {
            "name": "sled",
            "names": [
                "sled"
            ],
            "surrogates": "🛷"
        },
        "ice_skate": {
            "name": "ice_skate",
            "names": [
                "ice_skate"
            ],
            "surrogates": "⛸️"
        },
        "curling_stone": {
            "name": "curling_stone",
            "names": [
                "curling_stone"
            ],
            "surrogates": "🥌"
        },
        "ski": {
            "name": "ski",
            "names": [
                "ski",
                "skis"
            ],
            "surrogates": "🎿"
        },
        "skier": {
            "name": "skier",
            "names": [
                "skier"
            ],
            "surrogates": "⛷️"
        },
        "snowboarder": {
            "name": "snowboarder",
            "names": [
                "snowboarder"
            ],
            "surrogates": "🏂",
            "diversityChildren": {
                "1f3fb": {
                    "name": "snowboarder_tone1",
                    "names": [
                        "snowboarder_tone1",
                        "snowboarder_light_skin_tone"
                    ],
                    "surrogates": "🏂🏻"
                },
                "1f3fc": {
                    "name": "snowboarder_tone2",
                    "names": [
                        "snowboarder_tone2",
                        "snowboarder_medium_light_skin_tone"
                    ],
                    "surrogates": "🏂🏼"
                },
                "1f3fd": {
                    "name": "snowboarder_tone3",
                    "names": [
                        "snowboarder_tone3",
                        "snowboarder_medium_skin_tone"
                    ],
                    "surrogates": "🏂🏽"
                },
                "1f3fe": {
                    "name": "snowboarder_tone4",
                    "names": [
                        "snowboarder_tone4",
                        "snowboarder_medium_dark_skin_tone"
                    ],
                    "surrogates": "🏂🏾"
                },
                "1f3ff": {
                    "name": "snowboarder_tone5",
                    "names": [
                        "snowboarder_tone5",
                        "snowboarder_dark_skin_tone"
                    ],
                    "surrogates": "🏂🏿"
                }
            }
        },
        "parachute": {
            "name": "parachute",
            "names": [
                "parachute"
            ],
            "surrogates": "🪂"
        },
        "person_lifting_weights": {
            "name": "person_lifting_weights",
            "names": [
                "person_lifting_weights",
                "lifter",
                "weight_lifter"
            ],
            "surrogates": "🏋️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_lifting_weights_tone1",
                    "names": [
                        "person_lifting_weights_tone1",
                        "lifter_tone1",
                        "weight_lifter_tone1"
                    ],
                    "surrogates": "🏋🏻"
                },
                "1f3fc": {
                    "name": "person_lifting_weights_tone2",
                    "names": [
                        "person_lifting_weights_tone2",
                        "lifter_tone2",
                        "weight_lifter_tone2"
                    ],
                    "surrogates": "🏋🏼"
                },
                "1f3fd": {
                    "name": "person_lifting_weights_tone3",
                    "names": [
                        "person_lifting_weights_tone3",
                        "lifter_tone3",
                        "weight_lifter_tone3"
                    ],
                    "surrogates": "🏋🏽"
                },
                "1f3fe": {
                    "name": "person_lifting_weights_tone4",
                    "names": [
                        "person_lifting_weights_tone4",
                        "lifter_tone4",
                        "weight_lifter_tone4"
                    ],
                    "surrogates": "🏋🏾"
                },
                "1f3ff": {
                    "name": "person_lifting_weights_tone5",
                    "names": [
                        "person_lifting_weights_tone5",
                        "lifter_tone5",
                        "weight_lifter_tone5"
                    ],
                    "surrogates": "🏋🏿"
                }
            }
        },
        "woman_lifting_weights": {
            "name": "woman_lifting_weights",
            "names": [
                "woman_lifting_weights"
            ],
            "surrogates": "🏋️‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_lifting_weights_tone1",
                    "names": [
                        "woman_lifting_weights_tone1",
                        "woman_lifting_weights_light_skin_tone"
                    ],
                    "surrogates": "🏋🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_lifting_weights_tone2",
                    "names": [
                        "woman_lifting_weights_tone2",
                        "woman_lifting_weights_medium_light_skin_tone"
                    ],
                    "surrogates": "🏋🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_lifting_weights_tone3",
                    "names": [
                        "woman_lifting_weights_tone3",
                        "woman_lifting_weights_medium_skin_tone"
                    ],
                    "surrogates": "🏋🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_lifting_weights_tone4",
                    "names": [
                        "woman_lifting_weights_tone4",
                        "woman_lifting_weights_medium_dark_skin_tone"
                    ],
                    "surrogates": "🏋🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_lifting_weights_tone5",
                    "names": [
                        "woman_lifting_weights_tone5",
                        "woman_lifting_weights_dark_skin_tone"
                    ],
                    "surrogates": "🏋🏿‍♀️"
                }
            }
        },
        "man_lifting_weights": {
            "name": "man_lifting_weights",
            "names": [
                "man_lifting_weights"
            ],
            "surrogates": "🏋️‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_lifting_weights_tone1",
                    "names": [
                        "man_lifting_weights_tone1",
                        "man_lifting_weights_light_skin_tone"
                    ],
                    "surrogates": "🏋🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_lifting_weights_tone2",
                    "names": [
                        "man_lifting_weights_tone2",
                        "man_lifting_weights_medium_light_skin_tone"
                    ],
                    "surrogates": "🏋🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_lifting_weights_tone3",
                    "names": [
                        "man_lifting_weights_tone3",
                        "man_lifting_weights_medium_skin_tone"
                    ],
                    "surrogates": "🏋🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_lifting_weights_tone4",
                    "names": [
                        "man_lifting_weights_tone4",
                        "man_lifting_weights_medium_dark_skin_tone"
                    ],
                    "surrogates": "🏋🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_lifting_weights_tone5",
                    "names": [
                        "man_lifting_weights_tone5",
                        "man_lifting_weights_dark_skin_tone"
                    ],
                    "surrogates": "🏋🏿‍♂️"
                }
            }
        },
        "people_wrestling": {
            "name": "people_wrestling",
            "names": [
                "people_wrestling",
                "wrestlers",
                "wrestling"
            ],
            "surrogates": "🤼"
        },
        "women_wrestling": {
            "name": "women_wrestling",
            "names": [
                "women_wrestling"
            ],
            "surrogates": "🤼‍♀️"
        },
        "men_wrestling": {
            "name": "men_wrestling",
            "names": [
                "men_wrestling"
            ],
            "surrogates": "🤼‍♂️"
        },
        "person_doing_cartwheel": {
            "name": "person_doing_cartwheel",
            "names": [
                "person_doing_cartwheel",
                "cartwheel"
            ],
            "surrogates": "🤸",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_doing_cartwheel_tone1",
                    "names": [
                        "person_doing_cartwheel_tone1",
                        "cartwheel_tone1"
                    ],
                    "surrogates": "🤸🏻"
                },
                "1f3fc": {
                    "name": "person_doing_cartwheel_tone2",
                    "names": [
                        "person_doing_cartwheel_tone2",
                        "cartwheel_tone2"
                    ],
                    "surrogates": "🤸🏼"
                },
                "1f3fd": {
                    "name": "person_doing_cartwheel_tone3",
                    "names": [
                        "person_doing_cartwheel_tone3",
                        "cartwheel_tone3"
                    ],
                    "surrogates": "🤸🏽"
                },
                "1f3fe": {
                    "name": "person_doing_cartwheel_tone4",
                    "names": [
                        "person_doing_cartwheel_tone4",
                        "cartwheel_tone4"
                    ],
                    "surrogates": "🤸🏾"
                },
                "1f3ff": {
                    "name": "person_doing_cartwheel_tone5",
                    "names": [
                        "person_doing_cartwheel_tone5",
                        "cartwheel_tone5"
                    ],
                    "surrogates": "🤸🏿"
                }
            }
        },
        "woman_cartwheeling": {
            "name": "woman_cartwheeling",
            "names": [
                "woman_cartwheeling"
            ],
            "surrogates": "🤸‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_cartwheeling_tone1",
                    "names": [
                        "woman_cartwheeling_tone1",
                        "woman_cartwheeling_light_skin_tone"
                    ],
                    "surrogates": "🤸🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_cartwheeling_tone2",
                    "names": [
                        "woman_cartwheeling_tone2",
                        "woman_cartwheeling_medium_light_skin_tone"
                    ],
                    "surrogates": "🤸🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_cartwheeling_tone3",
                    "names": [
                        "woman_cartwheeling_tone3",
                        "woman_cartwheeling_medium_skin_tone"
                    ],
                    "surrogates": "🤸🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_cartwheeling_tone4",
                    "names": [
                        "woman_cartwheeling_tone4",
                        "woman_cartwheeling_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤸🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_cartwheeling_tone5",
                    "names": [
                        "woman_cartwheeling_tone5",
                        "woman_cartwheeling_dark_skin_tone"
                    ],
                    "surrogates": "🤸🏿‍♀️"
                }
            }
        },
        "man_cartwheeling": {
            "name": "man_cartwheeling",
            "names": [
                "man_cartwheeling"
            ],
            "surrogates": "🤸‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_cartwheeling_tone1",
                    "names": [
                        "man_cartwheeling_tone1",
                        "man_cartwheeling_light_skin_tone"
                    ],
                    "surrogates": "🤸🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_cartwheeling_tone2",
                    "names": [
                        "man_cartwheeling_tone2",
                        "man_cartwheeling_medium_light_skin_tone"
                    ],
                    "surrogates": "🤸🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_cartwheeling_tone3",
                    "names": [
                        "man_cartwheeling_tone3",
                        "man_cartwheeling_medium_skin_tone"
                    ],
                    "surrogates": "🤸🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_cartwheeling_tone4",
                    "names": [
                        "man_cartwheeling_tone4",
                        "man_cartwheeling_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤸🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_cartwheeling_tone5",
                    "names": [
                        "man_cartwheeling_tone5",
                        "man_cartwheeling_dark_skin_tone"
                    ],
                    "surrogates": "🤸🏿‍♂️"
                }
            }
        },
        "person_bouncing_ball": {
            "name": "person_bouncing_ball",
            "names": [
                "person_bouncing_ball",
                "basketball_player",
                "person_with_ball"
            ],
            "surrogates": "⛹️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_bouncing_ball_tone1",
                    "names": [
                        "person_bouncing_ball_tone1",
                        "basketball_player_tone1",
                        "person_with_ball_tone1"
                    ],
                    "surrogates": "⛹🏻"
                },
                "1f3fc": {
                    "name": "person_bouncing_ball_tone2",
                    "names": [
                        "person_bouncing_ball_tone2",
                        "basketball_player_tone2",
                        "person_with_ball_tone2"
                    ],
                    "surrogates": "⛹🏼"
                },
                "1f3fd": {
                    "name": "person_bouncing_ball_tone3",
                    "names": [
                        "person_bouncing_ball_tone3",
                        "basketball_player_tone3",
                        "person_with_ball_tone3"
                    ],
                    "surrogates": "⛹🏽"
                },
                "1f3fe": {
                    "name": "person_bouncing_ball_tone4",
                    "names": [
                        "person_bouncing_ball_tone4",
                        "basketball_player_tone4",
                        "person_with_ball_tone4"
                    ],
                    "surrogates": "⛹🏾"
                },
                "1f3ff": {
                    "name": "person_bouncing_ball_tone5",
                    "names": [
                        "person_bouncing_ball_tone5",
                        "basketball_player_tone5",
                        "person_with_ball_tone5"
                    ],
                    "surrogates": "⛹🏿"
                }
            }
        },
        "woman_bouncing_ball": {
            "name": "woman_bouncing_ball",
            "names": [
                "woman_bouncing_ball"
            ],
            "surrogates": "⛹️‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_bouncing_ball_tone1",
                    "names": [
                        "woman_bouncing_ball_tone1",
                        "woman_bouncing_ball_light_skin_tone"
                    ],
                    "surrogates": "⛹🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_bouncing_ball_tone2",
                    "names": [
                        "woman_bouncing_ball_tone2",
                        "woman_bouncing_ball_medium_light_skin_tone"
                    ],
                    "surrogates": "⛹🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_bouncing_ball_tone3",
                    "names": [
                        "woman_bouncing_ball_tone3",
                        "woman_bouncing_ball_medium_skin_tone"
                    ],
                    "surrogates": "⛹🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_bouncing_ball_tone4",
                    "names": [
                        "woman_bouncing_ball_tone4",
                        "woman_bouncing_ball_medium_dark_skin_tone"
                    ],
                    "surrogates": "⛹🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_bouncing_ball_tone5",
                    "names": [
                        "woman_bouncing_ball_tone5",
                        "woman_bouncing_ball_dark_skin_tone"
                    ],
                    "surrogates": "⛹🏿‍♀️"
                }
            }
        },
        "man_bouncing_ball": {
            "name": "man_bouncing_ball",
            "names": [
                "man_bouncing_ball"
            ],
            "surrogates": "⛹️‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_bouncing_ball_tone1",
                    "names": [
                        "man_bouncing_ball_tone1",
                        "man_bouncing_ball_light_skin_tone"
                    ],
                    "surrogates": "⛹🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_bouncing_ball_tone2",
                    "names": [
                        "man_bouncing_ball_tone2",
                        "man_bouncing_ball_medium_light_skin_tone"
                    ],
                    "surrogates": "⛹🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_bouncing_ball_tone3",
                    "names": [
                        "man_bouncing_ball_tone3",
                        "man_bouncing_ball_medium_skin_tone"
                    ],
                    "surrogates": "⛹🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_bouncing_ball_tone4",
                    "names": [
                        "man_bouncing_ball_tone4",
                        "man_bouncing_ball_medium_dark_skin_tone"
                    ],
                    "surrogates": "⛹🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_bouncing_ball_tone5",
                    "names": [
                        "man_bouncing_ball_tone5",
                        "man_bouncing_ball_dark_skin_tone"
                    ],
                    "surrogates": "⛹🏿‍♂️"
                }
            }
        },
        "person_fencing": {
            "name": "person_fencing",
            "names": [
                "person_fencing",
                "fencer",
                "fencing"
            ],
            "surrogates": "🤺"
        },
        "person_playing_handball": {
            "name": "person_playing_handball",
            "names": [
                "person_playing_handball",
                "handball"
            ],
            "surrogates": "🤾",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_playing_handball_tone1",
                    "names": [
                        "person_playing_handball_tone1",
                        "handball_tone1"
                    ],
                    "surrogates": "🤾🏻"
                },
                "1f3fc": {
                    "name": "person_playing_handball_tone2",
                    "names": [
                        "person_playing_handball_tone2",
                        "handball_tone2"
                    ],
                    "surrogates": "🤾🏼"
                },
                "1f3fd": {
                    "name": "person_playing_handball_tone3",
                    "names": [
                        "person_playing_handball_tone3",
                        "handball_tone3"
                    ],
                    "surrogates": "🤾🏽"
                },
                "1f3fe": {
                    "name": "person_playing_handball_tone4",
                    "names": [
                        "person_playing_handball_tone4",
                        "handball_tone4"
                    ],
                    "surrogates": "🤾🏾"
                },
                "1f3ff": {
                    "name": "person_playing_handball_tone5",
                    "names": [
                        "person_playing_handball_tone5",
                        "handball_tone5"
                    ],
                    "surrogates": "🤾🏿"
                }
            }
        },
        "woman_playing_handball": {
            "name": "woman_playing_handball",
            "names": [
                "woman_playing_handball"
            ],
            "surrogates": "🤾‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_playing_handball_tone1",
                    "names": [
                        "woman_playing_handball_tone1",
                        "woman_playing_handball_light_skin_tone"
                    ],
                    "surrogates": "🤾🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_playing_handball_tone2",
                    "names": [
                        "woman_playing_handball_tone2",
                        "woman_playing_handball_medium_light_skin_tone"
                    ],
                    "surrogates": "🤾🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_playing_handball_tone3",
                    "names": [
                        "woman_playing_handball_tone3",
                        "woman_playing_handball_medium_skin_tone"
                    ],
                    "surrogates": "🤾🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_playing_handball_tone4",
                    "names": [
                        "woman_playing_handball_tone4",
                        "woman_playing_handball_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤾🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_playing_handball_tone5",
                    "names": [
                        "woman_playing_handball_tone5",
                        "woman_playing_handball_dark_skin_tone"
                    ],
                    "surrogates": "🤾🏿‍♀️"
                }
            }
        },
        "man_playing_handball": {
            "name": "man_playing_handball",
            "names": [
                "man_playing_handball"
            ],
            "surrogates": "🤾‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_playing_handball_tone1",
                    "names": [
                        "man_playing_handball_tone1",
                        "man_playing_handball_light_skin_tone"
                    ],
                    "surrogates": "🤾🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_playing_handball_tone2",
                    "names": [
                        "man_playing_handball_tone2",
                        "man_playing_handball_medium_light_skin_tone"
                    ],
                    "surrogates": "🤾🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_playing_handball_tone3",
                    "names": [
                        "man_playing_handball_tone3",
                        "man_playing_handball_medium_skin_tone"
                    ],
                    "surrogates": "🤾🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_playing_handball_tone4",
                    "names": [
                        "man_playing_handball_tone4",
                        "man_playing_handball_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤾🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_playing_handball_tone5",
                    "names": [
                        "man_playing_handball_tone5",
                        "man_playing_handball_dark_skin_tone"
                    ],
                    "surrogates": "🤾🏿‍♂️"
                }
            }
        },
        "person_golfing": {
            "name": "person_golfing",
            "names": [
                "person_golfing",
                "golfer"
            ],
            "surrogates": "🏌️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_golfing_tone1",
                    "names": [
                        "person_golfing_tone1",
                        "person_golfing_light_skin_tone"
                    ],
                    "surrogates": "🏌🏻"
                },
                "1f3fc": {
                    "name": "person_golfing_tone2",
                    "names": [
                        "person_golfing_tone2",
                        "person_golfing_medium_light_skin_tone"
                    ],
                    "surrogates": "🏌🏼"
                },
                "1f3fd": {
                    "name": "person_golfing_tone3",
                    "names": [
                        "person_golfing_tone3",
                        "person_golfing_medium_skin_tone"
                    ],
                    "surrogates": "🏌🏽"
                },
                "1f3fe": {
                    "name": "person_golfing_tone4",
                    "names": [
                        "person_golfing_tone4",
                        "person_golfing_medium_dark_skin_tone"
                    ],
                    "surrogates": "🏌🏾"
                },
                "1f3ff": {
                    "name": "person_golfing_tone5",
                    "names": [
                        "person_golfing_tone5",
                        "person_golfing_dark_skin_tone"
                    ],
                    "surrogates": "🏌🏿"
                }
            }
        },
        "woman_golfing": {
            "name": "woman_golfing",
            "names": [
                "woman_golfing"
            ],
            "surrogates": "🏌️‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_golfing_tone1",
                    "names": [
                        "woman_golfing_tone1",
                        "woman_golfing_light_skin_tone"
                    ],
                    "surrogates": "🏌🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_golfing_tone2",
                    "names": [
                        "woman_golfing_tone2",
                        "woman_golfing_medium_light_skin_tone"
                    ],
                    "surrogates": "🏌🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_golfing_tone3",
                    "names": [
                        "woman_golfing_tone3",
                        "woman_golfing_medium_skin_tone"
                    ],
                    "surrogates": "🏌🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_golfing_tone4",
                    "names": [
                        "woman_golfing_tone4",
                        "woman_golfing_medium_dark_skin_tone"
                    ],
                    "surrogates": "🏌🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_golfing_tone5",
                    "names": [
                        "woman_golfing_tone5",
                        "woman_golfing_dark_skin_tone"
                    ],
                    "surrogates": "🏌🏿‍♀️"
                }
            }
        },
        "man_golfing": {
            "name": "man_golfing",
            "names": [
                "man_golfing"
            ],
            "surrogates": "🏌️‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_golfing_tone1",
                    "names": [
                        "man_golfing_tone1",
                        "man_golfing_light_skin_tone"
                    ],
                    "surrogates": "🏌🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_golfing_tone2",
                    "names": [
                        "man_golfing_tone2",
                        "man_golfing_medium_light_skin_tone"
                    ],
                    "surrogates": "🏌🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_golfing_tone3",
                    "names": [
                        "man_golfing_tone3",
                        "man_golfing_medium_skin_tone"
                    ],
                    "surrogates": "🏌🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_golfing_tone4",
                    "names": [
                        "man_golfing_tone4",
                        "man_golfing_medium_dark_skin_tone"
                    ],
                    "surrogates": "🏌🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_golfing_tone5",
                    "names": [
                        "man_golfing_tone5",
                        "man_golfing_dark_skin_tone"
                    ],
                    "surrogates": "🏌🏿‍♂️"
                }
            }
        },
        "horse_racing": {
            "name": "horse_racing",
            "names": [
                "horse_racing"
            ],
            "surrogates": "🏇",
            "diversityChildren": {
                "1f3fb": {
                    "name": "horse_racing_tone1",
                    "names": [
                        "horse_racing_tone1"
                    ],
                    "surrogates": "🏇🏻"
                },
                "1f3fc": {
                    "name": "horse_racing_tone2",
                    "names": [
                        "horse_racing_tone2"
                    ],
                    "surrogates": "🏇🏼"
                },
                "1f3fd": {
                    "name": "horse_racing_tone3",
                    "names": [
                        "horse_racing_tone3"
                    ],
                    "surrogates": "🏇🏽"
                },
                "1f3fe": {
                    "name": "horse_racing_tone4",
                    "names": [
                        "horse_racing_tone4"
                    ],
                    "surrogates": "🏇🏾"
                },
                "1f3ff": {
                    "name": "horse_racing_tone5",
                    "names": [
                        "horse_racing_tone5"
                    ],
                    "surrogates": "🏇🏿"
                }
            }
        },
        "person_in_lotus_position": {
            "name": "person_in_lotus_position",
            "names": [
                "person_in_lotus_position"
            ],
            "surrogates": "🧘",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_in_lotus_position_tone1",
                    "names": [
                        "person_in_lotus_position_tone1",
                        "person_in_lotus_position_light_skin_tone"
                    ],
                    "surrogates": "🧘🏻"
                },
                "1f3fc": {
                    "name": "person_in_lotus_position_tone2",
                    "names": [
                        "person_in_lotus_position_tone2",
                        "person_in_lotus_position_medium_light_skin_tone"
                    ],
                    "surrogates": "🧘🏼"
                },
                "1f3fd": {
                    "name": "person_in_lotus_position_tone3",
                    "names": [
                        "person_in_lotus_position_tone3",
                        "person_in_lotus_position_medium_skin_tone"
                    ],
                    "surrogates": "🧘🏽"
                },
                "1f3fe": {
                    "name": "person_in_lotus_position_tone4",
                    "names": [
                        "person_in_lotus_position_tone4",
                        "person_in_lotus_position_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧘🏾"
                },
                "1f3ff": {
                    "name": "person_in_lotus_position_tone5",
                    "names": [
                        "person_in_lotus_position_tone5",
                        "person_in_lotus_position_dark_skin_tone"
                    ],
                    "surrogates": "🧘🏿"
                }
            }
        },
        "woman_in_lotus_position": {
            "name": "woman_in_lotus_position",
            "names": [
                "woman_in_lotus_position"
            ],
            "surrogates": "🧘‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_in_lotus_position_tone1",
                    "names": [
                        "woman_in_lotus_position_tone1",
                        "woman_in_lotus_position_light_skin_tone"
                    ],
                    "surrogates": "🧘🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_in_lotus_position_tone2",
                    "names": [
                        "woman_in_lotus_position_tone2",
                        "woman_in_lotus_position_medium_light_skin_tone"
                    ],
                    "surrogates": "🧘🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_in_lotus_position_tone3",
                    "names": [
                        "woman_in_lotus_position_tone3",
                        "woman_in_lotus_position_medium_skin_tone"
                    ],
                    "surrogates": "🧘🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_in_lotus_position_tone4",
                    "names": [
                        "woman_in_lotus_position_tone4",
                        "woman_in_lotus_position_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧘🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_in_lotus_position_tone5",
                    "names": [
                        "woman_in_lotus_position_tone5",
                        "woman_in_lotus_position_dark_skin_tone"
                    ],
                    "surrogates": "🧘🏿‍♀️"
                }
            }
        },
        "man_in_lotus_position": {
            "name": "man_in_lotus_position",
            "names": [
                "man_in_lotus_position"
            ],
            "surrogates": "🧘‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_in_lotus_position_tone1",
                    "names": [
                        "man_in_lotus_position_tone1",
                        "man_in_lotus_position_light_skin_tone"
                    ],
                    "surrogates": "🧘🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_in_lotus_position_tone2",
                    "names": [
                        "man_in_lotus_position_tone2",
                        "man_in_lotus_position_medium_light_skin_tone"
                    ],
                    "surrogates": "🧘🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_in_lotus_position_tone3",
                    "names": [
                        "man_in_lotus_position_tone3",
                        "man_in_lotus_position_medium_skin_tone"
                    ],
                    "surrogates": "🧘🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_in_lotus_position_tone4",
                    "names": [
                        "man_in_lotus_position_tone4",
                        "man_in_lotus_position_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧘🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_in_lotus_position_tone5",
                    "names": [
                        "man_in_lotus_position_tone5",
                        "man_in_lotus_position_dark_skin_tone"
                    ],
                    "surrogates": "🧘🏿‍♂️"
                }
            }
        },
        "person_surfing": {
            "name": "person_surfing",
            "names": [
                "person_surfing",
                "surfer"
            ],
            "surrogates": "🏄",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_surfing_tone1",
                    "names": [
                        "person_surfing_tone1",
                        "surfer_tone1"
                    ],
                    "surrogates": "🏄🏻"
                },
                "1f3fc": {
                    "name": "person_surfing_tone2",
                    "names": [
                        "person_surfing_tone2",
                        "surfer_tone2"
                    ],
                    "surrogates": "🏄🏼"
                },
                "1f3fd": {
                    "name": "person_surfing_tone3",
                    "names": [
                        "person_surfing_tone3",
                        "surfer_tone3"
                    ],
                    "surrogates": "🏄🏽"
                },
                "1f3fe": {
                    "name": "person_surfing_tone4",
                    "names": [
                        "person_surfing_tone4",
                        "surfer_tone4"
                    ],
                    "surrogates": "🏄🏾"
                },
                "1f3ff": {
                    "name": "person_surfing_tone5",
                    "names": [
                        "person_surfing_tone5",
                        "surfer_tone5"
                    ],
                    "surrogates": "🏄🏿"
                }
            }
        },
        "woman_surfing": {
            "name": "woman_surfing",
            "names": [
                "woman_surfing"
            ],
            "surrogates": "🏄‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_surfing_tone1",
                    "names": [
                        "woman_surfing_tone1",
                        "woman_surfing_light_skin_tone"
                    ],
                    "surrogates": "🏄🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_surfing_tone2",
                    "names": [
                        "woman_surfing_tone2",
                        "woman_surfing_medium_light_skin_tone"
                    ],
                    "surrogates": "🏄🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_surfing_tone3",
                    "names": [
                        "woman_surfing_tone3",
                        "woman_surfing_medium_skin_tone"
                    ],
                    "surrogates": "🏄🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_surfing_tone4",
                    "names": [
                        "woman_surfing_tone4",
                        "woman_surfing_medium_dark_skin_tone"
                    ],
                    "surrogates": "🏄🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_surfing_tone5",
                    "names": [
                        "woman_surfing_tone5",
                        "woman_surfing_dark_skin_tone"
                    ],
                    "surrogates": "🏄🏿‍♀️"
                }
            }
        },
        "man_surfing": {
            "name": "man_surfing",
            "names": [
                "man_surfing"
            ],
            "surrogates": "🏄‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_surfing_tone1",
                    "names": [
                        "man_surfing_tone1",
                        "man_surfing_light_skin_tone"
                    ],
                    "surrogates": "🏄🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_surfing_tone2",
                    "names": [
                        "man_surfing_tone2",
                        "man_surfing_medium_light_skin_tone"
                    ],
                    "surrogates": "🏄🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_surfing_tone3",
                    "names": [
                        "man_surfing_tone3",
                        "man_surfing_medium_skin_tone"
                    ],
                    "surrogates": "🏄🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_surfing_tone4",
                    "names": [
                        "man_surfing_tone4",
                        "man_surfing_medium_dark_skin_tone"
                    ],
                    "surrogates": "🏄🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_surfing_tone5",
                    "names": [
                        "man_surfing_tone5",
                        "man_surfing_dark_skin_tone"
                    ],
                    "surrogates": "🏄🏿‍♂️"
                }
            }
        },
        "person_swimming": {
            "name": "person_swimming",
            "names": [
                "person_swimming",
                "swimmer"
            ],
            "surrogates": "🏊",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_swimming_tone1",
                    "names": [
                        "person_swimming_tone1",
                        "swimmer_tone1"
                    ],
                    "surrogates": "🏊🏻"
                },
                "1f3fc": {
                    "name": "person_swimming_tone2",
                    "names": [
                        "person_swimming_tone2",
                        "swimmer_tone2"
                    ],
                    "surrogates": "🏊🏼"
                },
                "1f3fd": {
                    "name": "person_swimming_tone3",
                    "names": [
                        "person_swimming_tone3",
                        "swimmer_tone3"
                    ],
                    "surrogates": "🏊🏽"
                },
                "1f3fe": {
                    "name": "person_swimming_tone4",
                    "names": [
                        "person_swimming_tone4",
                        "swimmer_tone4"
                    ],
                    "surrogates": "🏊🏾"
                },
                "1f3ff": {
                    "name": "person_swimming_tone5",
                    "names": [
                        "person_swimming_tone5",
                        "swimmer_tone5"
                    ],
                    "surrogates": "🏊🏿"
                }
            }
        },
        "woman_swimming": {
            "name": "woman_swimming",
            "names": [
                "woman_swimming"
            ],
            "surrogates": "🏊‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_swimming_tone1",
                    "names": [
                        "woman_swimming_tone1",
                        "woman_swimming_light_skin_tone"
                    ],
                    "surrogates": "🏊🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_swimming_tone2",
                    "names": [
                        "woman_swimming_tone2",
                        "woman_swimming_medium_light_skin_tone"
                    ],
                    "surrogates": "🏊🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_swimming_tone3",
                    "names": [
                        "woman_swimming_tone3",
                        "woman_swimming_medium_skin_tone"
                    ],
                    "surrogates": "🏊🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_swimming_tone4",
                    "names": [
                        "woman_swimming_tone4",
                        "woman_swimming_medium_dark_skin_tone"
                    ],
                    "surrogates": "🏊🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_swimming_tone5",
                    "names": [
                        "woman_swimming_tone5",
                        "woman_swimming_dark_skin_tone"
                    ],
                    "surrogates": "🏊🏿‍♀️"
                }
            }
        },
        "man_swimming": {
            "name": "man_swimming",
            "names": [
                "man_swimming"
            ],
            "surrogates": "🏊‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_swimming_tone1",
                    "names": [
                        "man_swimming_tone1",
                        "man_swimming_light_skin_tone"
                    ],
                    "surrogates": "🏊🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_swimming_tone2",
                    "names": [
                        "man_swimming_tone2",
                        "man_swimming_medium_light_skin_tone"
                    ],
                    "surrogates": "🏊🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_swimming_tone3",
                    "names": [
                        "man_swimming_tone3",
                        "man_swimming_medium_skin_tone"
                    ],
                    "surrogates": "🏊🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_swimming_tone4",
                    "names": [
                        "man_swimming_tone4",
                        "man_swimming_medium_dark_skin_tone"
                    ],
                    "surrogates": "🏊🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_swimming_tone5",
                    "names": [
                        "man_swimming_tone5",
                        "man_swimming_dark_skin_tone"
                    ],
                    "surrogates": "🏊🏿‍♂️"
                }
            }
        },
        "person_playing_water_polo": {
            "name": "person_playing_water_polo",
            "names": [
                "person_playing_water_polo",
                "water_polo"
            ],
            "surrogates": "🤽",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_playing_water_polo_tone1",
                    "names": [
                        "person_playing_water_polo_tone1",
                        "water_polo_tone1"
                    ],
                    "surrogates": "🤽🏻"
                },
                "1f3fc": {
                    "name": "person_playing_water_polo_tone2",
                    "names": [
                        "person_playing_water_polo_tone2",
                        "water_polo_tone2"
                    ],
                    "surrogates": "🤽🏼"
                },
                "1f3fd": {
                    "name": "person_playing_water_polo_tone3",
                    "names": [
                        "person_playing_water_polo_tone3",
                        "water_polo_tone3"
                    ],
                    "surrogates": "🤽🏽"
                },
                "1f3fe": {
                    "name": "person_playing_water_polo_tone4",
                    "names": [
                        "person_playing_water_polo_tone4",
                        "water_polo_tone4"
                    ],
                    "surrogates": "🤽🏾"
                },
                "1f3ff": {
                    "name": "person_playing_water_polo_tone5",
                    "names": [
                        "person_playing_water_polo_tone5",
                        "water_polo_tone5"
                    ],
                    "surrogates": "🤽🏿"
                }
            }
        },
        "woman_playing_water_polo": {
            "name": "woman_playing_water_polo",
            "names": [
                "woman_playing_water_polo"
            ],
            "surrogates": "🤽‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_playing_water_polo_tone1",
                    "names": [
                        "woman_playing_water_polo_tone1",
                        "woman_playing_water_polo_light_skin_tone"
                    ],
                    "surrogates": "🤽🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_playing_water_polo_tone2",
                    "names": [
                        "woman_playing_water_polo_tone2",
                        "woman_playing_water_polo_medium_light_skin_tone"
                    ],
                    "surrogates": "🤽🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_playing_water_polo_tone3",
                    "names": [
                        "woman_playing_water_polo_tone3",
                        "woman_playing_water_polo_medium_skin_tone"
                    ],
                    "surrogates": "🤽🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_playing_water_polo_tone4",
                    "names": [
                        "woman_playing_water_polo_tone4",
                        "woman_playing_water_polo_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤽🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_playing_water_polo_tone5",
                    "names": [
                        "woman_playing_water_polo_tone5",
                        "woman_playing_water_polo_dark_skin_tone"
                    ],
                    "surrogates": "🤽🏿‍♀️"
                }
            }
        },
        "man_playing_water_polo": {
            "name": "man_playing_water_polo",
            "names": [
                "man_playing_water_polo"
            ],
            "surrogates": "🤽‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_playing_water_polo_tone1",
                    "names": [
                        "man_playing_water_polo_tone1",
                        "man_playing_water_polo_light_skin_tone"
                    ],
                    "surrogates": "🤽🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_playing_water_polo_tone2",
                    "names": [
                        "man_playing_water_polo_tone2",
                        "man_playing_water_polo_medium_light_skin_tone"
                    ],
                    "surrogates": "🤽🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_playing_water_polo_tone3",
                    "names": [
                        "man_playing_water_polo_tone3",
                        "man_playing_water_polo_medium_skin_tone"
                    ],
                    "surrogates": "🤽🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_playing_water_polo_tone4",
                    "names": [
                        "man_playing_water_polo_tone4",
                        "man_playing_water_polo_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤽🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_playing_water_polo_tone5",
                    "names": [
                        "man_playing_water_polo_tone5",
                        "man_playing_water_polo_dark_skin_tone"
                    ],
                    "surrogates": "🤽🏿‍♂️"
                }
            }
        },
        "person_rowing_boat": {
            "name": "person_rowing_boat",
            "names": [
                "person_rowing_boat",
                "rowboat"
            ],
            "surrogates": "🚣",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_rowing_boat_tone1",
                    "names": [
                        "person_rowing_boat_tone1",
                        "rowboat_tone1"
                    ],
                    "surrogates": "🚣🏻"
                },
                "1f3fc": {
                    "name": "person_rowing_boat_tone2",
                    "names": [
                        "person_rowing_boat_tone2",
                        "rowboat_tone2"
                    ],
                    "surrogates": "🚣🏼"
                },
                "1f3fd": {
                    "name": "person_rowing_boat_tone3",
                    "names": [
                        "person_rowing_boat_tone3",
                        "rowboat_tone3"
                    ],
                    "surrogates": "🚣🏽"
                },
                "1f3fe": {
                    "name": "person_rowing_boat_tone4",
                    "names": [
                        "person_rowing_boat_tone4",
                        "rowboat_tone4"
                    ],
                    "surrogates": "🚣🏾"
                },
                "1f3ff": {
                    "name": "person_rowing_boat_tone5",
                    "names": [
                        "person_rowing_boat_tone5",
                        "rowboat_tone5"
                    ],
                    "surrogates": "🚣🏿"
                }
            }
        },
        "woman_rowing_boat": {
            "name": "woman_rowing_boat",
            "names": [
                "woman_rowing_boat"
            ],
            "surrogates": "🚣‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_rowing_boat_tone1",
                    "names": [
                        "woman_rowing_boat_tone1",
                        "woman_rowing_boat_light_skin_tone"
                    ],
                    "surrogates": "🚣🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_rowing_boat_tone2",
                    "names": [
                        "woman_rowing_boat_tone2",
                        "woman_rowing_boat_medium_light_skin_tone"
                    ],
                    "surrogates": "🚣🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_rowing_boat_tone3",
                    "names": [
                        "woman_rowing_boat_tone3",
                        "woman_rowing_boat_medium_skin_tone"
                    ],
                    "surrogates": "🚣🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_rowing_boat_tone4",
                    "names": [
                        "woman_rowing_boat_tone4",
                        "woman_rowing_boat_medium_dark_skin_tone"
                    ],
                    "surrogates": "🚣🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_rowing_boat_tone5",
                    "names": [
                        "woman_rowing_boat_tone5",
                        "woman_rowing_boat_dark_skin_tone"
                    ],
                    "surrogates": "🚣🏿‍♀️"
                }
            }
        },
        "man_rowing_boat": {
            "name": "man_rowing_boat",
            "names": [
                "man_rowing_boat"
            ],
            "surrogates": "🚣‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_rowing_boat_tone1",
                    "names": [
                        "man_rowing_boat_tone1",
                        "man_rowing_boat_light_skin_tone"
                    ],
                    "surrogates": "🚣🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_rowing_boat_tone2",
                    "names": [
                        "man_rowing_boat_tone2",
                        "man_rowing_boat_medium_light_skin_tone"
                    ],
                    "surrogates": "🚣🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_rowing_boat_tone3",
                    "names": [
                        "man_rowing_boat_tone3",
                        "man_rowing_boat_medium_skin_tone"
                    ],
                    "surrogates": "🚣🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_rowing_boat_tone4",
                    "names": [
                        "man_rowing_boat_tone4",
                        "man_rowing_boat_medium_dark_skin_tone"
                    ],
                    "surrogates": "🚣🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_rowing_boat_tone5",
                    "names": [
                        "man_rowing_boat_tone5",
                        "man_rowing_boat_dark_skin_tone"
                    ],
                    "surrogates": "🚣🏿‍♂️"
                }
            }
        },
        "person_climbing": {
            "name": "person_climbing",
            "names": [
                "person_climbing"
            ],
            "surrogates": "🧗",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_climbing_tone1",
                    "names": [
                        "person_climbing_tone1",
                        "person_climbing_light_skin_tone"
                    ],
                    "surrogates": "🧗🏻"
                },
                "1f3fc": {
                    "name": "person_climbing_tone2",
                    "names": [
                        "person_climbing_tone2",
                        "person_climbing_medium_light_skin_tone"
                    ],
                    "surrogates": "🧗🏼"
                },
                "1f3fd": {
                    "name": "person_climbing_tone3",
                    "names": [
                        "person_climbing_tone3",
                        "person_climbing_medium_skin_tone"
                    ],
                    "surrogates": "🧗🏽"
                },
                "1f3fe": {
                    "name": "person_climbing_tone4",
                    "names": [
                        "person_climbing_tone4",
                        "person_climbing_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧗🏾"
                },
                "1f3ff": {
                    "name": "person_climbing_tone5",
                    "names": [
                        "person_climbing_tone5",
                        "person_climbing_dark_skin_tone"
                    ],
                    "surrogates": "🧗🏿"
                }
            }
        },
        "woman_climbing": {
            "name": "woman_climbing",
            "names": [
                "woman_climbing"
            ],
            "surrogates": "🧗‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_climbing_tone1",
                    "names": [
                        "woman_climbing_tone1",
                        "woman_climbing_light_skin_tone"
                    ],
                    "surrogates": "🧗🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_climbing_tone2",
                    "names": [
                        "woman_climbing_tone2",
                        "woman_climbing_medium_light_skin_tone"
                    ],
                    "surrogates": "🧗🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_climbing_tone3",
                    "names": [
                        "woman_climbing_tone3",
                        "woman_climbing_medium_skin_tone"
                    ],
                    "surrogates": "🧗🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_climbing_tone4",
                    "names": [
                        "woman_climbing_tone4",
                        "woman_climbing_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧗🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_climbing_tone5",
                    "names": [
                        "woman_climbing_tone5",
                        "woman_climbing_dark_skin_tone"
                    ],
                    "surrogates": "🧗🏿‍♀️"
                }
            }
        },
        "man_climbing": {
            "name": "man_climbing",
            "names": [
                "man_climbing"
            ],
            "surrogates": "🧗‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_climbing_tone1",
                    "names": [
                        "man_climbing_tone1",
                        "man_climbing_light_skin_tone"
                    ],
                    "surrogates": "🧗🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_climbing_tone2",
                    "names": [
                        "man_climbing_tone2",
                        "man_climbing_medium_light_skin_tone"
                    ],
                    "surrogates": "🧗🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_climbing_tone3",
                    "names": [
                        "man_climbing_tone3",
                        "man_climbing_medium_skin_tone"
                    ],
                    "surrogates": "🧗🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_climbing_tone4",
                    "names": [
                        "man_climbing_tone4",
                        "man_climbing_medium_dark_skin_tone"
                    ],
                    "surrogates": "🧗🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_climbing_tone5",
                    "names": [
                        "man_climbing_tone5",
                        "man_climbing_dark_skin_tone"
                    ],
                    "surrogates": "🧗🏿‍♂️"
                }
            }
        },
        "person_mountain_biking": {
            "name": "person_mountain_biking",
            "names": [
                "person_mountain_biking",
                "mountain_bicyclist"
            ],
            "surrogates": "🚵",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_mountain_biking_tone1",
                    "names": [
                        "person_mountain_biking_tone1",
                        "mountain_bicyclist_tone1"
                    ],
                    "surrogates": "🚵🏻"
                },
                "1f3fc": {
                    "name": "person_mountain_biking_tone2",
                    "names": [
                        "person_mountain_biking_tone2",
                        "mountain_bicyclist_tone2"
                    ],
                    "surrogates": "🚵🏼"
                },
                "1f3fd": {
                    "name": "person_mountain_biking_tone3",
                    "names": [
                        "person_mountain_biking_tone3",
                        "mountain_bicyclist_tone3"
                    ],
                    "surrogates": "🚵🏽"
                },
                "1f3fe": {
                    "name": "person_mountain_biking_tone4",
                    "names": [
                        "person_mountain_biking_tone4",
                        "mountain_bicyclist_tone4"
                    ],
                    "surrogates": "🚵🏾"
                },
                "1f3ff": {
                    "name": "person_mountain_biking_tone5",
                    "names": [
                        "person_mountain_biking_tone5",
                        "mountain_bicyclist_tone5"
                    ],
                    "surrogates": "🚵🏿"
                }
            }
        },
        "woman_mountain_biking": {
            "name": "woman_mountain_biking",
            "names": [
                "woman_mountain_biking"
            ],
            "surrogates": "🚵‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_mountain_biking_tone1",
                    "names": [
                        "woman_mountain_biking_tone1",
                        "woman_mountain_biking_light_skin_tone"
                    ],
                    "surrogates": "🚵🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_mountain_biking_tone2",
                    "names": [
                        "woman_mountain_biking_tone2",
                        "woman_mountain_biking_medium_light_skin_tone"
                    ],
                    "surrogates": "🚵🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_mountain_biking_tone3",
                    "names": [
                        "woman_mountain_biking_tone3",
                        "woman_mountain_biking_medium_skin_tone"
                    ],
                    "surrogates": "🚵🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_mountain_biking_tone4",
                    "names": [
                        "woman_mountain_biking_tone4",
                        "woman_mountain_biking_medium_dark_skin_tone"
                    ],
                    "surrogates": "🚵🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_mountain_biking_tone5",
                    "names": [
                        "woman_mountain_biking_tone5",
                        "woman_mountain_biking_dark_skin_tone"
                    ],
                    "surrogates": "🚵🏿‍♀️"
                }
            }
        },
        "man_mountain_biking": {
            "name": "man_mountain_biking",
            "names": [
                "man_mountain_biking"
            ],
            "surrogates": "🚵‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_mountain_biking_tone1",
                    "names": [
                        "man_mountain_biking_tone1",
                        "man_mountain_biking_light_skin_tone"
                    ],
                    "surrogates": "🚵🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_mountain_biking_tone2",
                    "names": [
                        "man_mountain_biking_tone2",
                        "man_mountain_biking_medium_light_skin_tone"
                    ],
                    "surrogates": "🚵🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_mountain_biking_tone3",
                    "names": [
                        "man_mountain_biking_tone3",
                        "man_mountain_biking_medium_skin_tone"
                    ],
                    "surrogates": "🚵🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_mountain_biking_tone4",
                    "names": [
                        "man_mountain_biking_tone4",
                        "man_mountain_biking_medium_dark_skin_tone"
                    ],
                    "surrogates": "🚵🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_mountain_biking_tone5",
                    "names": [
                        "man_mountain_biking_tone5",
                        "man_mountain_biking_dark_skin_tone"
                    ],
                    "surrogates": "🚵🏿‍♂️"
                }
            }
        },
        "person_biking": {
            "name": "person_biking",
            "names": [
                "person_biking",
                "bicyclist"
            ],
            "surrogates": "🚴",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_biking_tone1",
                    "names": [
                        "person_biking_tone1",
                        "bicyclist_tone1"
                    ],
                    "surrogates": "🚴🏻"
                },
                "1f3fc": {
                    "name": "person_biking_tone2",
                    "names": [
                        "person_biking_tone2",
                        "bicyclist_tone2"
                    ],
                    "surrogates": "🚴🏼"
                },
                "1f3fd": {
                    "name": "person_biking_tone3",
                    "names": [
                        "person_biking_tone3",
                        "bicyclist_tone3"
                    ],
                    "surrogates": "🚴🏽"
                },
                "1f3fe": {
                    "name": "person_biking_tone4",
                    "names": [
                        "person_biking_tone4",
                        "bicyclist_tone4"
                    ],
                    "surrogates": "🚴🏾"
                },
                "1f3ff": {
                    "name": "person_biking_tone5",
                    "names": [
                        "person_biking_tone5",
                        "bicyclist_tone5"
                    ],
                    "surrogates": "🚴🏿"
                }
            }
        },
        "woman_biking": {
            "name": "woman_biking",
            "names": [
                "woman_biking"
            ],
            "surrogates": "🚴‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_biking_tone1",
                    "names": [
                        "woman_biking_tone1",
                        "woman_biking_light_skin_tone"
                    ],
                    "surrogates": "🚴🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_biking_tone2",
                    "names": [
                        "woman_biking_tone2",
                        "woman_biking_medium_light_skin_tone"
                    ],
                    "surrogates": "🚴🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_biking_tone3",
                    "names": [
                        "woman_biking_tone3",
                        "woman_biking_medium_skin_tone"
                    ],
                    "surrogates": "🚴🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_biking_tone4",
                    "names": [
                        "woman_biking_tone4",
                        "woman_biking_medium_dark_skin_tone"
                    ],
                    "surrogates": "🚴🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_biking_tone5",
                    "names": [
                        "woman_biking_tone5",
                        "woman_biking_dark_skin_tone"
                    ],
                    "surrogates": "🚴🏿‍♀️"
                }
            }
        },
        "man_biking": {
            "name": "man_biking",
            "names": [
                "man_biking"
            ],
            "surrogates": "🚴‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_biking_tone1",
                    "names": [
                        "man_biking_tone1",
                        "man_biking_light_skin_tone"
                    ],
                    "surrogates": "🚴🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_biking_tone2",
                    "names": [
                        "man_biking_tone2",
                        "man_biking_medium_light_skin_tone"
                    ],
                    "surrogates": "🚴🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_biking_tone3",
                    "names": [
                        "man_biking_tone3",
                        "man_biking_medium_skin_tone"
                    ],
                    "surrogates": "🚴🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_biking_tone4",
                    "names": [
                        "man_biking_tone4",
                        "man_biking_medium_dark_skin_tone"
                    ],
                    "surrogates": "🚴🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_biking_tone5",
                    "names": [
                        "man_biking_tone5",
                        "man_biking_dark_skin_tone"
                    ],
                    "surrogates": "🚴🏿‍♂️"
                }
            }
        },
        "trophy": {
            "name": "trophy",
            "names": [
                "trophy"
            ],
            "surrogates": "🏆"
        },
        "first_place": {
            "name": "first_place",
            "names": [
                "first_place",
                "first_place_medal"
            ],
            "surrogates": "🥇"
        },
        "second_place": {
            "name": "second_place",
            "names": [
                "second_place",
                "second_place_medal"
            ],
            "surrogates": "🥈"
        },
        "third_place": {
            "name": "third_place",
            "names": [
                "third_place",
                "third_place_medal"
            ],
            "surrogates": "🥉"
        },
        "medal": {
            "name": "medal",
            "names": [
                "medal",
                "sports_medal"
            ],
            "surrogates": "🏅"
        },
        "military_medal": {
            "name": "military_medal",
            "names": [
                "military_medal"
            ],
            "surrogates": "🎖️"
        },
        "rosette": {
            "name": "rosette",
            "names": [
                "rosette"
            ],
            "surrogates": "🏵️"
        },
        "reminder_ribbon": {
            "name": "reminder_ribbon",
            "names": [
                "reminder_ribbon"
            ],
            "surrogates": "🎗️"
        },
        "ticket": {
            "name": "ticket",
            "names": [
                "ticket"
            ],
            "surrogates": "🎫"
        },
        "tickets": {
            "name": "tickets",
            "names": [
                "tickets",
                "admission_tickets"
            ],
            "surrogates": "🎟️"
        },
        "circus_tent": {
            "name": "circus_tent",
            "names": [
                "circus_tent"
            ],
            "surrogates": "🎪"
        },
        "person_juggling": {
            "name": "person_juggling",
            "names": [
                "person_juggling",
                "juggling",
                "juggler"
            ],
            "surrogates": "🤹",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_juggling_tone1",
                    "names": [
                        "person_juggling_tone1",
                        "juggling_tone1",
                        "juggler_tone1"
                    ],
                    "surrogates": "🤹🏻"
                },
                "1f3fc": {
                    "name": "person_juggling_tone2",
                    "names": [
                        "person_juggling_tone2",
                        "juggling_tone2",
                        "juggler_tone2"
                    ],
                    "surrogates": "🤹🏼"
                },
                "1f3fd": {
                    "name": "person_juggling_tone3",
                    "names": [
                        "person_juggling_tone3",
                        "juggling_tone3",
                        "juggler_tone3"
                    ],
                    "surrogates": "🤹🏽"
                },
                "1f3fe": {
                    "name": "person_juggling_tone4",
                    "names": [
                        "person_juggling_tone4",
                        "juggling_tone4",
                        "juggler_tone4"
                    ],
                    "surrogates": "🤹🏾"
                },
                "1f3ff": {
                    "name": "person_juggling_tone5",
                    "names": [
                        "person_juggling_tone5",
                        "juggling_tone5",
                        "juggler_tone5"
                    ],
                    "surrogates": "🤹🏿"
                }
            }
        },
        "woman_juggling": {
            "name": "woman_juggling",
            "names": [
                "woman_juggling"
            ],
            "surrogates": "🤹‍♀️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "woman_juggling_tone1",
                    "names": [
                        "woman_juggling_tone1",
                        "woman_juggling_light_skin_tone"
                    ],
                    "surrogates": "🤹🏻‍♀️"
                },
                "1f3fc": {
                    "name": "woman_juggling_tone2",
                    "names": [
                        "woman_juggling_tone2",
                        "woman_juggling_medium_light_skin_tone"
                    ],
                    "surrogates": "🤹🏼‍♀️"
                },
                "1f3fd": {
                    "name": "woman_juggling_tone3",
                    "names": [
                        "woman_juggling_tone3",
                        "woman_juggling_medium_skin_tone"
                    ],
                    "surrogates": "🤹🏽‍♀️"
                },
                "1f3fe": {
                    "name": "woman_juggling_tone4",
                    "names": [
                        "woman_juggling_tone4",
                        "woman_juggling_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤹🏾‍♀️"
                },
                "1f3ff": {
                    "name": "woman_juggling_tone5",
                    "names": [
                        "woman_juggling_tone5",
                        "woman_juggling_dark_skin_tone"
                    ],
                    "surrogates": "🤹🏿‍♀️"
                }
            }
        },
        "man_juggling": {
            "name": "man_juggling",
            "names": [
                "man_juggling"
            ],
            "surrogates": "🤹‍♂️",
            "diversityChildren": {
                "1f3fb": {
                    "name": "man_juggling_tone1",
                    "names": [
                        "man_juggling_tone1",
                        "man_juggling_light_skin_tone"
                    ],
                    "surrogates": "🤹🏻‍♂️"
                },
                "1f3fc": {
                    "name": "man_juggling_tone2",
                    "names": [
                        "man_juggling_tone2",
                        "man_juggling_medium_light_skin_tone"
                    ],
                    "surrogates": "🤹🏼‍♂️"
                },
                "1f3fd": {
                    "name": "man_juggling_tone3",
                    "names": [
                        "man_juggling_tone3",
                        "man_juggling_medium_skin_tone"
                    ],
                    "surrogates": "🤹🏽‍♂️"
                },
                "1f3fe": {
                    "name": "man_juggling_tone4",
                    "names": [
                        "man_juggling_tone4",
                        "man_juggling_medium_dark_skin_tone"
                    ],
                    "surrogates": "🤹🏾‍♂️"
                },
                "1f3ff": {
                    "name": "man_juggling_tone5",
                    "names": [
                        "man_juggling_tone5",
                        "man_juggling_dark_skin_tone"
                    ],
                    "surrogates": "🤹🏿‍♂️"
                }
            }
        },
        "performing_arts": {
            "name": "performing_arts",
            "names": [
                "performing_arts"
            ],
            "surrogates": "🎭"
        },
        "ballet_shoes": {
            "name": "ballet_shoes",
            "names": [
                "ballet_shoes"
            ],
            "surrogates": "🩰"
        },
        "art": {
            "name": "art",
            "names": [
                "art"
            ],
            "surrogates": "🎨"
        },
        "clapper": {
            "name": "clapper",
            "names": [
                "clapper",
                "clapper_board"
            ],
            "surrogates": "🎬"
        },
        "microphone": {
            "name": "microphone",
            "names": [
                "microphone"
            ],
            "surrogates": "🎤"
        },
        "headphones": {
            "name": "headphones",
            "names": [
                "headphones",
                "headphone"
            ],
            "surrogates": "🎧"
        },
        "musical_score": {
            "name": "musical_score",
            "names": [
                "musical_score"
            ],
            "surrogates": "🎼"
        },
        "musical_keyboard": {
            "name": "musical_keyboard",
            "names": [
                "musical_keyboard"
            ],
            "surrogates": "🎹"
        },
        "maracas": {
            "name": "maracas",
            "names": [
                "maracas"
            ],
            "surrogates": "🪇"
        },
        "drum": {
            "name": "drum",
            "names": [
                "drum",
                "drum_with_drumsticks"
            ],
            "surrogates": "🥁"
        },
        "long_drum": {
            "name": "long_drum",
            "names": [
                "long_drum"
            ],
            "surrogates": "🪘"
        },
        "saxophone": {
            "name": "saxophone",
            "names": [
                "saxophone"
            ],
            "surrogates": "🎷"
        },
        "trumpet": {
            "name": "trumpet",
            "names": [
                "trumpet"
            ],
            "surrogates": "🎺"
        },
        "accordion": {
            "name": "accordion",
            "names": [
                "accordion"
            ],
            "surrogates": "🪗"
        },
        "guitar": {
            "name": "guitar",
            "names": [
                "guitar"
            ],
            "surrogates": "🎸"
        },
        "banjo": {
            "name": "banjo",
            "names": [
                "banjo"
            ],
            "surrogates": "🪕"
        },
        "violin": {
            "name": "violin",
            "names": [
                "violin"
            ],
            "surrogates": "🎻"
        },
        "flute": {
            "name": "flute",
            "names": [
                "flute"
            ],
            "surrogates": "🪈"
        },
        "game_die": {
            "name": "game_die",
            "names": [
                "game_die"
            ],
            "surrogates": "🎲"
        },
        "chess_pawn": {
            "name": "chess_pawn",
            "names": [
                "chess_pawn"
            ],
            "surrogates": "♟️"
        },
        "dart": {
            "name": "dart",
            "names": [
                "dart",
                "direct_hit"
            ],
            "surrogates": "🎯"
        },
        "bowling": {
            "name": "bowling",
            "names": [
                "bowling"
            ],
            "surrogates": "🎳"
        },
        "video_game": {
            "name": "video_game",
            "names": [
                "video_game"
            ],
            "surrogates": "🎮"
        },
        "slot_machine": {
            "name": "slot_machine",
            "names": [
                "slot_machine"
            ],
            "surrogates": "🎰"
        },
        "jigsaw": {
            "name": "jigsaw",
            "names": [
                "jigsaw",
                "puzzle_piece"
            ],
            "surrogates": "🧩"
        }
    },
    "travel": {
        "red_car": {
            "name": "red_car",
            "names": [
                "red_car",
                "automobile"
            ],
            "surrogates": "🚗"
        },
        "taxi": {
            "name": "taxi",
            "names": [
                "taxi"
            ],
            "surrogates": "🚕"
        },
        "blue_car": {
            "name": "blue_car",
            "names": [
                "blue_car"
            ],
            "surrogates": "🚙"
        },
        "pickup_truck": {
            "name": "pickup_truck",
            "names": [
                "pickup_truck"
            ],
            "surrogates": "🛻"
        },
        "minibus": {
            "name": "minibus",
            "names": [
                "minibus"
            ],
            "surrogates": "🚐"
        },
        "bus": {
            "name": "bus",
            "names": [
                "bus"
            ],
            "surrogates": "🚌"
        },
        "trolleybus": {
            "name": "trolleybus",
            "names": [
                "trolleybus"
            ],
            "surrogates": "🚎"
        },
        "race_car": {
            "name": "race_car",
            "names": [
                "race_car",
                "racing_car"
            ],
            "surrogates": "🏎️"
        },
        "police_car": {
            "name": "police_car",
            "names": [
                "police_car"
            ],
            "surrogates": "🚓"
        },
        "ambulance": {
            "name": "ambulance",
            "names": [
                "ambulance"
            ],
            "surrogates": "🚑"
        },
        "fire_engine": {
            "name": "fire_engine",
            "names": [
                "fire_engine"
            ],
            "surrogates": "🚒"
        },
        "truck": {
            "name": "truck",
            "names": [
                "truck"
            ],
            "surrogates": "🚚"
        },
        "articulated_lorry": {
            "name": "articulated_lorry",
            "names": [
                "articulated_lorry"
            ],
            "surrogates": "🚛"
        },
        "tractor": {
            "name": "tractor",
            "names": [
                "tractor"
            ],
            "surrogates": "🚜"
        },
        "probing_cane": {
            "name": "probing_cane",
            "names": [
                "probing_cane"
            ],
            "surrogates": "🦯"
        },
        "manual_wheelchair": {
            "name": "manual_wheelchair",
            "names": [
                "manual_wheelchair"
            ],
            "surrogates": "🦽"
        },
        "motorized_wheelchair": {
            "name": "motorized_wheelchair",
            "names": [
                "motorized_wheelchair"
            ],
            "surrogates": "🦼"
        },
        "crutch": {
            "name": "crutch",
            "names": [
                "crutch"
            ],
            "surrogates": "🩼"
        },
        "scooter": {
            "name": "scooter",
            "names": [
                "scooter",
                "kick_scooter"
            ],
            "surrogates": "🛴"
        },
        "bike": {
            "name": "bike",
            "names": [
                "bike",
                "bicycle"
            ],
            "surrogates": "🚲"
        },
        "motor_scooter": {
            "name": "motor_scooter",
            "names": [
                "motor_scooter",
                "motorbike"
            ],
            "surrogates": "🛵"
        },
        "motorcycle": {
            "name": "motorcycle",
            "names": [
                "motorcycle",
                "racing_motorcycle"
            ],
            "surrogates": "🏍️"
        },
        "auto_rickshaw": {
            "name": "auto_rickshaw",
            "names": [
                "auto_rickshaw"
            ],
            "surrogates": "🛺"
        },
        "wheel": {
            "name": "wheel",
            "names": [
                "wheel"
            ],
            "surrogates": "🛞"
        },
        "rotating_light": {
            "name": "rotating_light",
            "names": [
                "rotating_light"
            ],
            "surrogates": "🚨"
        },
        "oncoming_police_car": {
            "name": "oncoming_police_car",
            "names": [
                "oncoming_police_car"
            ],
            "surrogates": "🚔"
        },
        "oncoming_bus": {
            "name": "oncoming_bus",
            "names": [
                "oncoming_bus"
            ],
            "surrogates": "🚍"
        },
        "oncoming_automobile": {
            "name": "oncoming_automobile",
            "names": [
                "oncoming_automobile"
            ],
            "surrogates": "🚘"
        },
        "oncoming_taxi": {
            "name": "oncoming_taxi",
            "names": [
                "oncoming_taxi"
            ],
            "surrogates": "🚖"
        },
        "aerial_tramway": {
            "name": "aerial_tramway",
            "names": [
                "aerial_tramway"
            ],
            "surrogates": "🚡"
        },
        "mountain_cableway": {
            "name": "mountain_cableway",
            "names": [
                "mountain_cableway"
            ],
            "surrogates": "🚠"
        },
        "suspension_railway": {
            "name": "suspension_railway",
            "names": [
                "suspension_railway"
            ],
            "surrogates": "🚟"
        },
        "railway_car": {
            "name": "railway_car",
            "names": [
                "railway_car"
            ],
            "surrogates": "🚃"
        },
        "train": {
            "name": "train",
            "names": [
                "train",
                "tram_car"
            ],
            "surrogates": "🚋"
        },
        "mountain_railway": {
            "name": "mountain_railway",
            "names": [
                "mountain_railway"
            ],
            "surrogates": "🚞"
        },
        "monorail": {
            "name": "monorail",
            "names": [
                "monorail"
            ],
            "surrogates": "🚝"
        },
        "bullettrain_side": {
            "name": "bullettrain_side",
            "names": [
                "bullettrain_side"
            ],
            "surrogates": "🚄"
        },
        "bullettrain_front": {
            "name": "bullettrain_front",
            "names": [
                "bullettrain_front",
                "bullet_train"
            ],
            "surrogates": "🚅"
        },
        "light_rail": {
            "name": "light_rail",
            "names": [
                "light_rail"
            ],
            "surrogates": "🚈"
        },
        "steam_locomotive": {
            "name": "steam_locomotive",
            "names": [
                "steam_locomotive",
                "locomotive"
            ],
            "surrogates": "🚂"
        },
        "train2": {
            "name": "train2",
            "names": [
                "train2"
            ],
            "surrogates": "🚆"
        },
        "metro": {
            "name": "metro",
            "names": [
                "metro"
            ],
            "surrogates": "🚇"
        },
        "tram": {
            "name": "tram",
            "names": [
                "tram"
            ],
            "surrogates": "🚊"
        },
        "station": {
            "name": "station",
            "names": [
                "station"
            ],
            "surrogates": "🚉"
        },
        "airplane": {
            "name": "airplane",
            "names": [
                "airplane"
            ],
            "surrogates": "✈️"
        },
        "airplane_departure": {
            "name": "airplane_departure",
            "names": [
                "airplane_departure"
            ],
            "surrogates": "🛫"
        },
        "airplane_arriving": {
            "name": "airplane_arriving",
            "names": [
                "airplane_arriving"
            ],
            "surrogates": "🛬"
        },
        "airplane_small": {
            "name": "airplane_small",
            "names": [
                "airplane_small",
                "small_airplane"
            ],
            "surrogates": "🛩️"
        },
        "seat": {
            "name": "seat",
            "names": [
                "seat"
            ],
            "surrogates": "💺"
        },
        "satellite_orbital": {
            "name": "satellite_orbital",
            "names": [
                "satellite_orbital"
            ],
            "surrogates": "🛰️"
        },
        "rocket": {
            "name": "rocket",
            "names": [
                "rocket"
            ],
            "surrogates": "🚀"
        },
        "flying_saucer": {
            "name": "flying_saucer",
            "names": [
                "flying_saucer"
            ],
            "surrogates": "🛸"
        },
        "helicopter": {
            "name": "helicopter",
            "names": [
                "helicopter"
            ],
            "surrogates": "🚁"
        },
        "canoe": {
            "name": "canoe",
            "names": [
                "canoe",
                "kayak"
            ],
            "surrogates": "🛶"
        },
        "sailboat": {
            "name": "sailboat",
            "names": [
                "sailboat"
            ],
            "surrogates": "⛵"
        },
        "speedboat": {
            "name": "speedboat",
            "names": [
                "speedboat"
            ],
            "surrogates": "🚤"
        },
        "motorboat": {
            "name": "motorboat",
            "names": [
                "motorboat",
                "motor_boat"
            ],
            "surrogates": "🛥️"
        },
        "cruise_ship": {
            "name": "cruise_ship",
            "names": [
                "cruise_ship",
                "passenger_ship"
            ],
            "surrogates": "🛳️"
        },
        "ferry": {
            "name": "ferry",
            "names": [
                "ferry"
            ],
            "surrogates": "⛴️"
        },
        "ship": {
            "name": "ship",
            "names": [
                "ship"
            ],
            "surrogates": "🚢"
        },
        "ring_buoy": {
            "name": "ring_buoy",
            "names": [
                "ring_buoy"
            ],
            "surrogates": "🛟"
        },
        "anchor": {
            "name": "anchor",
            "names": [
                "anchor"
            ],
            "surrogates": "⚓"
        },
        "hook": {
            "name": "hook",
            "names": [
                "hook"
            ],
            "surrogates": "🪝"
        },
        "fuelpump": {
            "name": "fuelpump",
            "names": [
                "fuelpump",
                "fuel_pump"
            ],
            "surrogates": "⛽"
        },
        "construction": {
            "name": "construction",
            "names": [
                "construction"
            ],
            "surrogates": "🚧"
        },
        "vertical_traffic_light": {
            "name": "vertical_traffic_light",
            "names": [
                "vertical_traffic_light"
            ],
            "surrogates": "🚦"
        },
        "traffic_light": {
            "name": "traffic_light",
            "names": [
                "traffic_light"
            ],
            "surrogates": "🚥"
        },
        "busstop": {
            "name": "busstop",
            "names": [
                "busstop",
                "bus_stop"
            ],
            "surrogates": "🚏"
        },
        "map": {
            "name": "map",
            "names": [
                "map",
                "world_map"
            ],
            "surrogates": "🗺️"
        },
        "moyai": {
            "name": "moyai",
            "names": [
                "moyai",
                "moai"
            ],
            "surrogates": "🗿"
        },
        "statue_of_liberty": {
            "name": "statue_of_liberty",
            "names": [
                "statue_of_liberty"
            ],
            "surrogates": "🗽"
        },
        "tokyo_tower": {
            "name": "tokyo_tower",
            "names": [
                "tokyo_tower"
            ],
            "surrogates": "🗼"
        },
        "european_castle": {
            "name": "european_castle",
            "names": [
                "european_castle",
                "castle"
            ],
            "surrogates": "🏰"
        },
        "japanese_castle": {
            "name": "japanese_castle",
            "names": [
                "japanese_castle"
            ],
            "surrogates": "🏯"
        },
        "stadium": {
            "name": "stadium",
            "names": [
                "stadium"
            ],
            "surrogates": "🏟️"
        },
        "ferris_wheel": {
            "name": "ferris_wheel",
            "names": [
                "ferris_wheel"
            ],
            "surrogates": "🎡"
        },
        "roller_coaster": {
            "name": "roller_coaster",
            "names": [
                "roller_coaster"
            ],
            "surrogates": "🎢"
        },
        "carousel_horse": {
            "name": "carousel_horse",
            "names": [
                "carousel_horse"
            ],
            "surrogates": "🎠"
        },
        "fountain": {
            "name": "fountain",
            "names": [
                "fountain"
            ],
            "surrogates": "⛲"
        },
        "beach_umbrella": {
            "name": "beach_umbrella",
            "names": [
                "beach_umbrella",
                "umbrella_on_ground"
            ],
            "surrogates": "⛱️"
        },
        "beach": {
            "name": "beach",
            "names": [
                "beach",
                "beach_with_umbrella"
            ],
            "surrogates": "🏖️"
        },
        "island": {
            "name": "island",
            "names": [
                "island",
                "desert_island"
            ],
            "surrogates": "🏝️"
        },
        "desert": {
            "name": "desert",
            "names": [
                "desert"
            ],
            "surrogates": "🏜️"
        },
        "volcano": {
            "name": "volcano",
            "names": [
                "volcano"
            ],
            "surrogates": "🌋"
        },
        "mountain": {
            "name": "mountain",
            "names": [
                "mountain"
            ],
            "surrogates": "⛰️"
        },
        "mountain_snow": {
            "name": "mountain_snow",
            "names": [
                "mountain_snow",
                "snow_capped_mountain"
            ],
            "surrogates": "🏔️"
        },
        "mount_fuji": {
            "name": "mount_fuji",
            "names": [
                "mount_fuji"
            ],
            "surrogates": "🗻"
        },
        "camping": {
            "name": "camping",
            "names": [
                "camping"
            ],
            "surrogates": "🏕️"
        },
        "tent": {
            "name": "tent",
            "names": [
                "tent"
            ],
            "surrogates": "⛺"
        },
        "house": {
            "name": "house",
            "names": [
                "house"
            ],
            "surrogates": "🏠"
        },
        "house_with_garden": {
            "name": "house_with_garden",
            "names": [
                "house_with_garden"
            ],
            "surrogates": "🏡"
        },
        "homes": {
            "name": "homes",
            "names": [
                "homes",
                "house_buildings",
                "houses"
            ],
            "surrogates": "🏘️"
        },
        "house_abandoned": {
            "name": "house_abandoned",
            "names": [
                "house_abandoned",
                "derelict_house_building"
            ],
            "surrogates": "🏚️"
        },
        "hut": {
            "name": "hut",
            "names": [
                "hut"
            ],
            "surrogates": "🛖"
        },
        "construction_site": {
            "name": "construction_site",
            "names": [
                "construction_site",
                "building_construction"
            ],
            "surrogates": "🏗️"
        },
        "factory": {
            "name": "factory",
            "names": [
                "factory"
            ],
            "surrogates": "🏭"
        },
        "office": {
            "name": "office",
            "names": [
                "office"
            ],
            "surrogates": "🏢"
        },
        "department_store": {
            "name": "department_store",
            "names": [
                "department_store"
            ],
            "surrogates": "🏬"
        },
        "post_office": {
            "name": "post_office",
            "names": [
                "post_office"
            ],
            "surrogates": "🏣"
        },
        "european_post_office": {
            "name": "european_post_office",
            "names": [
                "european_post_office"
            ],
            "surrogates": "🏤"
        },
        "hospital": {
            "name": "hospital",
            "names": [
                "hospital"
            ],
            "surrogates": "🏥"
        },
        "bank": {
            "name": "bank",
            "names": [
                "bank"
            ],
            "surrogates": "🏦"
        },
        "hotel": {
            "name": "hotel",
            "names": [
                "hotel"
            ],
            "surrogates": "🏨"
        },
        "convenience_store": {
            "name": "convenience_store",
            "names": [
                "convenience_store"
            ],
            "surrogates": "🏪"
        },
        "school": {
            "name": "school",
            "names": [
                "school"
            ],
            "surrogates": "🏫"
        },
        "love_hotel": {
            "name": "love_hotel",
            "names": [
                "love_hotel"
            ],
            "surrogates": "🏩"
        },
        "wedding": {
            "name": "wedding",
            "names": [
                "wedding"
            ],
            "surrogates": "💒"
        },
        "classical_building": {
            "name": "classical_building",
            "names": [
                "classical_building"
            ],
            "surrogates": "🏛️"
        },
        "church": {
            "name": "church",
            "names": [
                "church"
            ],
            "surrogates": "⛪"
        },
        "mosque": {
            "name": "mosque",
            "names": [
                "mosque"
            ],
            "surrogates": "🕌"
        },
        "synagogue": {
            "name": "synagogue",
            "names": [
                "synagogue"
            ],
            "surrogates": "🕍"
        },
        "hindu_temple": {
            "name": "hindu_temple",
            "names": [
                "hindu_temple"
            ],
            "surrogates": "🛕"
        },
        "kaaba": {
            "name": "kaaba",
            "names": [
                "kaaba"
            ],
            "surrogates": "🕋"
        },
        "shinto_shrine": {
            "name": "shinto_shrine",
            "names": [
                "shinto_shrine"
            ],
            "surrogates": "⛩️"
        },
        "railway_track": {
            "name": "railway_track",
            "names": [
                "railway_track",
                "railroad_track"
            ],
            "surrogates": "🛤️"
        },
        "motorway": {
            "name": "motorway",
            "names": [
                "motorway"
            ],
            "surrogates": "🛣️"
        },
        "japan": {
            "name": "japan",
            "names": [
                "japan",
                "map_of_japan"
            ],
            "surrogates": "🗾"
        },
        "rice_scene": {
            "name": "rice_scene",
            "names": [
                "rice_scene"
            ],
            "surrogates": "🎑"
        },
        "park": {
            "name": "park",
            "names": [
                "park",
                "national_park"
            ],
            "surrogates": "🏞️"
        },
        "sunrise": {
            "name": "sunrise",
            "names": [
                "sunrise"
            ],
            "surrogates": "🌅"
        },
        "sunrise_over_mountains": {
            "name": "sunrise_over_mountains",
            "names": [
                "sunrise_over_mountains"
            ],
            "surrogates": "🌄"
        },
        "stars": {
            "name": "stars",
            "names": [
                "stars",
                "shooting_star"
            ],
            "surrogates": "🌠"
        },
        "sparkler": {
            "name": "sparkler",
            "names": [
                "sparkler"
            ],
            "surrogates": "🎇"
        },
        "fireworks": {
            "name": "fireworks",
            "names": [
                "fireworks"
            ],
            "surrogates": "🎆"
        },
        "city_sunset": {
            "name": "city_sunset",
            "names": [
                "city_sunset",
                "city_sunrise",
                "sunset"
            ],
            "surrogates": "🌇"
        },
        "city_dusk": {
            "name": "city_dusk",
            "names": [
                "city_dusk"
            ],
            "surrogates": "🌆"
        },
        "cityscape": {
            "name": "cityscape",
            "names": [
                "cityscape"
            ],
            "surrogates": "🏙️"
        },
        "night_with_stars": {
            "name": "night_with_stars",
            "names": [
                "night_with_stars"
            ],
            "surrogates": "🌃"
        },
        "milky_way": {
            "name": "milky_way",
            "names": [
                "milky_way"
            ],
            "surrogates": "🌌"
        },
        "bridge_at_night": {
            "name": "bridge_at_night",
            "names": [
                "bridge_at_night"
            ],
            "surrogates": "🌉"
        },
        "foggy": {
            "name": "foggy",
            "names": [
                "foggy"
            ],
            "surrogates": "🌁"
        }
    },
    "objects": {
        "watch": {
            "name": "watch",
            "names": [
                "watch"
            ],
            "surrogates": "⌚"
        },
        "mobile_phone": {
            "name": "mobile_phone",
            "names": [
                "mobile_phone",
                "iphone"
            ],
            "surrogates": "📱"
        },
        "calling": {
            "name": "calling",
            "names": [
                "calling"
            ],
            "surrogates": "📲"
        },
        "computer": {
            "name": "computer",
            "names": [
                "computer"
            ],
            "surrogates": "💻"
        },
        "keyboard": {
            "name": "keyboard",
            "names": [
                "keyboard"
            ],
            "surrogates": "⌨️"
        },
        "desktop": {
            "name": "desktop",
            "names": [
                "desktop",
                "desktop_computer"
            ],
            "surrogates": "🖥️"
        },
        "printer": {
            "name": "printer",
            "names": [
                "printer"
            ],
            "surrogates": "🖨️"
        },
        "mouse_three_button": {
            "name": "mouse_three_button",
            "names": [
                "mouse_three_button",
                "three_button_mouse"
            ],
            "surrogates": "🖱️"
        },
        "trackball": {
            "name": "trackball",
            "names": [
                "trackball"
            ],
            "surrogates": "🖲️"
        },
        "joystick": {
            "name": "joystick",
            "names": [
                "joystick"
            ],
            "surrogates": "🕹️"
        },
        "compression": {
            "name": "compression",
            "names": [
                "compression",
                "clamp"
            ],
            "surrogates": "🗜️"
        },
        "minidisc": {
            "name": "minidisc",
            "names": [
                "minidisc",
                "computer_disk"
            ],
            "surrogates": "💽"
        },
        "floppy_disk": {
            "name": "floppy_disk",
            "names": [
                "floppy_disk"
            ],
            "surrogates": "💾"
        },
        "cd": {
            "name": "cd",
            "names": [
                "cd",
                "optical_disk"
            ],
            "surrogates": "💿"
        },
        "dvd": {
            "name": "dvd",
            "names": [
                "dvd"
            ],
            "surrogates": "📀"
        },
        "vhs": {
            "name": "vhs",
            "names": [
                "vhs",
                "videocassette"
            ],
            "surrogates": "📼"
        },
        "camera": {
            "name": "camera",
            "names": [
                "camera"
            ],
            "surrogates": "📷"
        },
        "camera_with_flash": {
            "name": "camera_with_flash",
            "names": [
                "camera_with_flash"
            ],
            "surrogates": "📸"
        },
        "video_camera": {
            "name": "video_camera",
            "names": [
                "video_camera"
            ],
            "surrogates": "📹"
        },
        "movie_camera": {
            "name": "movie_camera",
            "names": [
                "movie_camera"
            ],
            "surrogates": "🎥"
        },
        "projector": {
            "name": "projector",
            "names": [
                "projector",
                "film_projector"
            ],
            "surrogates": "📽️"
        },
        "film_frames": {
            "name": "film_frames",
            "names": [
                "film_frames"
            ],
            "surrogates": "🎞️"
        },
        "telephone_receiver": {
            "name": "telephone_receiver",
            "names": [
                "telephone_receiver"
            ],
            "surrogates": "📞"
        },
        "telephone": {
            "name": "telephone",
            "names": [
                "telephone"
            ],
            "surrogates": "☎️"
        },
        "pager": {
            "name": "pager",
            "names": [
                "pager"
            ],
            "surrogates": "📟"
        },
        "fax": {
            "name": "fax",
            "names": [
                "fax",
                "fax_machine"
            ],
            "surrogates": "📠"
        },
        "tv": {
            "name": "tv",
            "names": [
                "tv",
                "television"
            ],
            "surrogates": "📺"
        },
        "radio": {
            "name": "radio",
            "names": [
                "radio"
            ],
            "surrogates": "📻"
        },
        "microphone2": {
            "name": "microphone2",
            "names": [
                "microphone2",
                "studio_microphone"
            ],
            "surrogates": "🎙️"
        },
        "level_slider": {
            "name": "level_slider",
            "names": [
                "level_slider"
            ],
            "surrogates": "🎚️"
        },
        "control_knobs": {
            "name": "control_knobs",
            "names": [
                "control_knobs"
            ],
            "surrogates": "🎛️"
        },
        "compass": {
            "name": "compass",
            "names": [
                "compass"
            ],
            "surrogates": "🧭"
        },
        "stopwatch": {
            "name": "stopwatch",
            "names": [
                "stopwatch"
            ],
            "surrogates": "⏱️"
        },
        "timer": {
            "name": "timer",
            "names": [
                "timer",
                "timer_clock"
            ],
            "surrogates": "⏲️"
        },
        "alarm_clock": {
            "name": "alarm_clock",
            "names": [
                "alarm_clock"
            ],
            "surrogates": "⏰"
        },
        "clock": {
            "name": "clock",
            "names": [
                "clock",
                "mantlepiece_clock"
            ],
            "surrogates": "🕰️"
        },
        "hourglass": {
            "name": "hourglass",
            "names": [
                "hourglass"
            ],
            "surrogates": "⌛"
        },
        "hourglass_flowing_sand": {
            "name": "hourglass_flowing_sand",
            "names": [
                "hourglass_flowing_sand"
            ],
            "surrogates": "⏳"
        },
        "satellite": {
            "name": "satellite",
            "names": [
                "satellite"
            ],
            "surrogates": "📡"
        },
        "battery": {
            "name": "battery",
            "names": [
                "battery"
            ],
            "surrogates": "🔋"
        },
        "low_battery": {
            "name": "low_battery",
            "names": [
                "low_battery"
            ],
            "surrogates": "🪫"
        },
        "electric_plug": {
            "name": "electric_plug",
            "names": [
                "electric_plug"
            ],
            "surrogates": "🔌"
        },
        "bulb": {
            "name": "bulb",
            "names": [
                "bulb",
                "light_bulb"
            ],
            "surrogates": "💡"
        },
        "flashlight": {
            "name": "flashlight",
            "names": [
                "flashlight"
            ],
            "surrogates": "🔦"
        },
        "candle": {
            "name": "candle",
            "names": [
                "candle"
            ],
            "surrogates": "🕯️"
        },
        "diya_lamp": {
            "name": "diya_lamp",
            "names": [
                "diya_lamp"
            ],
            "surrogates": "🪔"
        },
        "fire_extinguisher": {
            "name": "fire_extinguisher",
            "names": [
                "fire_extinguisher"
            ],
            "surrogates": "🧯"
        },
        "oil": {
            "name": "oil",
            "names": [
                "oil",
                "oil_drum"
            ],
            "surrogates": "🛢️"
        },
        "money_with_wings": {
            "name": "money_with_wings",
            "names": [
                "money_with_wings"
            ],
            "surrogates": "💸"
        },
        "dollar": {
            "name": "dollar",
            "names": [
                "dollar"
            ],
            "surrogates": "💵"
        },
        "yen": {
            "name": "yen",
            "names": [
                "yen",
                "yen_banknote"
            ],
            "surrogates": "💴"
        },
        "euro": {
            "name": "euro",
            "names": [
                "euro",
                "euro_banknote"
            ],
            "surrogates": "💶"
        },
        "pound": {
            "name": "pound",
            "names": [
                "pound"
            ],
            "surrogates": "💷"
        },
        "coin": {
            "name": "coin",
            "names": [
                "coin"
            ],
            "surrogates": "🪙"
        },
        "moneybag": {
            "name": "moneybag",
            "names": [
                "moneybag",
                "money_bag"
            ],
            "surrogates": "💰"
        },
        "credit_card": {
            "name": "credit_card",
            "names": [
                "credit_card"
            ],
            "surrogates": "💳"
        },
        "identification_card": {
            "name": "identification_card",
            "names": [
                "identification_card"
            ],
            "surrogates": "🪪"
        },
        "gem": {
            "name": "gem",
            "names": [
                "gem",
                "gem_stone"
            ],
            "surrogates": "💎"
        },
        "scales": {
            "name": "scales",
            "names": [
                "scales",
                "balance_scale"
            ],
            "surrogates": "⚖️"
        },
        "ladder": {
            "name": "ladder",
            "names": [
                "ladder"
            ],
            "surrogates": "🪜"
        },
        "toolbox": {
            "name": "toolbox",
            "names": [
                "toolbox"
            ],
            "surrogates": "🧰"
        },
        "screwdriver": {
            "name": "screwdriver",
            "names": [
                "screwdriver"
            ],
            "surrogates": "🪛"
        },
        "wrench": {
            "name": "wrench",
            "names": [
                "wrench"
            ],
            "surrogates": "🔧"
        },
        "hammer": {
            "name": "hammer",
            "names": [
                "hammer"
            ],
            "surrogates": "🔨"
        },
        "hammer_pick": {
            "name": "hammer_pick",
            "names": [
                "hammer_pick",
                "hammer_and_pick"
            ],
            "surrogates": "⚒️"
        },
        "tools": {
            "name": "tools",
            "names": [
                "tools",
                "hammer_and_wrench"
            ],
            "surrogates": "🛠️"
        },
        "pick": {
            "name": "pick",
            "names": [
                "pick"
            ],
            "surrogates": "⛏️"
        },
        "carpentry_saw": {
            "name": "carpentry_saw",
            "names": [
                "carpentry_saw"
            ],
            "surrogates": "🪚"
        },
        "nut_and_bolt": {
            "name": "nut_and_bolt",
            "names": [
                "nut_and_bolt"
            ],
            "surrogates": "🔩"
        },
        "gear": {
            "name": "gear",
            "names": [
                "gear"
            ],
            "surrogates": "⚙️"
        },
        "mouse_trap": {
            "name": "mouse_trap",
            "names": [
                "mouse_trap"
            ],
            "surrogates": "🪤"
        },
        "bricks": {
            "name": "bricks",
            "names": [
                "bricks",
                "brick"
            ],
            "surrogates": "🧱"
        },
        "chains": {
            "name": "chains",
            "names": [
                "chains"
            ],
            "surrogates": "⛓️"
        },
        "link": {
            "name": "link",
            "names": [
                "link"
            ],
            "surrogates": "🔗"
        },
        "broken_chain": {
            "name": "broken_chain",
            "names": [
                "broken_chain"
            ],
            "surrogates": "⛓️‍💥"
        },
        "magnet": {
            "name": "magnet",
            "names": [
                "magnet"
            ],
            "surrogates": "🧲"
        },
        "gun": {
            "name": "gun",
            "names": [
                "gun",
                "pistol"
            ],
            "surrogates": "🔫"
        },
        "bomb": {
            "name": "bomb",
            "names": [
                "bomb"
            ],
            "surrogates": "💣"
        },
        "firecracker": {
            "name": "firecracker",
            "names": [
                "firecracker"
            ],
            "surrogates": "🧨"
        },
        "axe": {
            "name": "axe",
            "names": [
                "axe"
            ],
            "surrogates": "🪓"
        },
        "knife": {
            "name": "knife",
            "names": [
                "knife",
                "kitchen_knife"
            ],
            "surrogates": "🔪"
        },
        "dagger": {
            "name": "dagger",
            "names": [
                "dagger",
                "dagger_knife"
            ],
            "surrogates": "🗡️"
        },
        "crossed_swords": {
            "name": "crossed_swords",
            "names": [
                "crossed_swords"
            ],
            "surrogates": "⚔️"
        },
        "shield": {
            "name": "shield",
            "names": [
                "shield"
            ],
            "surrogates": "🛡️"
        },
        "smoking": {
            "name": "smoking",
            "names": [
                "smoking",
                "cigarette"
            ],
            "surrogates": "🚬"
        },
        "coffin": {
            "name": "coffin",
            "names": [
                "coffin"
            ],
            "surrogates": "⚰️"
        },
        "headstone": {
            "name": "headstone",
            "names": [
                "headstone"
            ],
            "surrogates": "🪦"
        },
        "urn": {
            "name": "urn",
            "names": [
                "urn",
                "funeral_urn"
            ],
            "surrogates": "⚱️"
        },
        "amphora": {
            "name": "amphora",
            "names": [
                "amphora"
            ],
            "surrogates": "🏺"
        },
        "crystal_ball": {
            "name": "crystal_ball",
            "names": [
                "crystal_ball"
            ],
            "surrogates": "🔮"
        },
        "prayer_beads": {
            "name": "prayer_beads",
            "names": [
                "prayer_beads"
            ],
            "surrogates": "📿"
        },
        "nazar_amulet": {
            "name": "nazar_amulet",
            "names": [
                "nazar_amulet"
            ],
            "surrogates": "🧿"
        },
        "hamsa": {
            "name": "hamsa",
            "names": [
                "hamsa"
            ],
            "surrogates": "🪬"
        },
        "barber": {
            "name": "barber",
            "names": [
                "barber",
                "barber_pole"
            ],
            "surrogates": "💈"
        },
        "alembic": {
            "name": "alembic",
            "names": [
                "alembic"
            ],
            "surrogates": "⚗️"
        },
        "telescope": {
            "name": "telescope",
            "names": [
                "telescope"
            ],
            "surrogates": "🔭"
        },
        "microscope": {
            "name": "microscope",
            "names": [
                "microscope"
            ],
            "surrogates": "🔬"
        },
        "hole": {
            "name": "hole",
            "names": [
                "hole"
            ],
            "surrogates": "🕳️"
        },
        "x_ray": {
            "name": "x_ray",
            "names": [
                "x_ray"
            ],
            "surrogates": "🩻"
        },
        "adhesive_bandage": {
            "name": "adhesive_bandage",
            "names": [
                "adhesive_bandage"
            ],
            "surrogates": "🩹"
        },
        "stethoscope": {
            "name": "stethoscope",
            "names": [
                "stethoscope"
            ],
            "surrogates": "🩺"
        },
        "pill": {
            "name": "pill",
            "names": [
                "pill"
            ],
            "surrogates": "💊"
        },
        "syringe": {
            "name": "syringe",
            "names": [
                "syringe"
            ],
            "surrogates": "💉"
        },
        "drop_of_blood": {
            "name": "drop_of_blood",
            "names": [
                "drop_of_blood"
            ],
            "surrogates": "🩸"
        },
        "dna": {
            "name": "dna",
            "names": [
                "dna"
            ],
            "surrogates": "🧬"
        },
        "microbe": {
            "name": "microbe",
            "names": [
                "microbe"
            ],
            "surrogates": "🦠"
        },
        "petri_dish": {
            "name": "petri_dish",
            "names": [
                "petri_dish"
            ],
            "surrogates": "🧫"
        },
        "test_tube": {
            "name": "test_tube",
            "names": [
                "test_tube"
            ],
            "surrogates": "🧪"
        },
        "thermometer": {
            "name": "thermometer",
            "names": [
                "thermometer"
            ],
            "surrogates": "🌡️"
        },
        "broom": {
            "name": "broom",
            "names": [
                "broom"
            ],
            "surrogates": "🧹"
        },
        "plunger": {
            "name": "plunger",
            "names": [
                "plunger"
            ],
            "surrogates": "🪠"
        },
        "basket": {
            "name": "basket",
            "names": [
                "basket"
            ],
            "surrogates": "🧺"
        },
        "roll_of_paper": {
            "name": "roll_of_paper",
            "names": [
                "roll_of_paper"
            ],
            "surrogates": "🧻"
        },
        "toilet": {
            "name": "toilet",
            "names": [
                "toilet"
            ],
            "surrogates": "🚽"
        },
        "potable_water": {
            "name": "potable_water",
            "names": [
                "potable_water"
            ],
            "surrogates": "🚰"
        },
        "shower": {
            "name": "shower",
            "names": [
                "shower"
            ],
            "surrogates": "🚿"
        },
        "bathtub": {
            "name": "bathtub",
            "names": [
                "bathtub"
            ],
            "surrogates": "🛁"
        },
        "bath": {
            "name": "bath",
            "names": [
                "bath"
            ],
            "surrogates": "🛀",
            "diversityChildren": {
                "1f3fb": {
                    "name": "bath_tone1",
                    "names": [
                        "bath_tone1"
                    ],
                    "surrogates": "🛀🏻"
                },
                "1f3fc": {
                    "name": "bath_tone2",
                    "names": [
                        "bath_tone2"
                    ],
                    "surrogates": "🛀🏼"
                },
                "1f3fd": {
                    "name": "bath_tone3",
                    "names": [
                        "bath_tone3"
                    ],
                    "surrogates": "🛀🏽"
                },
                "1f3fe": {
                    "name": "bath_tone4",
                    "names": [
                        "bath_tone4"
                    ],
                    "surrogates": "🛀🏾"
                },
                "1f3ff": {
                    "name": "bath_tone5",
                    "names": [
                        "bath_tone5"
                    ],
                    "surrogates": "🛀🏿"
                }
            }
        },
        "soap": {
            "name": "soap",
            "names": [
                "soap"
            ],
            "surrogates": "🧼"
        },
        "toothbrush": {
            "name": "toothbrush",
            "names": [
                "toothbrush"
            ],
            "surrogates": "🪥"
        },
        "razor": {
            "name": "razor",
            "names": [
                "razor"
            ],
            "surrogates": "🪒"
        },
        "hair_pick": {
            "name": "hair_pick",
            "names": [
                "hair_pick"
            ],
            "surrogates": "🪮"
        },
        "sponge": {
            "name": "sponge",
            "names": [
                "sponge"
            ],
            "surrogates": "🧽"
        },
        "bucket": {
            "name": "bucket",
            "names": [
                "bucket"
            ],
            "surrogates": "🪣"
        },
        "squeeze_bottle": {
            "name": "squeeze_bottle",
            "names": [
                "squeeze_bottle",
                "lotion_bottle"
            ],
            "surrogates": "🧴"
        },
        "bellhop": {
            "name": "bellhop",
            "names": [
                "bellhop",
                "bellhop_bell"
            ],
            "surrogates": "🛎️"
        },
        "key": {
            "name": "key",
            "names": [
                "key"
            ],
            "surrogates": "🔑"
        },
        "key2": {
            "name": "key2",
            "names": [
                "key2",
                "old_key"
            ],
            "surrogates": "🗝️"
        },
        "door": {
            "name": "door",
            "names": [
                "door"
            ],
            "surrogates": "🚪"
        },
        "chair": {
            "name": "chair",
            "names": [
                "chair"
            ],
            "surrogates": "🪑"
        },
        "couch": {
            "name": "couch",
            "names": [
                "couch",
                "couch_and_lamp"
            ],
            "surrogates": "🛋️"
        },
        "bed": {
            "name": "bed",
            "names": [
                "bed"
            ],
            "surrogates": "🛏️"
        },
        "sleeping_accommodation": {
            "name": "sleeping_accommodation",
            "names": [
                "sleeping_accommodation",
                "person_in_bed"
            ],
            "surrogates": "🛌",
            "diversityChildren": {
                "1f3fb": {
                    "name": "person_in_bed_tone1",
                    "names": [
                        "person_in_bed_tone1",
                        "person_in_bed_light_skin_tone"
                    ],
                    "surrogates": "🛌🏻"
                },
                "1f3fc": {
                    "name": "person_in_bed_tone2",
                    "names": [
                        "person_in_bed_tone2",
                        "person_in_bed_medium_light_skin_tone"
                    ],
                    "surrogates": "🛌🏼"
                },
                "1f3fd": {
                    "name": "person_in_bed_tone3",
                    "names": [
                        "person_in_bed_tone3",
                        "person_in_bed_medium_skin_tone"
                    ],
                    "surrogates": "🛌🏽"
                },
                "1f3fe": {
                    "name": "person_in_bed_tone4",
                    "names": [
                        "person_in_bed_tone4",
                        "person_in_bed_medium_dark_skin_tone"
                    ],
                    "surrogates": "🛌🏾"
                },
                "1f3ff": {
                    "name": "person_in_bed_tone5",
                    "names": [
                        "person_in_bed_tone5",
                        "person_in_bed_dark_skin_tone"
                    ],
                    "surrogates": "🛌🏿"
                }
            }
        },
        "teddy_bear": {
            "name": "teddy_bear",
            "names": [
                "teddy_bear"
            ],
            "surrogates": "🧸"
        },
        "nesting_dolls": {
            "name": "nesting_dolls",
            "names": [
                "nesting_dolls"
            ],
            "surrogates": "🪆"
        },
        "frame_photo": {
            "name": "frame_photo",
            "names": [
                "frame_photo",
                "frame_with_picture"
            ],
            "surrogates": "🖼️"
        },
        "mirror": {
            "name": "mirror",
            "names": [
                "mirror"
            ],
            "surrogates": "🪞"
        },
        "window": {
            "name": "window",
            "names": [
                "window"
            ],
            "surrogates": "🪟"
        },
        "shopping_bags": {
            "name": "shopping_bags",
            "names": [
                "shopping_bags"
            ],
            "surrogates": "🛍️"
        },
        "shopping_cart": {
            "name": "shopping_cart",
            "names": [
                "shopping_cart",
                "shopping_trolley"
            ],
            "surrogates": "🛒"
        },
        "gift": {
            "name": "gift",
            "names": [
                "gift",
                "wrapped_gift"
            ],
            "surrogates": "🎁"
        },
        "balloon": {
            "name": "balloon",
            "names": [
                "balloon"
            ],
            "surrogates": "🎈"
        },
        "flags": {
            "name": "flags",
            "names": [
                "flags",
                "carp_streamer"
            ],
            "surrogates": "🎏"
        },
        "ribbon": {
            "name": "ribbon",
            "names": [
                "ribbon"
            ],
            "surrogates": "🎀"
        },
        "magic_wand": {
            "name": "magic_wand",
            "names": [
                "magic_wand"
            ],
            "surrogates": "🪄"
        },
        "piñata": {
            "name": "piñata",
            "names": [
                "piñata"
            ],
            "surrogates": "🪅"
        },
        "confetti_ball": {
            "name": "confetti_ball",
            "names": [
                "confetti_ball"
            ],
            "surrogates": "🎊"
        },
        "tada": {
            "name": "tada",
            "names": [
                "tada",
                "party_popper"
            ],
            "surrogates": "🎉"
        },
        "dolls": {
            "name": "dolls",
            "names": [
                "dolls"
            ],
            "surrogates": "🎎"
        },
        "folding_hand_fan": {
            "name": "folding_hand_fan",
            "names": [
                "folding_hand_fan"
            ],
            "surrogates": "🪭"
        },
        "izakaya_lantern": {
            "name": "izakaya_lantern",
            "names": [
                "izakaya_lantern"
            ],
            "surrogates": "🏮"
        },
        "wind_chime": {
            "name": "wind_chime",
            "names": [
                "wind_chime"
            ],
            "surrogates": "🎐"
        },
        "mirror_ball": {
            "name": "mirror_ball",
            "names": [
                "mirror_ball"
            ],
            "surrogates": "🪩"
        },
        "red_envelope": {
            "name": "red_envelope",
            "names": [
                "red_envelope"
            ],
            "surrogates": "🧧"
        },
        "envelope": {
            "name": "envelope",
            "names": [
                "envelope"
            ],
            "surrogates": "✉️"
        },
        "envelope_with_arrow": {
            "name": "envelope_with_arrow",
            "names": [
                "envelope_with_arrow"
            ],
            "surrogates": "📩"
        },
        "incoming_envelope": {
            "name": "incoming_envelope",
            "names": [
                "incoming_envelope"
            ],
            "surrogates": "📨"
        },
        "e_mail": {
            "name": "e_mail",
            "names": [
                "e_mail",
                "email"
            ],
            "surrogates": "📧"
        },
        "love_letter": {
            "name": "love_letter",
            "names": [
                "love_letter"
            ],
            "surrogates": "💌"
        },
        "inbox_tray": {
            "name": "inbox_tray",
            "names": [
                "inbox_tray"
            ],
            "surrogates": "📥"
        },
        "outbox_tray": {
            "name": "outbox_tray",
            "names": [
                "outbox_tray"
            ],
            "surrogates": "📤"
        },
        "package": {
            "name": "package",
            "names": [
                "package"
            ],
            "surrogates": "📦"
        },
        "label": {
            "name": "label",
            "names": [
                "label"
            ],
            "surrogates": "🏷️"
        },
        "placard": {
            "name": "placard",
            "names": [
                "placard"
            ],
            "surrogates": "🪧"
        },
        "mailbox_closed": {
            "name": "mailbox_closed",
            "names": [
                "mailbox_closed"
            ],
            "surrogates": "📪"
        },
        "mailbox": {
            "name": "mailbox",
            "names": [
                "mailbox"
            ],
            "surrogates": "📫"
        },
        "mailbox_with_mail": {
            "name": "mailbox_with_mail",
            "names": [
                "mailbox_with_mail"
            ],
            "surrogates": "📬"
        },
        "mailbox_with_no_mail": {
            "name": "mailbox_with_no_mail",
            "names": [
                "mailbox_with_no_mail"
            ],
            "surrogates": "📭"
        },
        "postbox": {
            "name": "postbox",
            "names": [
                "postbox"
            ],
            "surrogates": "📮"
        },
        "postal_horn": {
            "name": "postal_horn",
            "names": [
                "postal_horn"
            ],
            "surrogates": "📯"
        },
        "scroll": {
            "name": "scroll",
            "names": [
                "scroll"
            ],
            "surrogates": "📜"
        },
        "page_with_curl": {
            "name": "page_with_curl",
            "names": [
                "page_with_curl"
            ],
            "surrogates": "📃"
        },
        "page_facing_up": {
            "name": "page_facing_up",
            "names": [
                "page_facing_up"
            ],
            "surrogates": "📄"
        },
        "bookmark_tabs": {
            "name": "bookmark_tabs",
            "names": [
                "bookmark_tabs"
            ],
            "surrogates": "📑"
        },
        "receipt": {
            "name": "receipt",
            "names": [
                "receipt"
            ],
            "surrogates": "🧾"
        },
        "bar_chart": {
            "name": "bar_chart",
            "names": [
                "bar_chart"
            ],
            "surrogates": "📊"
        },
        "chart_with_upwards_trend": {
            "name": "chart_with_upwards_trend",
            "names": [
                "chart_with_upwards_trend"
            ],
            "surrogates": "📈"
        },
        "chart_with_downwards_trend": {
            "name": "chart_with_downwards_trend",
            "names": [
                "chart_with_downwards_trend"
            ],
            "surrogates": "📉"
        },
        "notepad_spiral": {
            "name": "notepad_spiral",
            "names": [
                "notepad_spiral",
                "spiral_note_pad"
            ],
            "surrogates": "🗒️"
        },
        "calendar_spiral": {
            "name": "calendar_spiral",
            "names": [
                "calendar_spiral",
                "spiral_calendar_pad"
            ],
            "surrogates": "🗓️"
        },
        "calendar": {
            "name": "calendar",
            "names": [
                "calendar"
            ],
            "surrogates": "📆"
        },
        "date": {
            "name": "date",
            "names": [
                "date"
            ],
            "surrogates": "📅"
        },
        "wastebasket": {
            "name": "wastebasket",
            "names": [
                "wastebasket"
            ],
            "surrogates": "🗑️"
        },
        "card_index": {
            "name": "card_index",
            "names": [
                "card_index"
            ],
            "surrogates": "📇"
        },
        "card_box": {
            "name": "card_box",
            "names": [
                "card_box",
                "card_file_box"
            ],
            "surrogates": "🗃️"
        },
        "ballot_box": {
            "name": "ballot_box",
            "names": [
                "ballot_box",
                "ballot_box_with_ballot"
            ],
            "surrogates": "🗳️"
        },
        "file_cabinet": {
            "name": "file_cabinet",
            "names": [
                "file_cabinet"
            ],
            "surrogates": "🗄️"
        },
        "clipboard": {
            "name": "clipboard",
            "names": [
                "clipboard"
            ],
            "surrogates": "📋"
        },
        "file_folder": {
            "name": "file_folder",
            "names": [
                "file_folder"
            ],
            "surrogates": "📁"
        },
        "open_file_folder": {
            "name": "open_file_folder",
            "names": [
                "open_file_folder"
            ],
            "surrogates": "📂"
        },
        "dividers": {
            "name": "dividers",
            "names": [
                "dividers",
                "card_index_dividers"
            ],
            "surrogates": "🗂️"
        },
        "newspaper2": {
            "name": "newspaper2",
            "names": [
                "newspaper2",
                "rolled_up_newspaper"
            ],
            "surrogates": "🗞️"
        },
        "newspaper": {
            "name": "newspaper",
            "names": [
                "newspaper"
            ],
            "surrogates": "📰"
        },
        "notebook": {
            "name": "notebook",
            "names": [
                "notebook"
            ],
            "surrogates": "📓"
        },
        "notebook_with_decorative_cover": {
            "name": "notebook_with_decorative_cover",
            "names": [
                "notebook_with_decorative_cover"
            ],
            "surrogates": "📔"
        },
        "ledger": {
            "name": "ledger",
            "names": [
                "ledger"
            ],
            "surrogates": "📒"
        },
        "closed_book": {
            "name": "closed_book",
            "names": [
                "closed_book"
            ],
            "surrogates": "📕"
        },
        "green_book": {
            "name": "green_book",
            "names": [
                "green_book"
            ],
            "surrogates": "📗"
        },
        "blue_book": {
            "name": "blue_book",
            "names": [
                "blue_book"
            ],
            "surrogates": "📘"
        },
        "orange_book": {
            "name": "orange_book",
            "names": [
                "orange_book"
            ],
            "surrogates": "📙"
        },
        "books": {
            "name": "books",
            "names": [
                "books"
            ],
            "surrogates": "📚"
        },
        "book": {
            "name": "book",
            "names": [
                "book",
                "open_book"
            ],
            "surrogates": "📖"
        },
        "bookmark": {
            "name": "bookmark",
            "names": [
                "bookmark"
            ],
            "surrogates": "🔖"
        },
        "safety_pin": {
            "name": "safety_pin",
            "names": [
                "safety_pin"
            ],
            "surrogates": "🧷"
        },
        "paperclip": {
            "name": "paperclip",
            "names": [
                "paperclip"
            ],
            "surrogates": "📎"
        },
        "paperclips": {
            "name": "paperclips",
            "names": [
                "paperclips",
                "linked_paperclips"
            ],
            "surrogates": "🖇️"
        },
        "triangular_ruler": {
            "name": "triangular_ruler",
            "names": [
                "triangular_ruler"
            ],
            "surrogates": "📐"
        },
        "straight_ruler": {
            "name": "straight_ruler",
            "names": [
                "straight_ruler"
            ],
            "surrogates": "📏"
        },
        "abacus": {
            "name": "abacus",
            "names": [
                "abacus"
            ],
            "surrogates": "🧮"
        },
        "pushpin": {
            "name": "pushpin",
            "names": [
                "pushpin"
            ],
            "surrogates": "📌"
        },
        "round_pushpin": {
            "name": "round_pushpin",
            "names": [
                "round_pushpin"
            ],
            "surrogates": "📍"
        },
        "scissors": {
            "name": "scissors",
            "names": [
                "scissors"
            ],
            "surrogates": "✂️"
        },
        "pen_ballpoint": {
            "name": "pen_ballpoint",
            "names": [
                "pen_ballpoint",
                "lower_left_ballpoint_pen",
                "pen"
            ],
            "surrogates": "🖊️"
        },
        "pen_fountain": {
            "name": "pen_fountain",
            "names": [
                "pen_fountain",
                "lower_left_fountain_pen",
                "fountain_pen"
            ],
            "surrogates": "🖋️"
        },
        "black_nib": {
            "name": "black_nib",
            "names": [
                "black_nib"
            ],
            "surrogates": "✒️"
        },
        "paintbrush": {
            "name": "paintbrush",
            "names": [
                "paintbrush",
                "lower_left_paintbrush"
            ],
            "surrogates": "🖌️"
        },
        "crayon": {
            "name": "crayon",
            "names": [
                "crayon",
                "lower_left_crayon"
            ],
            "surrogates": "🖍️"
        },
        "pencil": {
            "name": "pencil",
            "names": [
                "pencil",
                "memo"
            ],
            "surrogates": "📝"
        },
        "pencil2": {
            "name": "pencil2",
            "names": [
                "pencil2"
            ],
            "surrogates": "✏️"
        },
        "mag": {
            "name": "mag",
            "names": [
                "mag"
            ],
            "surrogates": "🔍"
        },
        "mag_right": {
            "name": "mag_right",
            "names": [
                "mag_right"
            ],
            "surrogates": "🔎"
        },
        "lock_with_ink_pen": {
            "name": "lock_with_ink_pen",
            "names": [
                "lock_with_ink_pen"
            ],
            "surrogates": "🔏"
        },
        "closed_lock_with_key": {
            "name": "closed_lock_with_key",
            "names": [
                "closed_lock_with_key"
            ],
            "surrogates": "🔐"
        },
        "lock": {
            "name": "lock",
            "names": [
                "lock",
                "locked"
            ],
            "surrogates": "🔒"
        },
        "unlock": {
            "name": "unlock",
            "names": [
                "unlock",
                "unlocked"
            ],
            "surrogates": "🔓"
        }
    },
    "symbols": {
        "100": {
            "name": "100",
            "names": [
                "100"
            ],
            "surrogates": "💯"
        },
        "1234": {
            "name": "1234",
            "names": [
                "1234",
                "input_numbers"
            ],
            "surrogates": "🔢"
        },
        "pink_heart": {
            "name": "pink_heart",
            "names": [
                "pink_heart"
            ],
            "surrogates": "🩷"
        },
        "heart": {
            "name": "heart",
            "names": [
                "heart",
                "red_heart"
            ],
            "surrogates": "❤️"
        },
        "orange_heart": {
            "name": "orange_heart",
            "names": [
                "orange_heart"
            ],
            "surrogates": "🧡"
        },
        "yellow_heart": {
            "name": "yellow_heart",
            "names": [
                "yellow_heart"
            ],
            "surrogates": "💛"
        },
        "green_heart": {
            "name": "green_heart",
            "names": [
                "green_heart"
            ],
            "surrogates": "💚"
        },
        "light_blue_heart": {
            "name": "light_blue_heart",
            "names": [
                "light_blue_heart"
            ],
            "surrogates": "🩵"
        },
        "blue_heart": {
            "name": "blue_heart",
            "names": [
                "blue_heart"
            ],
            "surrogates": "💙"
        },
        "purple_heart": {
            "name": "purple_heart",
            "names": [
                "purple_heart"
            ],
            "surrogates": "💜"
        },
        "black_heart": {
            "name": "black_heart",
            "names": [
                "black_heart"
            ],
            "surrogates": "🖤"
        },
        "grey_heart": {
            "name": "grey_heart",
            "names": [
                "grey_heart"
            ],
            "surrogates": "🩶"
        },
        "white_heart": {
            "name": "white_heart",
            "names": [
                "white_heart"
            ],
            "surrogates": "🤍"
        },
        "brown_heart": {
            "name": "brown_heart",
            "names": [
                "brown_heart"
            ],
            "surrogates": "🤎"
        },
        "broken_heart": {
            "name": "broken_heart",
            "names": [
                "broken_heart"
            ],
            "surrogates": "💔"
        },
        "heart_exclamation": {
            "name": "heart_exclamation",
            "names": [
                "heart_exclamation",
                "heavy_heart_exclamation_mark_ornament"
            ],
            "surrogates": "❣️"
        },
        "two_hearts": {
            "name": "two_hearts",
            "names": [
                "two_hearts"
            ],
            "surrogates": "💕"
        },
        "revolving_hearts": {
            "name": "revolving_hearts",
            "names": [
                "revolving_hearts"
            ],
            "surrogates": "💞"
        },
        "heartbeat": {
            "name": "heartbeat",
            "names": [
                "heartbeat",
                "beating_heart"
            ],
            "surrogates": "💓"
        },
        "heartpulse": {
            "name": "heartpulse",
            "names": [
                "heartpulse",
                "growing_heart"
            ],
            "surrogates": "💗"
        },
        "sparkling_heart": {
            "name": "sparkling_heart",
            "names": [
                "sparkling_heart"
            ],
            "surrogates": "💖"
        },
        "cupid": {
            "name": "cupid",
            "names": [
                "cupid"
            ],
            "surrogates": "💘"
        },
        "gift_heart": {
            "name": "gift_heart",
            "names": [
                "gift_heart"
            ],
            "surrogates": "💝"
        },
        "mending_heart": {
            "name": "mending_heart",
            "names": [
                "mending_heart"
            ],
            "surrogates": "❤️‍🩹"
        },
        "heart_on_fire": {
            "name": "heart_on_fire",
            "names": [
                "heart_on_fire"
            ],
            "surrogates": "❤️‍🔥"
        },
        "heart_decoration": {
            "name": "heart_decoration",
            "names": [
                "heart_decoration"
            ],
            "surrogates": "💟"
        },
        "peace": {
            "name": "peace",
            "names": [
                "peace",
                "peace_symbol"
            ],
            "surrogates": "☮️"
        },
        "cross": {
            "name": "cross",
            "names": [
                "cross",
                "latin_cross"
            ],
            "surrogates": "✝️"
        },
        "star_and_crescent": {
            "name": "star_and_crescent",
            "names": [
                "star_and_crescent"
            ],
            "surrogates": "☪️"
        },
        "om_symbol": {
            "name": "om_symbol",
            "names": [
                "om_symbol"
            ],
            "surrogates": "🕉️"
        },
        "wheel_of_dharma": {
            "name": "wheel_of_dharma",
            "names": [
                "wheel_of_dharma"
            ],
            "surrogates": "☸️"
        },
        "khanda": {
            "name": "khanda",
            "names": [
                "khanda"
            ],
            "surrogates": "🪯"
        },
        "star_of_david": {
            "name": "star_of_david",
            "names": [
                "star_of_david"
            ],
            "surrogates": "✡️"
        },
        "six_pointed_star": {
            "name": "six_pointed_star",
            "names": [
                "six_pointed_star"
            ],
            "surrogates": "🔯"
        },
        "menorah": {
            "name": "menorah",
            "names": [
                "menorah"
            ],
            "surrogates": "🕎"
        },
        "yin_yang": {
            "name": "yin_yang",
            "names": [
                "yin_yang"
            ],
            "surrogates": "☯️"
        },
        "orthodox_cross": {
            "name": "orthodox_cross",
            "names": [
                "orthodox_cross"
            ],
            "surrogates": "☦️"
        },
        "place_of_worship": {
            "name": "place_of_worship",
            "names": [
                "place_of_worship",
                "worship_symbol"
            ],
            "surrogates": "🛐"
        },
        "ophiuchus": {
            "name": "ophiuchus",
            "names": [
                "ophiuchus"
            ],
            "surrogates": "⛎"
        },
        "aries": {
            "name": "aries",
            "names": [
                "aries"
            ],
            "surrogates": "♈"
        },
        "taurus": {
            "name": "taurus",
            "names": [
                "taurus"
            ],
            "surrogates": "♉"
        },
        "gemini": {
            "name": "gemini",
            "names": [
                "gemini"
            ],
            "surrogates": "♊"
        },
        "cancer": {
            "name": "cancer",
            "names": [
                "cancer"
            ],
            "surrogates": "♋"
        },
        "leo": {
            "name": "leo",
            "names": [
                "leo"
            ],
            "surrogates": "♌"
        },
        "virgo": {
            "name": "virgo",
            "names": [
                "virgo"
            ],
            "surrogates": "♍"
        },
        "libra": {
            "name": "libra",
            "names": [
                "libra"
            ],
            "surrogates": "♎"
        },
        "scorpius": {
            "name": "scorpius",
            "names": [
                "scorpius",
                "scorpio"
            ],
            "surrogates": "♏"
        },
        "sagittarius": {
            "name": "sagittarius",
            "names": [
                "sagittarius"
            ],
            "surrogates": "♐"
        },
        "capricorn": {
            "name": "capricorn",
            "names": [
                "capricorn"
            ],
            "surrogates": "♑"
        },
        "aquarius": {
            "name": "aquarius",
            "names": [
                "aquarius"
            ],
            "surrogates": "♒"
        },
        "pisces": {
            "name": "pisces",
            "names": [
                "pisces"
            ],
            "surrogates": "♓"
        },
        "id": {
            "name": "id",
            "names": [
                "id"
            ],
            "surrogates": "🆔"
        },
        "atom": {
            "name": "atom",
            "names": [
                "atom",
                "atom_symbol"
            ],
            "surrogates": "⚛️"
        },
        "accept": {
            "name": "accept",
            "names": [
                "accept"
            ],
            "surrogates": "🉑"
        },
        "radioactive": {
            "name": "radioactive",
            "names": [
                "radioactive",
                "radioactive_sign"
            ],
            "surrogates": "☢️"
        },
        "biohazard": {
            "name": "biohazard",
            "names": [
                "biohazard",
                "biohazard_sign"
            ],
            "surrogates": "☣️"
        },
        "mobile_phone_off": {
            "name": "mobile_phone_off",
            "names": [
                "mobile_phone_off"
            ],
            "surrogates": "📴"
        },
        "vibration_mode": {
            "name": "vibration_mode",
            "names": [
                "vibration_mode"
            ],
            "surrogates": "📳"
        },
        "u6709": {
            "name": "u6709",
            "names": [
                "u6709"
            ],
            "surrogates": "🈶"
        },
        "u7121": {
            "name": "u7121",
            "names": [
                "u7121"
            ],
            "surrogates": "🈚"
        },
        "u7533": {
            "name": "u7533",
            "names": [
                "u7533"
            ],
            "surrogates": "🈸"
        },
        "u55b6": {
            "name": "u55b6",
            "names": [
                "u55b6"
            ],
            "surrogates": "🈺"
        },
        "u6708": {
            "name": "u6708",
            "names": [
                "u6708"
            ],
            "surrogates": "🈷️"
        },
        "eight_pointed_black_star": {
            "name": "eight_pointed_black_star",
            "names": [
                "eight_pointed_black_star"
            ],
            "surrogates": "✴️"
        },
        "vs": {
            "name": "vs",
            "names": [
                "vs"
            ],
            "surrogates": "🆚"
        },
        "white_flower": {
            "name": "white_flower",
            "names": [
                "white_flower"
            ],
            "surrogates": "💮"
        },
        "ideograph_advantage": {
            "name": "ideograph_advantage",
            "names": [
                "ideograph_advantage"
            ],
            "surrogates": "🉐"
        },
        "secret": {
            "name": "secret",
            "names": [
                "secret"
            ],
            "surrogates": "㊙️"
        },
        "congratulations": {
            "name": "congratulations",
            "names": [
                "congratulations"
            ],
            "surrogates": "㊗️"
        },
        "u5408": {
            "name": "u5408",
            "names": [
                "u5408"
            ],
            "surrogates": "🈴"
        },
        "u6e80": {
            "name": "u6e80",
            "names": [
                "u6e80"
            ],
            "surrogates": "🈵"
        },
        "u5272": {
            "name": "u5272",
            "names": [
                "u5272"
            ],
            "surrogates": "🈹"
        },
        "u7981": {
            "name": "u7981",
            "names": [
                "u7981"
            ],
            "surrogates": "🈲"
        },
        "a": {
            "name": "a",
            "names": [
                "a"
            ],
            "surrogates": "🅰️"
        },
        "b": {
            "name": "b",
            "names": [
                "b"
            ],
            "surrogates": "🅱️"
        },
        "ab": {
            "name": "ab",
            "names": [
                "ab"
            ],
            "surrogates": "🆎"
        },
        "cl": {
            "name": "cl",
            "names": [
                "cl"
            ],
            "surrogates": "🆑"
        },
        "o2": {
            "name": "o2",
            "names": [
                "o2"
            ],
            "surrogates": "🅾️"
        },
        "sos": {
            "name": "sos",
            "names": [
                "sos"
            ],
            "surrogates": "🆘"
        },
        "x": {
            "name": "x",
            "names": [
                "x",
                "cross_mark"
            ],
            "surrogates": "❌"
        },
        "o": {
            "name": "o",
            "names": [
                "o"
            ],
            "surrogates": "⭕"
        },
        "octagonal_sign": {
            "name": "octagonal_sign",
            "names": [
                "octagonal_sign",
                "stop_sign"
            ],
            "surrogates": "🛑"
        },
        "no_entry": {
            "name": "no_entry",
            "names": [
                "no_entry"
            ],
            "surrogates": "⛔"
        },
        "name_badge": {
            "name": "name_badge",
            "names": [
                "name_badge"
            ],
            "surrogates": "📛"
        },
        "no_entry_sign": {
            "name": "no_entry_sign",
            "names": [
                "no_entry_sign",
                "prohibited"
            ],
            "surrogates": "🚫"
        },
        "anger": {
            "name": "anger",
            "names": [
                "anger"
            ],
            "surrogates": "💢"
        },
        "hotsprings": {
            "name": "hotsprings",
            "names": [
                "hotsprings",
                "hot_springs"
            ],
            "surrogates": "♨️"
        },
        "no_pedestrians": {
            "name": "no_pedestrians",
            "names": [
                "no_pedestrians"
            ],
            "surrogates": "🚷"
        },
        "do_not_litter": {
            "name": "do_not_litter",
            "names": [
                "do_not_litter",
                "no_littering"
            ],
            "surrogates": "🚯"
        },
        "no_bicycles": {
            "name": "no_bicycles",
            "names": [
                "no_bicycles"
            ],
            "surrogates": "🚳"
        },
        "non_potable_water": {
            "name": "non_potable_water",
            "names": [
                "non_potable_water"
            ],
            "surrogates": "🚱"
        },
        "underage": {
            "name": "underage",
            "names": [
                "underage"
            ],
            "surrogates": "🔞"
        },
        "no_mobile_phones": {
            "name": "no_mobile_phones",
            "names": [
                "no_mobile_phones"
            ],
            "surrogates": "📵"
        },
        "no_smoking": {
            "name": "no_smoking",
            "names": [
                "no_smoking"
            ],
            "surrogates": "🚭"
        },
        "exclamation": {
            "name": "exclamation",
            "names": [
                "exclamation"
            ],
            "surrogates": "❗"
        },
        "grey_exclamation": {
            "name": "grey_exclamation",
            "names": [
                "grey_exclamation"
            ],
            "surrogates": "❕"
        },
        "question": {
            "name": "question",
            "names": [
                "question",
                "question_mark"
            ],
            "surrogates": "❓"
        },
        "grey_question": {
            "name": "grey_question",
            "names": [
                "grey_question"
            ],
            "surrogates": "❔"
        },
        "bangbang": {
            "name": "bangbang",
            "names": [
                "bangbang"
            ],
            "surrogates": "‼️"
        },
        "interrobang": {
            "name": "interrobang",
            "names": [
                "interrobang"
            ],
            "surrogates": "⁉️"
        },
        "low_brightness": {
            "name": "low_brightness",
            "names": [
                "low_brightness"
            ],
            "surrogates": "🔅"
        },
        "high_brightness": {
            "name": "high_brightness",
            "names": [
                "high_brightness"
            ],
            "surrogates": "🔆"
        },
        "part_alternation_mark": {
            "name": "part_alternation_mark",
            "names": [
                "part_alternation_mark"
            ],
            "surrogates": "〽️"
        },
        "warning": {
            "name": "warning",
            "names": [
                "warning"
            ],
            "surrogates": "⚠️"
        },
        "children_crossing": {
            "name": "children_crossing",
            "names": [
                "children_crossing"
            ],
            "surrogates": "🚸"
        },
        "trident": {
            "name": "trident",
            "names": [
                "trident"
            ],
            "surrogates": "🔱"
        },
        "fleur_de_lis": {
            "name": "fleur_de_lis",
            "names": [
                "fleur_de_lis"
            ],
            "surrogates": "⚜️"
        },
        "beginner": {
            "name": "beginner",
            "names": [
                "beginner"
            ],
            "surrogates": "🔰"
        },
        "recycle": {
            "name": "recycle",
            "names": [
                "recycle"
            ],
            "surrogates": "♻️"
        },
        "white_check_mark": {
            "name": "white_check_mark",
            "names": [
                "white_check_mark"
            ],
            "surrogates": "✅"
        },
        "u6307": {
            "name": "u6307",
            "names": [
                "u6307"
            ],
            "surrogates": "🈯"
        },
        "chart": {
            "name": "chart",
            "names": [
                "chart"
            ],
            "surrogates": "💹"
        },
        "sparkle": {
            "name": "sparkle",
            "names": [
                "sparkle"
            ],
            "surrogates": "❇️"
        },
        "eight_spoked_asterisk": {
            "name": "eight_spoked_asterisk",
            "names": [
                "eight_spoked_asterisk"
            ],
            "surrogates": "✳️"
        },
        "negative_squared_cross_mark": {
            "name": "negative_squared_cross_mark",
            "names": [
                "negative_squared_cross_mark"
            ],
            "surrogates": "❎"
        },
        "globe_with_meridians": {
            "name": "globe_with_meridians",
            "names": [
                "globe_with_meridians"
            ],
            "surrogates": "🌐"
        },
        "diamond_shape_with_a_dot_inside": {
            "name": "diamond_shape_with_a_dot_inside",
            "names": [
                "diamond_shape_with_a_dot_inside"
            ],
            "surrogates": "💠"
        },
        "m": {
            "name": "m",
            "names": [
                "m",
                "circled_m"
            ],
            "surrogates": "Ⓜ️"
        },
        "cyclone": {
            "name": "cyclone",
            "names": [
                "cyclone"
            ],
            "surrogates": "🌀"
        },
        "zzz": {
            "name": "zzz",
            "names": [
                "zzz"
            ],
            "surrogates": "💤"
        },
        "atm": {
            "name": "atm",
            "names": [
                "atm"
            ],
            "surrogates": "🏧"
        },
        "wc": {
            "name": "wc",
            "names": [
                "wc",
                "water_closet"
            ],
            "surrogates": "🚾"
        },
        "wheelchair": {
            "name": "wheelchair",
            "names": [
                "wheelchair"
            ],
            "surrogates": "♿"
        },
        "parking": {
            "name": "parking",
            "names": [
                "parking"
            ],
            "surrogates": "🅿️"
        },
        "elevator": {
            "name": "elevator",
            "names": [
                "elevator"
            ],
            "surrogates": "🛗"
        },
        "u7a7a": {
            "name": "u7a7a",
            "names": [
                "u7a7a"
            ],
            "surrogates": "🈳"
        },
        "sa": {
            "name": "sa",
            "names": [
                "sa"
            ],
            "surrogates": "🈂️"
        },
        "passport_control": {
            "name": "passport_control",
            "names": [
                "passport_control"
            ],
            "surrogates": "🛂"
        },
        "customs": {
            "name": "customs",
            "names": [
                "customs"
            ],
            "surrogates": "🛃"
        },
        "baggage_claim": {
            "name": "baggage_claim",
            "names": [
                "baggage_claim"
            ],
            "surrogates": "🛄"
        },
        "left_luggage": {
            "name": "left_luggage",
            "names": [
                "left_luggage"
            ],
            "surrogates": "🛅"
        },
        "wireless": {
            "name": "wireless",
            "names": [
                "wireless"
            ],
            "surrogates": "🛜"
        },
        "mens": {
            "name": "mens",
            "names": [
                "mens",
                "mens_room"
            ],
            "surrogates": "🚹"
        },
        "womens": {
            "name": "womens",
            "names": [
                "womens",
                "womens_room"
            ],
            "surrogates": "🚺"
        },
        "baby_symbol": {
            "name": "baby_symbol",
            "names": [
                "baby_symbol"
            ],
            "surrogates": "🚼"
        },
        "restroom": {
            "name": "restroom",
            "names": [
                "restroom"
            ],
            "surrogates": "🚻"
        },
        "put_litter_in_its_place": {
            "name": "put_litter_in_its_place",
            "names": [
                "put_litter_in_its_place"
            ],
            "surrogates": "🚮"
        },
        "cinema": {
            "name": "cinema",
            "names": [
                "cinema"
            ],
            "surrogates": "🎦"
        },
        "signal_strength": {
            "name": "signal_strength",
            "names": [
                "signal_strength",
                "antenna_bars"
            ],
            "surrogates": "📶"
        },
        "koko": {
            "name": "koko",
            "names": [
                "koko"
            ],
            "surrogates": "🈁"
        },
        "symbols": {
            "name": "symbols",
            "names": [
                "symbols",
                "input_symbols"
            ],
            "surrogates": "🔣"
        },
        "information_source": {
            "name": "information_source",
            "names": [
                "information_source",
                "information"
            ],
            "surrogates": "ℹ️"
        },
        "abc": {
            "name": "abc",
            "names": [
                "abc"
            ],
            "surrogates": "🔤"
        },
        "abcd": {
            "name": "abcd",
            "names": [
                "abcd"
            ],
            "surrogates": "🔡"
        },
        "capital_abcd": {
            "name": "capital_abcd",
            "names": [
                "capital_abcd"
            ],
            "surrogates": "🔠"
        },
        "ng": {
            "name": "ng",
            "names": [
                "ng"
            ],
            "surrogates": "🆖"
        },
        "ok": {
            "name": "ok",
            "names": [
                "ok"
            ],
            "surrogates": "🆗"
        },
        "up": {
            "name": "up",
            "names": [
                "up"
            ],
            "surrogates": "🆙"
        },
        "cool": {
            "name": "cool",
            "names": [
                "cool"
            ],
            "surrogates": "🆒"
        },
        "new": {
            "name": "new",
            "names": [
                "new"
            ],
            "surrogates": "🆕"
        },
        "free": {
            "name": "free",
            "names": [
                "free"
            ],
            "surrogates": "🆓"
        },
        "zero": {
            "name": "zero",
            "names": [
                "zero",
                "number_0"
            ],
            "surrogates": "0️⃣"
        },
        "one": {
            "name": "one",
            "names": [
                "one",
                "number_1"
            ],
            "surrogates": "1️⃣"
        },
        "two": {
            "name": "two",
            "names": [
                "two",
                "number_2"
            ],
            "surrogates": "2️⃣"
        },
        "three": {
            "name": "three",
            "names": [
                "three",
                "number_3"
            ],
            "surrogates": "3️⃣"
        },
        "four": {
            "name": "four",
            "names": [
                "four",
                "number_4"
            ],
            "surrogates": "4️⃣"
        },
        "five": {
            "name": "five",
            "names": [
                "five",
                "number_5"
            ],
            "surrogates": "5️⃣"
        },
        "six": {
            "name": "six",
            "names": [
                "six",
                "number_6"
            ],
            "surrogates": "6️⃣"
        },
        "seven": {
            "name": "seven",
            "names": [
                "seven",
                "number_7"
            ],
            "surrogates": "7️⃣"
        },
        "eight": {
            "name": "eight",
            "names": [
                "eight",
                "number_8"
            ],
            "surrogates": "8️⃣"
        },
        "nine": {
            "name": "nine",
            "names": [
                "nine",
                "number_9"
            ],
            "surrogates": "9️⃣"
        },
        "keycap_ten": {
            "name": "keycap_ten",
            "names": [
                "keycap_ten",
                "number_10"
            ],
            "surrogates": "🔟"
        },
        "hash": {
            "name": "hash",
            "names": [
                "hash"
            ],
            "surrogates": "#️⃣"
        },
        "asterisk": {
            "name": "asterisk",
            "names": [
                "asterisk",
                "keycap_asterisk"
            ],
            "surrogates": "*️⃣"
        },
        "eject": {
            "name": "eject",
            "names": [
                "eject",
                "eject_symbol"
            ],
            "surrogates": "⏏️"
        },
        "arrow_forward": {
            "name": "arrow_forward",
            "names": [
                "arrow_forward"
            ],
            "surrogates": "▶️"
        },
        "pause_button": {
            "name": "pause_button",
            "names": [
                "pause_button",
                "double_vertical_bar"
            ],
            "surrogates": "⏸️"
        },
        "play_pause": {
            "name": "play_pause",
            "names": [
                "play_pause"
            ],
            "surrogates": "⏯️"
        },
        "stop_button": {
            "name": "stop_button",
            "names": [
                "stop_button"
            ],
            "surrogates": "⏹️"
        },
        "record_button": {
            "name": "record_button",
            "names": [
                "record_button"
            ],
            "surrogates": "⏺️"
        },
        "track_next": {
            "name": "track_next",
            "names": [
                "track_next",
                "next_track"
            ],
            "surrogates": "⏭️"
        },
        "track_previous": {
            "name": "track_previous",
            "names": [
                "track_previous",
                "previous_track"
            ],
            "surrogates": "⏮️"
        },
        "fast_forward": {
            "name": "fast_forward",
            "names": [
                "fast_forward"
            ],
            "surrogates": "⏩"
        },
        "rewind": {
            "name": "rewind",
            "names": [
                "rewind"
            ],
            "surrogates": "⏪"
        },
        "arrow_double_up": {
            "name": "arrow_double_up",
            "names": [
                "arrow_double_up"
            ],
            "surrogates": "⏫"
        },
        "arrow_double_down": {
            "name": "arrow_double_down",
            "names": [
                "arrow_double_down"
            ],
            "surrogates": "⏬"
        },
        "arrow_backward": {
            "name": "arrow_backward",
            "names": [
                "arrow_backward"
            ],
            "surrogates": "◀️"
        },
        "arrow_up_small": {
            "name": "arrow_up_small",
            "names": [
                "arrow_up_small"
            ],
            "surrogates": "🔼"
        },
        "arrow_down_small": {
            "name": "arrow_down_small",
            "names": [
                "arrow_down_small"
            ],
            "surrogates": "🔽"
        },
        "arrow_right": {
            "name": "arrow_right",
            "names": [
                "arrow_right",
                "right_arrow"
            ],
            "surrogates": "➡️"
        },
        "arrow_left": {
            "name": "arrow_left",
            "names": [
                "arrow_left",
                "left_arrow"
            ],
            "surrogates": "⬅️"
        },
        "arrow_up": {
            "name": "arrow_up",
            "names": [
                "arrow_up",
                "up_arrow"
            ],
            "surrogates": "⬆️"
        },
        "arrow_down": {
            "name": "arrow_down",
            "names": [
                "arrow_down",
                "down_arrow"
            ],
            "surrogates": "⬇️"
        },
        "arrow_upper_right": {
            "name": "arrow_upper_right",
            "names": [
                "arrow_upper_right"
            ],
            "surrogates": "↗️"
        },
        "arrow_lower_right": {
            "name": "arrow_lower_right",
            "names": [
                "arrow_lower_right"
            ],
            "surrogates": "↘️"
        },
        "arrow_lower_left": {
            "name": "arrow_lower_left",
            "names": [
                "arrow_lower_left"
            ],
            "surrogates": "↙️"
        },
        "arrow_upper_left": {
            "name": "arrow_upper_left",
            "names": [
                "arrow_upper_left",
                "up_left_arrow"
            ],
            "surrogates": "↖️"
        },
        "arrow_up_down": {
            "name": "arrow_up_down",
            "names": [
                "arrow_up_down",
                "up_down_arrow"
            ],
            "surrogates": "↕️"
        },
        "left_right_arrow": {
            "name": "left_right_arrow",
            "names": [
                "left_right_arrow"
            ],
            "surrogates": "↔️"
        },
        "arrow_right_hook": {
            "name": "arrow_right_hook",
            "names": [
                "arrow_right_hook"
            ],
            "surrogates": "↪️"
        },
        "leftwards_arrow_with_hook": {
            "name": "leftwards_arrow_with_hook",
            "names": [
                "leftwards_arrow_with_hook"
            ],
            "surrogates": "↩️"
        },
        "arrow_heading_up": {
            "name": "arrow_heading_up",
            "names": [
                "arrow_heading_up"
            ],
            "surrogates": "⤴️"
        },
        "arrow_heading_down": {
            "name": "arrow_heading_down",
            "names": [
                "arrow_heading_down"
            ],
            "surrogates": "⤵️"
        },
        "twisted_rightwards_arrows": {
            "name": "twisted_rightwards_arrows",
            "names": [
                "twisted_rightwards_arrows"
            ],
            "surrogates": "🔀"
        },
        "repeat": {
            "name": "repeat",
            "names": [
                "repeat"
            ],
            "surrogates": "🔁"
        },
        "repeat_one": {
            "name": "repeat_one",
            "names": [
                "repeat_one"
            ],
            "surrogates": "🔂"
        },
        "arrows_counterclockwise": {
            "name": "arrows_counterclockwise",
            "names": [
                "arrows_counterclockwise"
            ],
            "surrogates": "🔄"
        },
        "arrows_clockwise": {
            "name": "arrows_clockwise",
            "names": [
                "arrows_clockwise"
            ],
            "surrogates": "🔃"
        },
        "musical_note": {
            "name": "musical_note",
            "names": [
                "musical_note"
            ],
            "surrogates": "🎵"
        },
        "notes": {
            "name": "notes",
            "names": [
                "notes",
                "musical_notes"
            ],
            "surrogates": "🎶"
        },
        "heavy_plus_sign": {
            "name": "heavy_plus_sign",
            "names": [
                "heavy_plus_sign"
            ],
            "surrogates": "➕"
        },
        "heavy_minus_sign": {
            "name": "heavy_minus_sign",
            "names": [
                "heavy_minus_sign"
            ],
            "surrogates": "➖"
        },
        "heavy_division_sign": {
            "name": "heavy_division_sign",
            "names": [
                "heavy_division_sign"
            ],
            "surrogates": "➗"
        },
        "heavy_multiplication_x": {
            "name": "heavy_multiplication_x",
            "names": [
                "heavy_multiplication_x"
            ],
            "surrogates": "✖️"
        },
        "heavy_equals_sign": {
            "name": "heavy_equals_sign",
            "names": [
                "heavy_equals_sign"
            ],
            "surrogates": "🟰"
        },
        "infinity": {
            "name": "infinity",
            "names": [
                "infinity"
            ],
            "surrogates": "♾️"
        },
        "heavy_dollar_sign": {
            "name": "heavy_dollar_sign",
            "names": [
                "heavy_dollar_sign"
            ],
            "surrogates": "💲"
        },
        "currency_exchange": {
            "name": "currency_exchange",
            "names": [
                "currency_exchange"
            ],
            "surrogates": "💱"
        },
        "tm": {
            "name": "tm",
            "names": [
                "tm",
                "trade_mark"
            ],
            "surrogates": "™"
        },
        "copyright": {
            "name": "copyright",
            "names": [
                "copyright",
                "c"
            ],
            "surrogates": "©"
        },
        "registered": {
            "name": "registered",
            "names": [
                "registered",
                "r"
            ],
            "surrogates": "®"
        },
        "wavy_dash": {
            "name": "wavy_dash",
            "names": [
                "wavy_dash"
            ],
            "surrogates": "〰️"
        },
        "curly_loop": {
            "name": "curly_loop",
            "names": [
                "curly_loop"
            ],
            "surrogates": "➰"
        },
        "loop": {
            "name": "loop",
            "names": [
                "loop"
            ],
            "surrogates": "➿"
        },
        "end": {
            "name": "end",
            "names": [
                "end",
                "end_arrow"
            ],
            "surrogates": "🔚"
        },
        "back": {
            "name": "back",
            "names": [
                "back",
                "back_arrow"
            ],
            "surrogates": "🔙"
        },
        "on": {
            "name": "on",
            "names": [
                "on",
                "on_arrow"
            ],
            "surrogates": "🔛"
        },
        "top": {
            "name": "top",
            "names": [
                "top",
                "top_arrow"
            ],
            "surrogates": "🔝"
        },
        "soon": {
            "name": "soon",
            "names": [
                "soon",
                "soon_arrow"
            ],
            "surrogates": "🔜"
        },
        "heavy_check_mark": {
            "name": "heavy_check_mark",
            "names": [
                "heavy_check_mark",
                "check_mark"
            ],
            "surrogates": "✔️"
        },
        "ballot_box_with_check": {
            "name": "ballot_box_with_check",
            "names": [
                "ballot_box_with_check"
            ],
            "surrogates": "☑️"
        },
        "radio_button": {
            "name": "radio_button",
            "names": [
                "radio_button"
            ],
            "surrogates": "🔘"
        },
        "white_circle": {
            "name": "white_circle",
            "names": [
                "white_circle"
            ],
            "surrogates": "⚪"
        },
        "black_circle": {
            "name": "black_circle",
            "names": [
                "black_circle"
            ],
            "surrogates": "⚫"
        },
        "red_circle": {
            "name": "red_circle",
            "names": [
                "red_circle"
            ],
            "surrogates": "🔴"
        },
        "blue_circle": {
            "name": "blue_circle",
            "names": [
                "blue_circle"
            ],
            "surrogates": "🔵"
        },
        "brown_circle": {
            "name": "brown_circle",
            "names": [
                "brown_circle"
            ],
            "surrogates": "🟤"
        },
        "purple_circle": {
            "name": "purple_circle",
            "names": [
                "purple_circle"
            ],
            "surrogates": "🟣"
        },
        "green_circle": {
            "name": "green_circle",
            "names": [
                "green_circle"
            ],
            "surrogates": "🟢"
        },
        "yellow_circle": {
            "name": "yellow_circle",
            "names": [
                "yellow_circle"
            ],
            "surrogates": "🟡"
        },
        "orange_circle": {
            "name": "orange_circle",
            "names": [
                "orange_circle"
            ],
            "surrogates": "🟠"
        },
        "small_red_triangle": {
            "name": "small_red_triangle",
            "names": [
                "small_red_triangle"
            ],
            "surrogates": "🔺"
        },
        "small_red_triangle_down": {
            "name": "small_red_triangle_down",
            "names": [
                "small_red_triangle_down"
            ],
            "surrogates": "🔻"
        },
        "small_orange_diamond": {
            "name": "small_orange_diamond",
            "names": [
                "small_orange_diamond"
            ],
            "surrogates": "🔸"
        },
        "small_blue_diamond": {
            "name": "small_blue_diamond",
            "names": [
                "small_blue_diamond"
            ],
            "surrogates": "🔹"
        },
        "large_orange_diamond": {
            "name": "large_orange_diamond",
            "names": [
                "large_orange_diamond"
            ],
            "surrogates": "🔶"
        },
        "large_blue_diamond": {
            "name": "large_blue_diamond",
            "names": [
                "large_blue_diamond"
            ],
            "surrogates": "🔷"
        },
        "white_square_button": {
            "name": "white_square_button",
            "names": [
                "white_square_button"
            ],
            "surrogates": "🔳"
        },
        "black_square_button": {
            "name": "black_square_button",
            "names": [
                "black_square_button"
            ],
            "surrogates": "🔲"
        },
        "black_small_square": {
            "name": "black_small_square",
            "names": [
                "black_small_square"
            ],
            "surrogates": "▪️"
        },
        "white_small_square": {
            "name": "white_small_square",
            "names": [
                "white_small_square"
            ],
            "surrogates": "▫️"
        },
        "black_medium_small_square": {
            "name": "black_medium_small_square",
            "names": [
                "black_medium_small_square"
            ],
            "surrogates": "◾"
        },
        "white_medium_small_square": {
            "name": "white_medium_small_square",
            "names": [
                "white_medium_small_square"
            ],
            "surrogates": "◽"
        },
        "black_medium_square": {
            "name": "black_medium_square",
            "names": [
                "black_medium_square"
            ],
            "surrogates": "◼️"
        },
        "white_medium_square": {
            "name": "white_medium_square",
            "names": [
                "white_medium_square"
            ],
            "surrogates": "◻️"
        },
        "black_large_square": {
            "name": "black_large_square",
            "names": [
                "black_large_square"
            ],
            "surrogates": "⬛"
        },
        "white_large_square": {
            "name": "white_large_square",
            "names": [
                "white_large_square"
            ],
            "surrogates": "⬜"
        },
        "orange_square": {
            "name": "orange_square",
            "names": [
                "orange_square"
            ],
            "surrogates": "🟧"
        },
        "blue_square": {
            "name": "blue_square",
            "names": [
                "blue_square"
            ],
            "surrogates": "🟦"
        },
        "red_square": {
            "name": "red_square",
            "names": [
                "red_square"
            ],
            "surrogates": "🟥"
        },
        "brown_square": {
            "name": "brown_square",
            "names": [
                "brown_square"
            ],
            "surrogates": "🟫"
        },
        "purple_square": {
            "name": "purple_square",
            "names": [
                "purple_square"
            ],
            "surrogates": "🟪"
        },
        "green_square": {
            "name": "green_square",
            "names": [
                "green_square"
            ],
            "surrogates": "🟩"
        },
        "yellow_square": {
            "name": "yellow_square",
            "names": [
                "yellow_square"
            ],
            "surrogates": "🟨"
        },
        "speaker": {
            "name": "speaker",
            "names": [
                "speaker"
            ],
            "surrogates": "🔈"
        },
        "mute": {
            "name": "mute",
            "names": [
                "mute",
                "muted_speaker"
            ],
            "surrogates": "🔇"
        },
        "sound": {
            "name": "sound",
            "names": [
                "sound"
            ],
            "surrogates": "🔉"
        },
        "loud_sound": {
            "name": "loud_sound",
            "names": [
                "loud_sound"
            ],
            "surrogates": "🔊"
        },
        "bell": {
            "name": "bell",
            "names": [
                "bell"
            ],
            "surrogates": "🔔"
        },
        "no_bell": {
            "name": "no_bell",
            "names": [
                "no_bell"
            ],
            "surrogates": "🔕"
        },
        "mega": {
            "name": "mega",
            "names": [
                "mega",
                "megaphone"
            ],
            "surrogates": "📣"
        },
        "loudspeaker": {
            "name": "loudspeaker",
            "names": [
                "loudspeaker"
            ],
            "surrogates": "📢"
        },
        "speech_left": {
            "name": "speech_left",
            "names": [
                "speech_left",
                "left_speech_bubble"
            ],
            "surrogates": "🗨️"
        },
        "eye_in_speech_bubble": {
            "name": "eye_in_speech_bubble",
            "names": [
                "eye_in_speech_bubble"
            ],
            "surrogates": "👁‍🗨"
        },
        "speech_balloon": {
            "name": "speech_balloon",
            "names": [
                "speech_balloon"
            ],
            "surrogates": "💬"
        },
        "thought_balloon": {
            "name": "thought_balloon",
            "names": [
                "thought_balloon"
            ],
            "surrogates": "💭"
        },
        "anger_right": {
            "name": "anger_right",
            "names": [
                "anger_right",
                "right_anger_bubble"
            ],
            "surrogates": "🗯️"
        },
        "spades": {
            "name": "spades",
            "names": [
                "spades",
                "spade_suit"
            ],
            "surrogates": "♠️"
        },
        "clubs": {
            "name": "clubs",
            "names": [
                "clubs",
                "club_suit"
            ],
            "surrogates": "♣️"
        },
        "hearts": {
            "name": "hearts",
            "names": [
                "hearts",
                "heart_suit"
            ],
            "surrogates": "♥️"
        },
        "diamonds": {
            "name": "diamonds",
            "names": [
                "diamonds",
                "diamond_suit"
            ],
            "surrogates": "♦️"
        },
        "black_joker": {
            "name": "black_joker",
            "names": [
                "black_joker",
                "joker"
            ],
            "surrogates": "🃏"
        },
        "flower_playing_cards": {
            "name": "flower_playing_cards",
            "names": [
                "flower_playing_cards"
            ],
            "surrogates": "🎴"
        },
        "mahjong": {
            "name": "mahjong",
            "names": [
                "mahjong"
            ],
            "surrogates": "🀄"
        },
        "clock1": {
            "name": "clock1",
            "names": [
                "clock1",
                "one_oclock"
            ],
            "surrogates": "🕐"
        },
        "clock2": {
            "name": "clock2",
            "names": [
                "clock2",
                "two_oclock"
            ],
            "surrogates": "🕑"
        },
        "clock3": {
            "name": "clock3",
            "names": [
                "clock3",
                "three_oclock"
            ],
            "surrogates": "🕒"
        },
        "clock4": {
            "name": "clock4",
            "names": [
                "clock4",
                "four_oclock"
            ],
            "surrogates": "🕓"
        },
        "clock5": {
            "name": "clock5",
            "names": [
                "clock5",
                "five_oclock"
            ],
            "surrogates": "🕔"
        },
        "clock6": {
            "name": "clock6",
            "names": [
                "clock6",
                "six_oclock"
            ],
            "surrogates": "🕕"
        },
        "clock7": {
            "name": "clock7",
            "names": [
                "clock7",
                "seven_oclock"
            ],
            "surrogates": "🕖"
        },
        "clock8": {
            "name": "clock8",
            "names": [
                "clock8",
                "eight_oclock"
            ],
            "surrogates": "🕗"
        },
        "clock9": {
            "name": "clock9",
            "names": [
                "clock9",
                "nine_oclock"
            ],
            "surrogates": "🕘"
        },
        "clock10": {
            "name": "clock10",
            "names": [
                "clock10",
                "ten_oclock"
            ],
            "surrogates": "🕙"
        },
        "clock11": {
            "name": "clock11",
            "names": [
                "clock11",
                "eleven_oclock"
            ],
            "surrogates": "🕚"
        },
        "clock12": {
            "name": "clock12",
            "names": [
                "clock12",
                "twelve_oclock"
            ],
            "surrogates": "🕛"
        },
        "clock130": {
            "name": "clock130",
            "names": [
                "clock130",
                "one_thirty"
            ],
            "surrogates": "🕜"
        },
        "clock230": {
            "name": "clock230",
            "names": [
                "clock230",
                "two_thirty"
            ],
            "surrogates": "🕝"
        },
        "clock330": {
            "name": "clock330",
            "names": [
                "clock330",
                "three_thirty"
            ],
            "surrogates": "🕞"
        },
        "clock430": {
            "name": "clock430",
            "names": [
                "clock430",
                "four_thirty"
            ],
            "surrogates": "🕟"
        },
        "clock530": {
            "name": "clock530",
            "names": [
                "clock530",
                "five_thirty"
            ],
            "surrogates": "🕠"
        },
        "clock630": {
            "name": "clock630",
            "names": [
                "clock630",
                "six_thirty"
            ],
            "surrogates": "🕡"
        },
        "clock730": {
            "name": "clock730",
            "names": [
                "clock730",
                "seven_thirty"
            ],
            "surrogates": "🕢"
        },
        "clock830": {
            "name": "clock830",
            "names": [
                "clock830",
                "eight_thirty"
            ],
            "surrogates": "🕣"
        },
        "clock930": {
            "name": "clock930",
            "names": [
                "clock930",
                "nine_thirty"
            ],
            "surrogates": "🕤"
        },
        "clock1030": {
            "name": "clock1030",
            "names": [
                "clock1030",
                "ten_thirty"
            ],
            "surrogates": "🕥"
        },
        "clock1130": {
            "name": "clock1130",
            "names": [
                "clock1130",
                "eleven_thirty"
            ],
            "surrogates": "🕦"
        },
        "clock1230": {
            "name": "clock1230",
            "names": [
                "clock1230",
                "twelve_thirty"
            ],
            "surrogates": "🕧"
        },
        "female_sign": {
            "name": "female_sign",
            "names": [
                "female_sign"
            ],
            "surrogates": "♀️"
        },
        "male_sign": {
            "name": "male_sign",
            "names": [
                "male_sign"
            ],
            "surrogates": "♂️"
        },
        "transgender_symbol": {
            "name": "transgender_symbol",
            "names": [
                "transgender_symbol"
            ],
            "surrogates": "⚧"
        },
        "medical_symbol": {
            "name": "medical_symbol",
            "names": [
                "medical_symbol"
            ],
            "surrogates": "⚕️"
        },
        "regional_indicator_z": {
            "name": "regional_indicator_z",
            "names": [
                "regional_indicator_z"
            ],
            "surrogates": "🇿"
        },
        "regional_indicator_y": {
            "name": "regional_indicator_y",
            "names": [
                "regional_indicator_y"
            ],
            "surrogates": "🇾"
        },
        "regional_indicator_x": {
            "name": "regional_indicator_x",
            "names": [
                "regional_indicator_x"
            ],
            "surrogates": "🇽"
        },
        "regional_indicator_w": {
            "name": "regional_indicator_w",
            "names": [
                "regional_indicator_w"
            ],
            "surrogates": "🇼"
        },
        "regional_indicator_v": {
            "name": "regional_indicator_v",
            "names": [
                "regional_indicator_v"
            ],
            "surrogates": "🇻"
        },
        "regional_indicator_u": {
            "name": "regional_indicator_u",
            "names": [
                "regional_indicator_u"
            ],
            "surrogates": "🇺"
        },
        "regional_indicator_t": {
            "name": "regional_indicator_t",
            "names": [
                "regional_indicator_t"
            ],
            "surrogates": "🇹"
        },
        "regional_indicator_s": {
            "name": "regional_indicator_s",
            "names": [
                "regional_indicator_s"
            ],
            "surrogates": "🇸"
        },
        "regional_indicator_r": {
            "name": "regional_indicator_r",
            "names": [
                "regional_indicator_r"
            ],
            "surrogates": "🇷"
        },
        "regional_indicator_q": {
            "name": "regional_indicator_q",
            "names": [
                "regional_indicator_q"
            ],
            "surrogates": "🇶"
        },
        "regional_indicator_p": {
            "name": "regional_indicator_p",
            "names": [
                "regional_indicator_p"
            ],
            "surrogates": "🇵"
        },
        "regional_indicator_o": {
            "name": "regional_indicator_o",
            "names": [
                "regional_indicator_o"
            ],
            "surrogates": "🇴"
        },
        "regional_indicator_n": {
            "name": "regional_indicator_n",
            "names": [
                "regional_indicator_n"
            ],
            "surrogates": "🇳"
        },
        "regional_indicator_m": {
            "name": "regional_indicator_m",
            "names": [
                "regional_indicator_m"
            ],
            "surrogates": "🇲"
        },
        "regional_indicator_l": {
            "name": "regional_indicator_l",
            "names": [
                "regional_indicator_l"
            ],
            "surrogates": "🇱"
        },
        "regional_indicator_k": {
            "name": "regional_indicator_k",
            "names": [
                "regional_indicator_k"
            ],
            "surrogates": "🇰"
        },
        "regional_indicator_j": {
            "name": "regional_indicator_j",
            "names": [
                "regional_indicator_j"
            ],
            "surrogates": "🇯"
        },
        "regional_indicator_i": {
            "name": "regional_indicator_i",
            "names": [
                "regional_indicator_i"
            ],
            "surrogates": "🇮"
        },
        "regional_indicator_h": {
            "name": "regional_indicator_h",
            "names": [
                "regional_indicator_h"
            ],
            "surrogates": "🇭"
        },
        "regional_indicator_g": {
            "name": "regional_indicator_g",
            "names": [
                "regional_indicator_g"
            ],
            "surrogates": "🇬"
        },
        "regional_indicator_f": {
            "name": "regional_indicator_f",
            "names": [
                "regional_indicator_f"
            ],
            "surrogates": "🇫"
        },
        "regional_indicator_e": {
            "name": "regional_indicator_e",
            "names": [
                "regional_indicator_e"
            ],
            "surrogates": "🇪"
        },
        "regional_indicator_d": {
            "name": "regional_indicator_d",
            "names": [
                "regional_indicator_d"
            ],
            "surrogates": "🇩"
        },
        "regional_indicator_c": {
            "name": "regional_indicator_c",
            "names": [
                "regional_indicator_c"
            ],
            "surrogates": "🇨"
        },
        "regional_indicator_b": {
            "name": "regional_indicator_b",
            "names": [
                "regional_indicator_b"
            ],
            "surrogates": "🇧"
        },
        "regional_indicator_a": {
            "name": "regional_indicator_a",
            "names": [
                "regional_indicator_a"
            ],
            "surrogates": "🇦"
        }
    },
    "flags": {
        "flag_white": {
            "name": "flag_white",
            "names": [
                "flag_white"
            ],
            "surrogates": "🏳️"
        },
        "flag_black": {
            "name": "flag_black",
            "names": [
                "flag_black"
            ],
            "surrogates": "🏴"
        },
        "pirate_flag": {
            "name": "pirate_flag",
            "names": [
                "pirate_flag"
            ],
            "surrogates": "🏴‍☠️"
        },
        "checkered_flag": {
            "name": "checkered_flag",
            "names": [
                "checkered_flag"
            ],
            "surrogates": "🏁"
        },
        "triangular_flag_on_post": {
            "name": "triangular_flag_on_post",
            "names": [
                "triangular_flag_on_post"
            ],
            "surrogates": "🚩"
        },
        "rainbow_flag": {
            "name": "rainbow_flag",
            "names": [
                "rainbow_flag",
                "gay_pride_flag"
            ],
            "surrogates": "🏳️‍🌈"
        },
        "transgender_flag": {
            "name": "transgender_flag",
            "names": [
                "transgender_flag"
            ],
            "surrogates": "🏳️‍⚧️"
        },
        "united_nations": {
            "name": "united_nations",
            "names": [
                "united_nations"
            ],
            "surrogates": "🇺🇳"
        },
        "flag_af": {
            "name": "flag_af",
            "names": [
                "flag_af"
            ],
            "surrogates": "🇦🇫"
        },
        "flag_ax": {
            "name": "flag_ax",
            "names": [
                "flag_ax"
            ],
            "surrogates": "🇦🇽"
        },
        "flag_al": {
            "name": "flag_al",
            "names": [
                "flag_al"
            ],
            "surrogates": "🇦🇱"
        },
        "flag_dz": {
            "name": "flag_dz",
            "names": [
                "flag_dz"
            ],
            "surrogates": "🇩🇿"
        },
        "flag_as": {
            "name": "flag_as",
            "names": [
                "flag_as"
            ],
            "surrogates": "🇦🇸"
        },
        "flag_ad": {
            "name": "flag_ad",
            "names": [
                "flag_ad"
            ],
            "surrogates": "🇦🇩"
        },
        "flag_ao": {
            "name": "flag_ao",
            "names": [
                "flag_ao"
            ],
            "surrogates": "🇦🇴"
        },
        "flag_ai": {
            "name": "flag_ai",
            "names": [
                "flag_ai"
            ],
            "surrogates": "🇦🇮"
        },
        "flag_aq": {
            "name": "flag_aq",
            "names": [
                "flag_aq"
            ],
            "surrogates": "🇦🇶"
        },
        "flag_ag": {
            "name": "flag_ag",
            "names": [
                "flag_ag"
            ],
            "surrogates": "🇦🇬"
        },
        "flag_ar": {
            "name": "flag_ar",
            "names": [
                "flag_ar"
            ],
            "surrogates": "🇦🇷"
        },
        "flag_am": {
            "name": "flag_am",
            "names": [
                "flag_am"
            ],
            "surrogates": "🇦🇲"
        },
        "flag_aw": {
            "name": "flag_aw",
            "names": [
                "flag_aw"
            ],
            "surrogates": "🇦🇼"
        },
        "flag_au": {
            "name": "flag_au",
            "names": [
                "flag_au"
            ],
            "surrogates": "🇦🇺"
        },
        "flag_at": {
            "name": "flag_at",
            "names": [
                "flag_at"
            ],
            "surrogates": "🇦🇹"
        },
        "flag_az": {
            "name": "flag_az",
            "names": [
                "flag_az"
            ],
            "surrogates": "🇦🇿"
        },
        "flag_bs": {
            "name": "flag_bs",
            "names": [
                "flag_bs"
            ],
            "surrogates": "🇧🇸"
        },
        "flag_bh": {
            "name": "flag_bh",
            "names": [
                "flag_bh"
            ],
            "surrogates": "🇧🇭"
        },
        "flag_bd": {
            "name": "flag_bd",
            "names": [
                "flag_bd"
            ],
            "surrogates": "🇧🇩"
        },
        "flag_bb": {
            "name": "flag_bb",
            "names": [
                "flag_bb"
            ],
            "surrogates": "🇧🇧"
        },
        "flag_by": {
            "name": "flag_by",
            "names": [
                "flag_by"
            ],
            "surrogates": "🇧🇾"
        },
        "flag_be": {
            "name": "flag_be",
            "names": [
                "flag_be"
            ],
            "surrogates": "🇧🇪"
        },
        "flag_bz": {
            "name": "flag_bz",
            "names": [
                "flag_bz"
            ],
            "surrogates": "🇧🇿"
        },
        "flag_bj": {
            "name": "flag_bj",
            "names": [
                "flag_bj"
            ],
            "surrogates": "🇧🇯"
        },
        "flag_bm": {
            "name": "flag_bm",
            "names": [
                "flag_bm"
            ],
            "surrogates": "🇧🇲"
        },
        "flag_bt": {
            "name": "flag_bt",
            "names": [
                "flag_bt"
            ],
            "surrogates": "🇧🇹"
        },
        "flag_bo": {
            "name": "flag_bo",
            "names": [
                "flag_bo"
            ],
            "surrogates": "🇧🇴"
        },
        "flag_ba": {
            "name": "flag_ba",
            "names": [
                "flag_ba"
            ],
            "surrogates": "🇧🇦"
        },
        "flag_bw": {
            "name": "flag_bw",
            "names": [
                "flag_bw"
            ],
            "surrogates": "🇧🇼"
        },
        "flag_br": {
            "name": "flag_br",
            "names": [
                "flag_br"
            ],
            "surrogates": "🇧🇷"
        },
        "flag_io": {
            "name": "flag_io",
            "names": [
                "flag_io"
            ],
            "surrogates": "🇮🇴"
        },
        "flag_vg": {
            "name": "flag_vg",
            "names": [
                "flag_vg"
            ],
            "surrogates": "🇻🇬"
        },
        "flag_bn": {
            "name": "flag_bn",
            "names": [
                "flag_bn"
            ],
            "surrogates": "🇧🇳"
        },
        "flag_bg": {
            "name": "flag_bg",
            "names": [
                "flag_bg"
            ],
            "surrogates": "🇧🇬"
        },
        "flag_bf": {
            "name": "flag_bf",
            "names": [
                "flag_bf"
            ],
            "surrogates": "🇧🇫"
        },
        "flag_bi": {
            "name": "flag_bi",
            "names": [
                "flag_bi"
            ],
            "surrogates": "🇧🇮"
        },
        "flag_kh": {
            "name": "flag_kh",
            "names": [
                "flag_kh"
            ],
            "surrogates": "🇰🇭"
        },
        "flag_cm": {
            "name": "flag_cm",
            "names": [
                "flag_cm"
            ],
            "surrogates": "🇨🇲"
        },
        "flag_ca": {
            "name": "flag_ca",
            "names": [
                "flag_ca"
            ],
            "surrogates": "🇨🇦"
        },
        "flag_ic": {
            "name": "flag_ic",
            "names": [
                "flag_ic"
            ],
            "surrogates": "🇮🇨"
        },
        "flag_cv": {
            "name": "flag_cv",
            "names": [
                "flag_cv"
            ],
            "surrogates": "🇨🇻"
        },
        "flag_bq": {
            "name": "flag_bq",
            "names": [
                "flag_bq"
            ],
            "surrogates": "🇧🇶"
        },
        "flag_ky": {
            "name": "flag_ky",
            "names": [
                "flag_ky"
            ],
            "surrogates": "🇰🇾"
        },
        "flag_cf": {
            "name": "flag_cf",
            "names": [
                "flag_cf"
            ],
            "surrogates": "🇨🇫"
        },
        "flag_td": {
            "name": "flag_td",
            "names": [
                "flag_td"
            ],
            "surrogates": "🇹🇩"
        },
        "flag_cl": {
            "name": "flag_cl",
            "names": [
                "flag_cl"
            ],
            "surrogates": "🇨🇱"
        },
        "flag_cn": {
            "name": "flag_cn",
            "names": [
                "flag_cn"
            ],
            "surrogates": "🇨🇳"
        },
        "flag_cx": {
            "name": "flag_cx",
            "names": [
                "flag_cx"
            ],
            "surrogates": "🇨🇽"
        },
        "flag_cc": {
            "name": "flag_cc",
            "names": [
                "flag_cc"
            ],
            "surrogates": "🇨🇨"
        },
        "flag_co": {
            "name": "flag_co",
            "names": [
                "flag_co"
            ],
            "surrogates": "🇨🇴"
        },
        "flag_km": {
            "name": "flag_km",
            "names": [
                "flag_km"
            ],
            "surrogates": "🇰🇲"
        },
        "flag_cg": {
            "name": "flag_cg",
            "names": [
                "flag_cg"
            ],
            "surrogates": "🇨🇬"
        },
        "flag_cd": {
            "name": "flag_cd",
            "names": [
                "flag_cd"
            ],
            "surrogates": "🇨🇩"
        },
        "flag_ck": {
            "name": "flag_ck",
            "names": [
                "flag_ck"
            ],
            "surrogates": "🇨🇰"
        },
        "flag_cr": {
            "name": "flag_cr",
            "names": [
                "flag_cr"
            ],
            "surrogates": "🇨🇷"
        },
        "flag_ci": {
            "name": "flag_ci",
            "names": [
                "flag_ci"
            ],
            "surrogates": "🇨🇮"
        },
        "flag_hr": {
            "name": "flag_hr",
            "names": [
                "flag_hr"
            ],
            "surrogates": "🇭🇷"
        },
        "flag_cu": {
            "name": "flag_cu",
            "names": [
                "flag_cu"
            ],
            "surrogates": "🇨🇺"
        },
        "flag_cw": {
            "name": "flag_cw",
            "names": [
                "flag_cw"
            ],
            "surrogates": "🇨🇼"
        },
        "flag_cy": {
            "name": "flag_cy",
            "names": [
                "flag_cy"
            ],
            "surrogates": "🇨🇾"
        },
        "flag_cz": {
            "name": "flag_cz",
            "names": [
                "flag_cz"
            ],
            "surrogates": "🇨🇿"
        },
        "flag_dk": {
            "name": "flag_dk",
            "names": [
                "flag_dk"
            ],
            "surrogates": "🇩🇰"
        },
        "flag_dj": {
            "name": "flag_dj",
            "names": [
                "flag_dj"
            ],
            "surrogates": "🇩🇯"
        },
        "flag_dm": {
            "name": "flag_dm",
            "names": [
                "flag_dm"
            ],
            "surrogates": "🇩🇲"
        },
        "flag_do": {
            "name": "flag_do",
            "names": [
                "flag_do"
            ],
            "surrogates": "🇩🇴"
        },
        "flag_ec": {
            "name": "flag_ec",
            "names": [
                "flag_ec"
            ],
            "surrogates": "🇪🇨"
        },
        "flag_eg": {
            "name": "flag_eg",
            "names": [
                "flag_eg"
            ],
            "surrogates": "🇪🇬"
        },
        "flag_sv": {
            "name": "flag_sv",
            "names": [
                "flag_sv"
            ],
            "surrogates": "🇸🇻"
        },
        "flag_gq": {
            "name": "flag_gq",
            "names": [
                "flag_gq"
            ],
            "surrogates": "🇬🇶"
        },
        "flag_er": {
            "name": "flag_er",
            "names": [
                "flag_er"
            ],
            "surrogates": "🇪🇷"
        },
        "flag_ee": {
            "name": "flag_ee",
            "names": [
                "flag_ee"
            ],
            "surrogates": "🇪🇪"
        },
        "flag_et": {
            "name": "flag_et",
            "names": [
                "flag_et"
            ],
            "surrogates": "🇪🇹"
        },
        "flag_eu": {
            "name": "flag_eu",
            "names": [
                "flag_eu"
            ],
            "surrogates": "🇪🇺"
        },
        "flag_fk": {
            "name": "flag_fk",
            "names": [
                "flag_fk"
            ],
            "surrogates": "🇫🇰"
        },
        "flag_fo": {
            "name": "flag_fo",
            "names": [
                "flag_fo"
            ],
            "surrogates": "🇫🇴"
        },
        "flag_fj": {
            "name": "flag_fj",
            "names": [
                "flag_fj"
            ],
            "surrogates": "🇫🇯"
        },
        "flag_fi": {
            "name": "flag_fi",
            "names": [
                "flag_fi"
            ],
            "surrogates": "🇫🇮"
        },
        "flag_fr": {
            "name": "flag_fr",
            "names": [
                "flag_fr"
            ],
            "surrogates": "🇫🇷"
        },
        "flag_gf": {
            "name": "flag_gf",
            "names": [
                "flag_gf"
            ],
            "surrogates": "🇬🇫"
        },
        "flag_pf": {
            "name": "flag_pf",
            "names": [
                "flag_pf"
            ],
            "surrogates": "🇵🇫"
        },
        "flag_tf": {
            "name": "flag_tf",
            "names": [
                "flag_tf"
            ],
            "surrogates": "🇹🇫"
        },
        "flag_ga": {
            "name": "flag_ga",
            "names": [
                "flag_ga"
            ],
            "surrogates": "🇬🇦"
        },
        "flag_gm": {
            "name": "flag_gm",
            "names": [
                "flag_gm"
            ],
            "surrogates": "🇬🇲"
        },
        "flag_ge": {
            "name": "flag_ge",
            "names": [
                "flag_ge"
            ],
            "surrogates": "🇬🇪"
        },
        "flag_de": {
            "name": "flag_de",
            "names": [
                "flag_de"
            ],
            "surrogates": "🇩🇪"
        },
        "flag_gh": {
            "name": "flag_gh",
            "names": [
                "flag_gh"
            ],
            "surrogates": "🇬🇭"
        },
        "flag_gi": {
            "name": "flag_gi",
            "names": [
                "flag_gi"
            ],
            "surrogates": "🇬🇮"
        },
        "flag_gr": {
            "name": "flag_gr",
            "names": [
                "flag_gr"
            ],
            "surrogates": "🇬🇷"
        },
        "flag_gl": {
            "name": "flag_gl",
            "names": [
                "flag_gl"
            ],
            "surrogates": "🇬🇱"
        },
        "flag_gd": {
            "name": "flag_gd",
            "names": [
                "flag_gd"
            ],
            "surrogates": "🇬🇩"
        },
        "flag_gp": {
            "name": "flag_gp",
            "names": [
                "flag_gp"
            ],
            "surrogates": "🇬🇵"
        },
        "flag_gu": {
            "name": "flag_gu",
            "names": [
                "flag_gu"
            ],
            "surrogates": "🇬🇺"
        },
        "flag_gt": {
            "name": "flag_gt",
            "names": [
                "flag_gt"
            ],
            "surrogates": "🇬🇹"
        },
        "flag_gg": {
            "name": "flag_gg",
            "names": [
                "flag_gg"
            ],
            "surrogates": "🇬🇬"
        },
        "flag_gn": {
            "name": "flag_gn",
            "names": [
                "flag_gn"
            ],
            "surrogates": "🇬🇳"
        },
        "flag_gw": {
            "name": "flag_gw",
            "names": [
                "flag_gw"
            ],
            "surrogates": "🇬🇼"
        },
        "flag_gy": {
            "name": "flag_gy",
            "names": [
                "flag_gy"
            ],
            "surrogates": "🇬🇾"
        },
        "flag_ht": {
            "name": "flag_ht",
            "names": [
                "flag_ht"
            ],
            "surrogates": "🇭🇹"
        },
        "flag_hn": {
            "name": "flag_hn",
            "names": [
                "flag_hn"
            ],
            "surrogates": "🇭🇳"
        },
        "flag_hk": {
            "name": "flag_hk",
            "names": [
                "flag_hk"
            ],
            "surrogates": "🇭🇰"
        },
        "flag_hu": {
            "name": "flag_hu",
            "names": [
                "flag_hu"
            ],
            "surrogates": "🇭🇺"
        },
        "flag_is": {
            "name": "flag_is",
            "names": [
                "flag_is"
            ],
            "surrogates": "🇮🇸"
        },
        "flag_in": {
            "name": "flag_in",
            "names": [
                "flag_in"
            ],
            "surrogates": "🇮🇳"
        },
        "flag_id": {
            "name": "flag_id",
            "names": [
                "flag_id"
            ],
            "surrogates": "🇮🇩"
        },
        "flag_ir": {
            "name": "flag_ir",
            "names": [
                "flag_ir"
            ],
            "surrogates": "🇮🇷"
        },
        "flag_iq": {
            "name": "flag_iq",
            "names": [
                "flag_iq"
            ],
            "surrogates": "🇮🇶"
        },
        "flag_ie": {
            "name": "flag_ie",
            "names": [
                "flag_ie"
            ],
            "surrogates": "🇮🇪"
        },
        "flag_im": {
            "name": "flag_im",
            "names": [
                "flag_im"
            ],
            "surrogates": "🇮🇲"
        },
        "flag_il": {
            "name": "flag_il",
            "names": [
                "flag_il"
            ],
            "surrogates": "🇮🇱"
        },
        "flag_it": {
            "name": "flag_it",
            "names": [
                "flag_it"
            ],
            "surrogates": "🇮🇹"
        },
        "flag_jm": {
            "name": "flag_jm",
            "names": [
                "flag_jm"
            ],
            "surrogates": "🇯🇲"
        },
        "flag_jp": {
            "name": "flag_jp",
            "names": [
                "flag_jp"
            ],
            "surrogates": "🇯🇵"
        },
        "crossed_flags": {
            "name": "crossed_flags",
            "names": [
                "crossed_flags"
            ],
            "surrogates": "🎌"
        },
        "flag_je": {
            "name": "flag_je",
            "names": [
                "flag_je"
            ],
            "surrogates": "🇯🇪"
        },
        "flag_jo": {
            "name": "flag_jo",
            "names": [
                "flag_jo"
            ],
            "surrogates": "🇯🇴"
        },
        "flag_kz": {
            "name": "flag_kz",
            "names": [
                "flag_kz"
            ],
            "surrogates": "🇰🇿"
        },
        "flag_ke": {
            "name": "flag_ke",
            "names": [
                "flag_ke"
            ],
            "surrogates": "🇰🇪"
        },
        "flag_ki": {
            "name": "flag_ki",
            "names": [
                "flag_ki"
            ],
            "surrogates": "🇰🇮"
        },
        "flag_xk": {
            "name": "flag_xk",
            "names": [
                "flag_xk"
            ],
            "surrogates": "🇽🇰"
        },
        "flag_kw": {
            "name": "flag_kw",
            "names": [
                "flag_kw"
            ],
            "surrogates": "🇰🇼"
        },
        "flag_kg": {
            "name": "flag_kg",
            "names": [
                "flag_kg"
            ],
            "surrogates": "🇰🇬"
        },
        "flag_la": {
            "name": "flag_la",
            "names": [
                "flag_la"
            ],
            "surrogates": "🇱🇦"
        },
        "flag_lv": {
            "name": "flag_lv",
            "names": [
                "flag_lv"
            ],
            "surrogates": "🇱🇻"
        },
        "flag_lb": {
            "name": "flag_lb",
            "names": [
                "flag_lb"
            ],
            "surrogates": "🇱🇧"
        },
        "flag_ls": {
            "name": "flag_ls",
            "names": [
                "flag_ls"
            ],
            "surrogates": "🇱🇸"
        },
        "flag_lr": {
            "name": "flag_lr",
            "names": [
                "flag_lr"
            ],
            "surrogates": "🇱🇷"
        },
        "flag_ly": {
            "name": "flag_ly",
            "names": [
                "flag_ly"
            ],
            "surrogates": "🇱🇾"
        },
        "flag_li": {
            "name": "flag_li",
            "names": [
                "flag_li"
            ],
            "surrogates": "🇱🇮"
        },
        "flag_lt": {
            "name": "flag_lt",
            "names": [
                "flag_lt"
            ],
            "surrogates": "🇱🇹"
        },
        "flag_lu": {
            "name": "flag_lu",
            "names": [
                "flag_lu"
            ],
            "surrogates": "🇱🇺"
        },
        "flag_mo": {
            "name": "flag_mo",
            "names": [
                "flag_mo"
            ],
            "surrogates": "🇲🇴"
        },
        "flag_mk": {
            "name": "flag_mk",
            "names": [
                "flag_mk"
            ],
            "surrogates": "🇲🇰"
        },
        "flag_mg": {
            "name": "flag_mg",
            "names": [
                "flag_mg"
            ],
            "surrogates": "🇲🇬"
        },
        "flag_mw": {
            "name": "flag_mw",
            "names": [
                "flag_mw"
            ],
            "surrogates": "🇲🇼"
        },
        "flag_my": {
            "name": "flag_my",
            "names": [
                "flag_my"
            ],
            "surrogates": "🇲🇾"
        },
        "flag_mv": {
            "name": "flag_mv",
            "names": [
                "flag_mv"
            ],
            "surrogates": "🇲🇻"
        },
        "flag_ml": {
            "name": "flag_ml",
            "names": [
                "flag_ml"
            ],
            "surrogates": "🇲🇱"
        },
        "flag_mt": {
            "name": "flag_mt",
            "names": [
                "flag_mt"
            ],
            "surrogates": "🇲🇹"
        },
        "flag_mh": {
            "name": "flag_mh",
            "names": [
                "flag_mh"
            ],
            "surrogates": "🇲🇭"
        },
        "flag_mq": {
            "name": "flag_mq",
            "names": [
                "flag_mq"
            ],
            "surrogates": "🇲🇶"
        },
        "flag_mr": {
            "name": "flag_mr",
            "names": [
                "flag_mr"
            ],
            "surrogates": "🇲🇷"
        },
        "flag_mu": {
            "name": "flag_mu",
            "names": [
                "flag_mu"
            ],
            "surrogates": "🇲🇺"
        },
        "flag_yt": {
            "name": "flag_yt",
            "names": [
                "flag_yt"
            ],
            "surrogates": "🇾🇹"
        },
        "flag_mx": {
            "name": "flag_mx",
            "names": [
                "flag_mx"
            ],
            "surrogates": "🇲🇽"
        },
        "flag_fm": {
            "name": "flag_fm",
            "names": [
                "flag_fm"
            ],
            "surrogates": "🇫🇲"
        },
        "flag_md": {
            "name": "flag_md",
            "names": [
                "flag_md"
            ],
            "surrogates": "🇲🇩"
        },
        "flag_mc": {
            "name": "flag_mc",
            "names": [
                "flag_mc"
            ],
            "surrogates": "🇲🇨"
        },
        "flag_mn": {
            "name": "flag_mn",
            "names": [
                "flag_mn"
            ],
            "surrogates": "🇲🇳"
        },
        "flag_me": {
            "name": "flag_me",
            "names": [
                "flag_me"
            ],
            "surrogates": "🇲🇪"
        },
        "flag_ms": {
            "name": "flag_ms",
            "names": [
                "flag_ms"
            ],
            "surrogates": "🇲🇸"
        },
        "flag_ma": {
            "name": "flag_ma",
            "names": [
                "flag_ma"
            ],
            "surrogates": "🇲🇦"
        },
        "flag_mz": {
            "name": "flag_mz",
            "names": [
                "flag_mz"
            ],
            "surrogates": "🇲🇿"
        },
        "flag_mm": {
            "name": "flag_mm",
            "names": [
                "flag_mm"
            ],
            "surrogates": "🇲🇲"
        },
        "flag_na": {
            "name": "flag_na",
            "names": [
                "flag_na"
            ],
            "surrogates": "🇳🇦"
        },
        "flag_nr": {
            "name": "flag_nr",
            "names": [
                "flag_nr"
            ],
            "surrogates": "🇳🇷"
        },
        "flag_np": {
            "name": "flag_np",
            "names": [
                "flag_np"
            ],
            "surrogates": "🇳🇵"
        },
        "flag_nl": {
            "name": "flag_nl",
            "names": [
                "flag_nl"
            ],
            "surrogates": "🇳🇱"
        },
        "flag_nc": {
            "name": "flag_nc",
            "names": [
                "flag_nc"
            ],
            "surrogates": "🇳🇨"
        },
        "flag_nz": {
            "name": "flag_nz",
            "names": [
                "flag_nz"
            ],
            "surrogates": "🇳🇿"
        },
        "flag_ni": {
            "name": "flag_ni",
            "names": [
                "flag_ni"
            ],
            "surrogates": "🇳🇮"
        },
        "flag_ne": {
            "name": "flag_ne",
            "names": [
                "flag_ne"
            ],
            "surrogates": "🇳🇪"
        },
        "flag_ng": {
            "name": "flag_ng",
            "names": [
                "flag_ng"
            ],
            "surrogates": "🇳🇬"
        },
        "flag_nu": {
            "name": "flag_nu",
            "names": [
                "flag_nu"
            ],
            "surrogates": "🇳🇺"
        },
        "flag_nf": {
            "name": "flag_nf",
            "names": [
                "flag_nf"
            ],
            "surrogates": "🇳🇫"
        },
        "flag_kp": {
            "name": "flag_kp",
            "names": [
                "flag_kp"
            ],
            "surrogates": "🇰🇵"
        },
        "flag_mp": {
            "name": "flag_mp",
            "names": [
                "flag_mp"
            ],
            "surrogates": "🇲🇵"
        },
        "flag_no": {
            "name": "flag_no",
            "names": [
                "flag_no"
            ],
            "surrogates": "🇳🇴"
        },
        "flag_om": {
            "name": "flag_om",
            "names": [
                "flag_om"
            ],
            "surrogates": "🇴🇲"
        },
        "flag_pk": {
            "name": "flag_pk",
            "names": [
                "flag_pk"
            ],
            "surrogates": "🇵🇰"
        },
        "flag_pw": {
            "name": "flag_pw",
            "names": [
                "flag_pw"
            ],
            "surrogates": "🇵🇼"
        },
        "flag_ps": {
            "name": "flag_ps",
            "names": [
                "flag_ps"
            ],
            "surrogates": "🇵🇸"
        },
        "flag_pa": {
            "name": "flag_pa",
            "names": [
                "flag_pa"
            ],
            "surrogates": "🇵🇦"
        },
        "flag_pg": {
            "name": "flag_pg",
            "names": [
                "flag_pg"
            ],
            "surrogates": "🇵🇬"
        },
        "flag_py": {
            "name": "flag_py",
            "names": [
                "flag_py"
            ],
            "surrogates": "🇵🇾"
        },
        "flag_pe": {
            "name": "flag_pe",
            "names": [
                "flag_pe"
            ],
            "surrogates": "🇵🇪"
        },
        "flag_ph": {
            "name": "flag_ph",
            "names": [
                "flag_ph"
            ],
            "surrogates": "🇵🇭"
        },
        "flag_pn": {
            "name": "flag_pn",
            "names": [
                "flag_pn"
            ],
            "surrogates": "🇵🇳"
        },
        "flag_pl": {
            "name": "flag_pl",
            "names": [
                "flag_pl"
            ],
            "surrogates": "🇵🇱"
        },
        "flag_pt": {
            "name": "flag_pt",
            "names": [
                "flag_pt"
            ],
            "surrogates": "🇵🇹"
        },
        "flag_pr": {
            "name": "flag_pr",
            "names": [
                "flag_pr"
            ],
            "surrogates": "🇵🇷"
        },
        "flag_qa": {
            "name": "flag_qa",
            "names": [
                "flag_qa"
            ],
            "surrogates": "🇶🇦"
        },
        "flag_re": {
            "name": "flag_re",
            "names": [
                "flag_re"
            ],
            "surrogates": "🇷🇪"
        },
        "flag_ro": {
            "name": "flag_ro",
            "names": [
                "flag_ro"
            ],
            "surrogates": "🇷🇴"
        },
        "flag_ru": {
            "name": "flag_ru",
            "names": [
                "flag_ru"
            ],
            "surrogates": "🇷🇺"
        },
        "flag_rw": {
            "name": "flag_rw",
            "names": [
                "flag_rw"
            ],
            "surrogates": "🇷🇼"
        },
        "flag_ws": {
            "name": "flag_ws",
            "names": [
                "flag_ws"
            ],
            "surrogates": "🇼🇸"
        },
        "flag_sm": {
            "name": "flag_sm",
            "names": [
                "flag_sm"
            ],
            "surrogates": "🇸🇲"
        },
        "flag_st": {
            "name": "flag_st",
            "names": [
                "flag_st"
            ],
            "surrogates": "🇸🇹"
        },
        "flag_sa": {
            "name": "flag_sa",
            "names": [
                "flag_sa"
            ],
            "surrogates": "🇸🇦"
        },
        "flag_sn": {
            "name": "flag_sn",
            "names": [
                "flag_sn"
            ],
            "surrogates": "🇸🇳"
        },
        "flag_rs": {
            "name": "flag_rs",
            "names": [
                "flag_rs"
            ],
            "surrogates": "🇷🇸"
        },
        "flag_sc": {
            "name": "flag_sc",
            "names": [
                "flag_sc"
            ],
            "surrogates": "🇸🇨"
        },
        "flag_sl": {
            "name": "flag_sl",
            "names": [
                "flag_sl"
            ],
            "surrogates": "🇸🇱"
        },
        "flag_sg": {
            "name": "flag_sg",
            "names": [
                "flag_sg"
            ],
            "surrogates": "🇸🇬"
        },
        "flag_sx": {
            "name": "flag_sx",
            "names": [
                "flag_sx"
            ],
            "surrogates": "🇸🇽"
        },
        "flag_sk": {
            "name": "flag_sk",
            "names": [
                "flag_sk"
            ],
            "surrogates": "🇸🇰"
        },
        "flag_si": {
            "name": "flag_si",
            "names": [
                "flag_si"
            ],
            "surrogates": "🇸🇮"
        },
        "flag_gs": {
            "name": "flag_gs",
            "names": [
                "flag_gs"
            ],
            "surrogates": "🇬🇸"
        },
        "flag_sb": {
            "name": "flag_sb",
            "names": [
                "flag_sb"
            ],
            "surrogates": "🇸🇧"
        },
        "flag_so": {
            "name": "flag_so",
            "names": [
                "flag_so"
            ],
            "surrogates": "🇸🇴"
        },
        "flag_za": {
            "name": "flag_za",
            "names": [
                "flag_za"
            ],
            "surrogates": "🇿🇦"
        },
        "flag_kr": {
            "name": "flag_kr",
            "names": [
                "flag_kr"
            ],
            "surrogates": "🇰🇷"
        },
        "flag_ss": {
            "name": "flag_ss",
            "names": [
                "flag_ss"
            ],
            "surrogates": "🇸🇸"
        },
        "flag_es": {
            "name": "flag_es",
            "names": [
                "flag_es"
            ],
            "surrogates": "🇪🇸"
        },
        "flag_lk": {
            "name": "flag_lk",
            "names": [
                "flag_lk"
            ],
            "surrogates": "🇱🇰"
        },
        "flag_bl": {
            "name": "flag_bl",
            "names": [
                "flag_bl"
            ],
            "surrogates": "🇧🇱"
        },
        "flag_sh": {
            "name": "flag_sh",
            "names": [
                "flag_sh"
            ],
            "surrogates": "🇸🇭"
        },
        "flag_kn": {
            "name": "flag_kn",
            "names": [
                "flag_kn"
            ],
            "surrogates": "🇰🇳"
        },
        "flag_lc": {
            "name": "flag_lc",
            "names": [
                "flag_lc"
            ],
            "surrogates": "🇱🇨"
        },
        "flag_pm": {
            "name": "flag_pm",
            "names": [
                "flag_pm"
            ],
            "surrogates": "🇵🇲"
        },
        "flag_vc": {
            "name": "flag_vc",
            "names": [
                "flag_vc"
            ],
            "surrogates": "🇻🇨"
        },
        "flag_sd": {
            "name": "flag_sd",
            "names": [
                "flag_sd"
            ],
            "surrogates": "🇸🇩"
        },
        "flag_sr": {
            "name": "flag_sr",
            "names": [
                "flag_sr"
            ],
            "surrogates": "🇸🇷"
        },
        "flag_sz": {
            "name": "flag_sz",
            "names": [
                "flag_sz"
            ],
            "surrogates": "🇸🇿"
        },
        "flag_se": {
            "name": "flag_se",
            "names": [
                "flag_se"
            ],
            "surrogates": "🇸🇪"
        },
        "flag_ch": {
            "name": "flag_ch",
            "names": [
                "flag_ch"
            ],
            "surrogates": "🇨🇭"
        },
        "flag_sy": {
            "name": "flag_sy",
            "names": [
                "flag_sy"
            ],
            "surrogates": "🇸🇾"
        },
        "flag_tw": {
            "name": "flag_tw",
            "names": [
                "flag_tw"
            ],
            "surrogates": "🇹🇼"
        },
        "flag_tj": {
            "name": "flag_tj",
            "names": [
                "flag_tj"
            ],
            "surrogates": "🇹🇯"
        },
        "flag_tz": {
            "name": "flag_tz",
            "names": [
                "flag_tz"
            ],
            "surrogates": "🇹🇿"
        },
        "flag_th": {
            "name": "flag_th",
            "names": [
                "flag_th"
            ],
            "surrogates": "🇹🇭"
        },
        "flag_tl": {
            "name": "flag_tl",
            "names": [
                "flag_tl"
            ],
            "surrogates": "🇹🇱"
        },
        "flag_tg": {
            "name": "flag_tg",
            "names": [
                "flag_tg"
            ],
            "surrogates": "🇹🇬"
        },
        "flag_tk": {
            "name": "flag_tk",
            "names": [
                "flag_tk"
            ],
            "surrogates": "🇹🇰"
        },
        "flag_to": {
            "name": "flag_to",
            "names": [
                "flag_to"
            ],
            "surrogates": "🇹🇴"
        },
        "flag_tt": {
            "name": "flag_tt",
            "names": [
                "flag_tt"
            ],
            "surrogates": "🇹🇹"
        },
        "flag_tn": {
            "name": "flag_tn",
            "names": [
                "flag_tn"
            ],
            "surrogates": "🇹🇳"
        },
        "flag_tr": {
            "name": "flag_tr",
            "names": [
                "flag_tr"
            ],
            "surrogates": "🇹🇷"
        },
        "flag_tm": {
            "name": "flag_tm",
            "names": [
                "flag_tm"
            ],
            "surrogates": "🇹🇲"
        },
        "flag_tc": {
            "name": "flag_tc",
            "names": [
                "flag_tc"
            ],
            "surrogates": "🇹🇨"
        },
        "flag_vi": {
            "name": "flag_vi",
            "names": [
                "flag_vi"
            ],
            "surrogates": "🇻🇮"
        },
        "flag_tv": {
            "name": "flag_tv",
            "names": [
                "flag_tv"
            ],
            "surrogates": "🇹🇻"
        },
        "flag_ug": {
            "name": "flag_ug",
            "names": [
                "flag_ug"
            ],
            "surrogates": "🇺🇬"
        },
        "flag_ua": {
            "name": "flag_ua",
            "names": [
                "flag_ua"
            ],
            "surrogates": "🇺🇦"
        },
        "flag_ae": {
            "name": "flag_ae",
            "names": [
                "flag_ae"
            ],
            "surrogates": "🇦🇪"
        },
        "flag_gb": {
            "name": "flag_gb",
            "names": [
                "flag_gb"
            ],
            "surrogates": "🇬🇧"
        },
        "england": {
            "name": "england",
            "names": [
                "england"
            ],
            "surrogates": "🏴󠁧󠁢󠁥󠁮󠁧󠁿"
        },
        "scotland": {
            "name": "scotland",
            "names": [
                "scotland"
            ],
            "surrogates": "🏴󠁧󠁢󠁳󠁣󠁴󠁿"
        },
        "wales": {
            "name": "wales",
            "names": [
                "wales"
            ],
            "surrogates": "🏴󠁧󠁢󠁷󠁬󠁳󠁿"
        },
        "flag_us": {
            "name": "flag_us",
            "names": [
                "flag_us"
            ],
            "surrogates": "🇺🇸"
        },
        "flag_uy": {
            "name": "flag_uy",
            "names": [
                "flag_uy"
            ],
            "surrogates": "🇺🇾"
        },
        "flag_uz": {
            "name": "flag_uz",
            "names": [
                "flag_uz"
            ],
            "surrogates": "🇺🇿"
        },
        "flag_vu": {
            "name": "flag_vu",
            "names": [
                "flag_vu"
            ],
            "surrogates": "🇻🇺"
        },
        "flag_va": {
            "name": "flag_va",
            "names": [
                "flag_va"
            ],
            "surrogates": "🇻🇦"
        },
        "flag_ve": {
            "name": "flag_ve",
            "names": [
                "flag_ve"
            ],
            "surrogates": "🇻🇪"
        },
        "flag_vn": {
            "name": "flag_vn",
            "names": [
                "flag_vn"
            ],
            "surrogates": "🇻🇳"
        },
        "flag_wf": {
            "name": "flag_wf",
            "names": [
                "flag_wf"
            ],
            "surrogates": "🇼🇫"
        },
        "flag_eh": {
            "name": "flag_eh",
            "names": [
                "flag_eh"
            ],
            "surrogates": "🇪🇭"
        },
        "flag_ye": {
            "name": "flag_ye",
            "names": [
                "flag_ye"
            ],
            "surrogates": "🇾🇪"
        },
        "flag_zm": {
            "name": "flag_zm",
            "names": [
                "flag_zm"
            ],
            "surrogates": "🇿🇲"
        },
        "flag_zw": {
            "name": "flag_zw",
            "names": [
                "flag_zw"
            ],
            "surrogates": "🇿🇼"
        },
        "flag_ac": {
            "name": "flag_ac",
            "names": [
                "flag_ac"
            ],
            "surrogates": "🇦🇨"
        },
        "flag_bv": {
            "name": "flag_bv",
            "names": [
                "flag_bv"
            ],
            "surrogates": "🇧🇻"
        },
        "flag_cp": {
            "name": "flag_cp",
            "names": [
                "flag_cp"
            ],
            "surrogates": "🇨🇵"
        },
        "flag_ea": {
            "name": "flag_ea",
            "names": [
                "flag_ea"
            ],
            "surrogates": "🇪🇦"
        },
        "flag_dg": {
            "name": "flag_dg",
            "names": [
                "flag_dg"
            ],
            "surrogates": "🇩🇬"
        },
        "flag_hm": {
            "name": "flag_hm",
            "names": [
                "flag_hm"
            ],
            "surrogates": "🇭🇲"
        },
        "flag_mf": {
            "name": "flag_mf",
            "names": [
                "flag_mf"
            ],
            "surrogates": "🇲🇫"
        },
        "flag_sj": {
            "name": "flag_sj",
            "names": [
                "flag_sj"
            ],
            "surrogates": "🇸🇯"
        },
        "flag_ta": {
            "name": "flag_ta",
            "names": [
                "flag_ta"
            ],
            "surrogates": "🇹🇦"
        },
        "flag_um": {
            "name": "flag_um",
            "names": [
                "flag_um"
            ],
            "surrogates": "🇺🇲"
        }
    }
} as const satisfies Record<string, BaseEmoji | EmojiWithDiversity>;