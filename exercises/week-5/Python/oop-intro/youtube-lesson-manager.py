class YouTubeLessonManager:
    def __init__(self):
        self.youtube_lesson = {}

    def get(self, lesson_name):
        name = lesson_name.replace(" ", "-").lower()
        return self.youtube_lesson[name]

    def save(self, lesson_name, lesson_link):
        name = lesson_name.replace(" ", "-").lower()
        self.youtube_lesson[name] = lesson_link


lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
lesson_manager.save(
    "While-Loops", "https://www.youtube.com/watch?v=6TEGxJXLAWQ")
lesson_manager.save("Functions", "https://www.youtube.com/watch?v=NSbOtYzIQI0")
lesson_manager.save(
    "Dictionaries", "https://www.youtube.com/watch?v=ZEZdys-fHDw")
# --------------------------------------
# outputs: 'https://www.youtube.com/watch?v=NSbOtYzIQI0'
print(lesson_manager.get("functions"))
# outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("for loops"))
lesson_manager.save
