from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.core.utils import ChromeType
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time
import random

chrome_service = Service(ChromeDriverManager(chrome_type=ChromeType.CHROMIUM).install())

chrome_options = Options()
options = [
    "--headless",
    "--disable-gpu",
    "--window-size=1920,1200",
    "--ignore-certificate-errors",
    "--disable-extensions",
    "--no-sandbox",
    "--disable-dev-shm-usage"
]
for option in options:
    chrome_options.add_argument(option)

driver = webdriver.Chrome(service=chrome_service, options=chrome_options)
driver.implicitly_wait(10) # seconds

start = time.time()

driver.get("https://news-fetcher-efb28.firebaseapp.com/")
print("Page title is: "+driver.title)
assert "React App" in driver.title

# check if login page is displayed
input_box = driver.find_element("xpath", "//div[@class='card blue']")
assert input_box.is_displayed()

# fill the input boxes and login
postfix = str(random.randint(0,100))
input_word = "author_of_test" + postfix
pass_elem = driver.find_element("xpath", "//input[@id='password']")
pass_elem.clear()
pass_elem.send_keys(input_word)
use_elem = driver.find_element("xpath", "//input[@id='userName']")
use_elem.clear()
use_elem.send_keys(input_word)
author_elem = driver.find_element("xpath", "//input[@id='userName']")
author_elem.clear()
author_elem.send_keys(input_word)
login_button = driver.find_element("xpath", "//button[2]")
login_button.click()
driver.implicitly_wait(2)

# check that user logged in
logged_elem = driver.find_element("xpath", "//div[@class='card blue']")
assert logged_elem.is_displayed()

end = time.time()

print(end - start)
driver.close()
