import reflex as rx

class StateComponents(rx.State):
    show_card_info: bool = False
    extend_sidebar: bool = True
    grid_sidebar: str = "22% 78%"

    def change_card_info(self, state: bool):
        self.show_card_info = state

    def change_sidebar(self):
        self.extend_sidebar = not (self.extend_sidebar)
        if self.extend_sidebar:
            self.grid_sidebar = "22% 78%"
        else:
            self.grid_sidebar = "5% 95%"