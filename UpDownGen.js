<script type="text/javascript">

      function generateUpDownText () {
        var input = document.getElementById('inputText').value;
        var res = "";
        for (i=0; i < input.length; i++) {
           res += i % 2 == 0 ? input.charAt(i).toLowerCase() : input.charAt(i).toUpperCase();
        }
        document.getElementById('outputText').value = res;
      }
    </script>
