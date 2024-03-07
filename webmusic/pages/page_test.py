import reflex as rx

class State(rx.State):
    @rx.var
    def post_id(self) -> str:
        return self.router.page.params.get("aa", "no pid")

@rx.page(route="/post/[aa]")
def post():
    """A page that updates based on the route."""
    return rx.heading(State.post_id)