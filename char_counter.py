def char_counter(one_string):
    acum = {}
    previous_char = None
    for one_char in one_string:
        if (not one_char in acum.keys()):
            acum[one_char] = {
                "temp": 1,
                "value": 1
            }
        if previous_char != one_char and previous_char is not None:
            acum[previous_char]["value"] = max(acum[previous_char].values())
            acum[previous_char]["temp"] = 0
        acum[one_char]["temp"] += 1
        previous_char = one_char
    for one_char in acum.keys():
        acum[one_char] = acum[one_char]["value"]
    return acum

def highest_char_occurencies(ocurrencies):
    max_value = { "char": None, "value": None}
    for key, value in ocurrencies.items():
        if max_value["value"] is None:
            max_value["char"], max_value["value"] = key, value
        elif  max_value["value"] < value:
            max_value["char"], max_value["value"] = key, value
    return max_value
# Time complexity N + M being N number of chars in string and M number of diferent chars in string
# It can be done directly just storing the greatest char and value but that solution will be narrower
# than tihs one. For example if I want to know the least value in my solution it is pretty easy and
# I dont have to change the char counter (more open closed principle)
print(highest_char_occurencies(char_counter("aaabaacaaaaaaaqrttwttt")))