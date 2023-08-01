import 'dart:io';

Future<void> main(List<String> args) async {
  var client = HttpClient();
  var req = await client.post('localhost', 8024, '/dart');
  req.writeAll(
    List.generate(128, (index) => index),
  );
  var res = await req.close();
  print(res.statusCode);
  // print(res.);
}
