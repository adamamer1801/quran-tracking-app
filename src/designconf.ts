const designconf = {
    "app": {
        "app_name": "Quran",
        "background_color": "#E3E3E3",
        "font": "Hind",

        "light_mode": {
            "text_color": "#000000",
            "background_color": "#E3E3E3"
        },

        "dark_mode": {
            "text_color": "#ffffff",
            "background_color": "#212529"
        }
    },
    "tab": {
        "background_color": "#101010",
        "property_active_color": "#fff",
        "property_inactive_color": "#fff",
        "property_icon_size": 24,
        "property_text_size": 16,
        "tabs": {
            "icons": {
                "active": {
                    "home": "home",
                    "quran": "book",
                    "settings": "settings",
                },
                "inactive": {
                    "home": "home-outline",
                    "quran": "book-outline",
                    "settings": "settings-outline", 
                }
            },
            "selected-bg-colors": {
                "home": "#2a9d8f",
                "quran": "#457b9d",
                "settings": "#1d3557"
            }
        }
    },
}

export default designconf;