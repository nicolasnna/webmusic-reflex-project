sidebar_style = dict(
    position="sticky",
    min_height="100vh",
    max_height="max-content",
    width="100%",    
    left="0px",
    z_index="5",
    padding_x="0",
    transition="width 2s",
    display="inline", 
)
print(sidebar_style)

sidebar_style.update({'left': 400})

print(sidebar_style)