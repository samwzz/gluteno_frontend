def uniq_subs(string)
  results = []
  i = string.length

  while i > -1
    string.split("").each_cons(i) do |substr|
      results << substr
    end
    i -= 1
  end
  results << ""
end

p uniq_subs('cat')
