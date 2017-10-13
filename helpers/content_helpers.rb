# Calculate the years for a copyright
def copyright_years(start_year)
  end_year = Date.today.year
  if start_year == end_year
    start_year.to_s
  else
    start_year.to_s + '–' + end_year.to_s
  end
end

# Current Year
def current_year
  Time.now.year
end

# Mail to
MAIL_TO = 'mailto:'
AT = '@'
DOT = '.'

def mail_to email="user@example.com", string="contact me", classes
  comp = email.split("@")

  # process string, if it is an email address
  if string.include?("@") then
    string.gsub!("@", AT + "&zwnj;").gsub!(".", DOT)
  end

  return "<a class=\"#{classes}\" href='javascript:void(0)' rel='nofollow' onclick='str1=\"#{comp[0]}\";str2=\"#{comp[1]}\";this.href=\"#{MAIL_TO}\" + str1 + \"@\" + str2' data-no-instant>#{string}</a>"
end

def phone(string)
  "tel:#{string.gsub(/[^0-9]/, '')}"
end
